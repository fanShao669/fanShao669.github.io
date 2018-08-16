import React, { Component } from 'react';
import { Layout, LocaleProvider } from 'antd';
import './style/index.less';
import HeaderCustom from './components/HeaderCustom';
import Foot from './components/Index/Foot';
import { receiveData } from './redux/action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Routes from './routes';
import {isIe,isUc} from './utils/index'

// 全局组件“中文”配置
import moment from 'moment';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

const { Content, Footer } = Layout;

const route2top = ['/app/home', '/app/second','/app/third','/app/four','/app/personal']

class App extends Component {

    constructor(props){
        super(props)
        this.isIe = isIe();
        this.isUc = isUc()
    }

    state={
        scale:'0.8'
    }

    componentWillMount() {
        this.getClientWidth();
    }

    componentDidMount(){
        if(this.isUc){
            this.setState({
                scale:'1'
            })
        }
        
    }

    componentWillReceiveProps(nextProps){
        // 路由跳转，页面始终保证置顶
        if (this.props.location.pathname !== nextProps.location.pathname) {
            document.documentElement.scrollTop = document.body.scrollTop = 0
        }
        
        if (this.props.location.pathname ==='/app/home'
            && this.props.location.pathname !== nextProps.location.pathname
            && this.isIe  ) {
            window.location.reload();
        }
    }

    getClientWidth = () => {    // 获取当前浏览器宽度并设置responsive管理响应式
        const { receiveData } = this.props;
        const clientWidth = document.body.clientWidth;
        receiveData({isMobile: clientWidth <= 768}, 'responsive');
    };
    render() {
        const { responsive, history } = this.props;
        const { scale } = this.state;
        const pathName =this.props.location.pathname;
        
        return (
            <Layout>
                <Layout style={{flexDirection: 'column'}}>
                    {/*头部导航*/}
                    <HeaderCustom {...this.props} />
                    
                    {/* 内容区块 */}
                    <Content className={route2top.includes(pathName) && !responsive.data.isMobile ?'':'mt-50'}>
                        <LocaleProvider locale={zhCN}>
                            <Routes isMobile={responsive.data.isMobile} history={history} />
                        </LocaleProvider>
                    </Content>
                    {/* 页脚 */}
                    {
                        responsive.data.isMobile || this.props.location.pathname === '/app/home' ? '' 
                        :<Footer className="footer">
                            <Foot isMobile={responsive.data.isMobile} />
                        </Footer>
                    }
                </Layout>
                {
                    responsive.data.isMobile ? (   // 手机端对滚动很慢的处理
                        <style>
                        {`
                            #root{
                                height: auto;
                            }

                            #x-panel{
                                transform: scale(${scale})
                            }
                        `}
                        </style>
                    ) : (   
                        <style>
                        {`
                            #root{
                                min-width:1200px
                            }
                        `}
                        </style>
                    ) 
                }
            </Layout>
        );
    }
}

const mapStateToProps = state => {
    const { responsive = {data: {}} } = state.httpData;
    return { responsive};
};
const mapDispatchToProps = dispatch => ({
    receiveData: bindActionCreators(receiveData, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
