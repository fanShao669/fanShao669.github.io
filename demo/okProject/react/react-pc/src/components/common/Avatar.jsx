import React, { Component } from 'react'
import { Upload, Icon, Modal,message,Slider } from 'antd';
import AvatarEditor from 'react-avatar-editor'
import {saveAvatar} from '../../axios/index'

export default class Avatar extends Component {
    constructor(props) {
        super(props);
        this.accpetType = props.accpetType ||'image'; // 文件类型
        this.accpetSize = props.accpetSize || 2; // 文件大小（/兆）
        this.state = {
            loading: false,
            visible:false,
            fileList: [],
            scale:1.6,
            position: { x: 0.5, y: 0.5},
            avatar:'', // 照片的base64 位地址
            previewImage: ''  // 预览图片
        };
    }

    componentWillReceiveProps(nextProps){
        this.setState({fileList: nextProps.avatar || []})
    }

    // 提交到服务器
    handleUpload = (canvasScaled) => {
        saveAvatar({canvasScaled}).then(res=>{
            this.props.onUpload(res)
            // 自行获取方案
            // getAvatar().then(res=>{
            //   this.setState({
            //     fileList:res.data||[]
            //   })
            // })
        })
    }
    handleXPosition = e => {
        const x = parseFloat(e.target.value)
        this.setState({ position: { ...this.state.position, x } })
    }
    
    handleYPosition = e => {
        const y = parseFloat(e.target.value)
        this.setState({ position: { ...this.state.position, y } })
    }
    handlePositionChange = position => {
        this.setState({ position })
    }
    // 上传图片
    handleChange = (info) => {
        // 判断文件类型
        const { type } = info.file;
        const isPic= type.includes(this.accpetType);
        if (!isPic || !['jpg','jpeg','png','gif'].includes((type.split("/")[1] || '').toLowerCase())) {
            message.error('请上传JPG、JPEG、PNG或者GIF文件!');
            return;
        }

        // 判断文件大小
        const isLt2M = info.file.size / 1024 / 1024 < this.accpetSize;
        if (!isLt2M) {
            message.error(`文件大小不能超过 ${this.accpetSize}M!`);
            return;
        }

        if(isPic && isLt2M){
            this.getBase64(info.file, imageUrl => this.setState({
                imageUrl,
                loading: false,
                visible:true
            }));
        }
    }

    // base64 位转码
    getBase64 =(img,callback)=>{
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }

    // 预览图片
    handlePreview = (file) => {
        this.setState({
            previewImage: file.url,
            previewVisible: true,
        });
    }

    // 删除图片
    handleRemove = (file) => {
        this.props.onRemove(file);
    }

    beforeUpload = (file, fileList) => {
        return false;
    }

    // 放大底片
    handleScale=(scale)=>{
        this.setState({scale: scale})
    }

    // 取消上传头像
    handleCancel=()=>{
        this.setState({visible: false})
    }

    // 放弃预览
    previewCancel=()=>{
        this.setState({previewVisible: false})
    }

    // 保存头像的功能
    handleOk = () => {
        if (this.editor) {
            // This returns a HTMLCanvasElement, it can be made into a data URL or a blob,
            // drawn on another canvas, or added to the DOM.
            const canvas = this.editor.getImage()
            // If you want the image resized to the canvas size (also a HTMLCanvasElement)
            const canvasScaled = this.editor.getImageScaledToCanvas().toDataURL("image/png", 1.0)
            this.handleUpload(canvasScaled)
            this.setState({
                avatar: canvasScaled,
                visible: false,
            });
        }
    }

    // 获取编辑器的索引
    setEditorRef = (editor) => this.editor = editor
  
    render() {
        const {title} = this.props;
        const {previewVisible, imageUrl, previewImage, fileList} = this.state;
        
        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">{title}</div>
            </div>
        );

        const props = {
            action: '/',
            name: "avatar",
            listType: "picture-card",
            className: "avatar-uploader",
            fileList,
            onChange: this.handleChange,// 上传图片改变时的状态
            onPreview: this.handlePreview,// 点击文件链接或预览图标时的回调
            onRemove: this.handleRemove,// 点击移除文件时的回调，返回值为 false 时不移除。
            beforeUpload: this.beforeUpload,// 图片上传前的钩子函数
        };

        return (
        <div className="m-avatar">
            <Upload {...props}>
                {this.state.fileList.length >= 1 ? null : uploadButton}
            </Upload>
            
            <Modal 
                title="照片预览" 
                visible={previewVisible} 
                onCancel={this.previewCancel}
                footer={null}
                bodyStyle={{textAlign: 'center'}}
            >
                <img alt="照片预览" style={{ width: '200px', height: '300px' }} src={previewImage} />
            </Modal>

            <Modal 
                title="裁剪照片"
                visible ={this.state.visible} 
                onCancel={this.handleCancel} 
                onOk={this.handleOk }
            >
            <div style={{textAlign:'center'}}>
                <AvatarEditor
                    ref={this.setEditorRef}
                    image={imageUrl}
                    width={300}
                    height={400}
                    border={40}
                    position={this.state.position}
                    onPositionChange={this.handlePositionChange}
                    color={[0, 0, 0, 0.8]} // RGBA
                    scale={parseFloat(this.state.scale)}
                    rotate={0}
                />
            </div>
            <div>
                <Slider
                    onChange={this.handleScale}
                    min={1}
                    max={3}
                    step={0.1}
                    value={this.state.scale}
                    style={{ width: 280, margin: '10px auto' }}
                    />
            </div>
                
            </Modal>
        </div>
        );
    }
}