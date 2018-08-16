/**
 * Created by yanji on 2017/4/13.
 */
import React, { Component } from 'react';
import { Icon, Layout, Tag, Popover, message } from 'antd';
import { getUserInfo } from '../axios/index';
import NoticeMenu from '../components/common/NoticeMenu';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SiderCustom from './SiderCustom';
import { menus } from '../constants/menus';
import { bindActionCreators } from 'redux';
import { receiveData, fetchData } from '../redux/action/index';
import moment from 'moment';
import Cookie from 'js-cookie';
import groupBy from 'lodash/groupBy';
// import {config} from '../constants/ursConfig'
import { getParams } from '../utils/index'
import SiderMenu from './SiderMenu';
import '../style/header.less'

const { Header } = Layout;

class HeaderCustom extends Component {
    constructor(props){
        super(props)
        this.limitHeight = 200;
        this.state ={
            selectedKey: '',
            visible:false,
            noticeList:[],
            isLogin:false,
            userName:'',
            isScroll:false
        }
    }

    componentDidMount() {
        const adType = getParams(window.location.href).adType;
        const userName = Cookie.get('userName'); // 登录过
        if(adType){
            Cookie.set('adType',adType); // 增加广告
        }
        if(userName){// 不存在userName,从没有登录过
            this.setState({userName:userName,isLogin:true});
            this.getNoticeList();
        }
        this.setMenuOpen(this.props);
        window.addEventListener('scroll',this.evScroll);
    }

    componentWillReceiveProps(nextProps) {
        const {receiveData} = this.props;
        this.setMenuOpen(nextProps);
        if(nextProps.login.data.goLogin){
            receiveData ({goLogin:false},'login');
            this.login();
        }
    }

    /**
     * 监听屏幕滚动
     * 
     */
    evScroll=()=>{
        if(this.props.location.pathname === '/app/home'){
            return;
        }
        let scrollTop =document.documentElement.scrollTop||document.body.scrollTop;
        if(scrollTop > this.limitHeight && this.state.isScroll===false){
            this.setState({
                isScroll:true
            })
        }
        if(scrollTop < this.limitHeight && this.state.isScroll===true){
            this.setState({
                isScroll:false
            })
        }
    }

    setMenuOpen = props => {
        const { pathname } = props.location;
        let openKey = pathname.substr(0, pathname.lastIndexOf('/'));
        // 设置openkeys
        menus.map(item=>{
            openKey= item.key.includes(openKey)>0 ?item.key:openKey
        })

        this.setState({
            openKey: openKey,
            selectedKey: pathname
        });
    }

    menuClick = e => {
        this.setState({
            selectedKey: e.key
        });
        console.log(e);
        e.key === 'logout' && this.logout();
    };

    login =()=>{
        this.popoverHide();
    }

    backHome =()=>{
        this.props.history.push("/app/home")
    }

    popoverHide = () => {
        this.setState({
            visible: false,
        });
    };
   
    // 确认已读
    getToRead=(id)=>{
        this.setState({
            noticeList:this.state.noticeList.filter(item=>id!=item.id)
        })
    }
    
    getNoticeData(notices) {
        if (notices.length === 0) {
          return {};
        }
        const newNotices = notices.map((notice) => {
          const newNotice = { ...notice };
          if (newNotice.gmtCreateTime) {
            newNotice.datetime = moment(notice.gmtCreateTime).fromNow();
          }
          // transform id to item key
          if (newNotice.id) {
            newNotice.key = newNotice.id;
          }
          if (newNotice.extra && newNotice.status) {
            const color = ({
              todo: '',
              processing: 'blue',
              urgent: 'red',
              doing: 'gold',
            })[newNotice.status];
            newNotice.extra = <Tag color={color} style={{ marginRight: 0 }}>{newNotice.extra}</Tag>;
          }
          return newNotice;
        });
        return groupBy(newNotices, 'messageType');
      }

    handleVisibleChange = (visible) => {
        this.setState({ visible });
    };

    isPersonCenter=(pathName)=>
        pathName.includes('/app/personal') || 
        pathName.includes('/app/11111')

    render() {
        const { responsive, history } = this.props;
        const { isLogin, userName,isScroll} = this.state;
        const noticeData = this.getNoticeData(this.state.noticeList);
        const centerFlag = this.isPersonCenter(history.location.pathname)
        return (
            <Header className={`header ${centerFlag?'header-for-center':''}`} style={{width:"100vw",background:`${isScroll||centerFlag?'transparent':(responsive.data.isMobile ? '#fff':'transparent')}`}}>
                  {
                    responsive.data.isMobile ? 
                    (
                        <div className="row mobile-header-center " >
                            <div className="col-xs-4" onClick={this.handleVisibleChange}>
                            <Popover content={<SiderCustom popoverHide={this.popoverHide} isMobile={responsive.data.isMobile} login={this.login} isLogin={isLogin} logout ={this.logout} />} trigger="click" placement="bottomLeft" visible={this.state.visible} onVisibleChange={this.handleVisibleChange}>
                                <Icon type="bars" className="trigger custom-trigger" />
                            </Popover>
                            </div>
                            <div className="col-xs-16 f-tac" onClick={this.backHome}> 
                                <span className="title">1111</span>
                            </div>
                            <div className="col-xs-4 f-tar"> 
                                {isLogin&&<NoticeMenu noticeData={noticeData} unreadCount={this.state.noticeList.length} history= {history} getToRead = {this.getToRead} />}
                            </div>
                        </div>
                    ) : 
                    <div className="row header-center" >
                        <div className="f-tal header-center-icon" >
                            <div className="logo f-usn f-cp" onClick={this.backHome}> 
                                <span className="title">111</span>
                            </div>
                        </div>
                        <div className="f-tar header-center-menu" >
                            <SiderMenu menus={menus} selectedKeys={[this.state.openKey, this.state.selectedKey]} onClick={this.menuClick} mode="horizontal" />
                        </div>
                        <div className="f-tar header-center-exit" >
                            {
                                isLogin?
                                <div className="header-center-right">
                                    <NoticeMenu 
                                        noticeData={noticeData} 
                                        unreadCount={this.state.noticeList.length} 
                                        clearNotice ={this.clearNotice } 
                                        history= {history} 
                                        getToRead = {this.getToRead}
                                    />
                                    <span>欢迎您，<strong>{userName}</strong></span> 
                                    <span onClick={this.logout} className="login-out">退出</span>
                                </div>: ''
                                 /*<div className="header-center-right"><span onClick={this.login} className="login-in">登录</span></div> */
                                
                            }
                            
                        </div>
                    </div>
                }
            </Header>
            
        )
    }
}

const mapStateToProps = state => {
    const { responsive = {data: {}}, login ={data:{}}} = state.httpData;
    return { responsive,login};
};
const mapDispatchToProps = dispatch => ({
    receiveData: bindActionCreators(receiveData, dispatch),
    fetchData: bindActionCreators(fetchData, dispatch),
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(HeaderCustom));
