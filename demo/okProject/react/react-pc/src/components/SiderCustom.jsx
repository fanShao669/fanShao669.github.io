
/**
 * Created by yanji.
 */

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { menus } from '../constants/menus';
import SiderMenu from './SiderMenu';

class SiderCustom extends Component {
    state = {
        selectedKey: '',
    };
    menuClick = e => {
        this.setState({
            selectedKey: e.key
        });
        const { popoverHide } = this.props;     // 响应式布局控制小屏幕点击菜单时隐藏菜单操作
        popoverHide && popoverHide();
    };
    render() {
        const { isLogin,logout,login, isMobile } =this.props;
        return (
            <div>
                <SiderMenu
                    menus={menus}
                    isMobile={isMobile}
                    onClick={this.menuClick}
                    mode="vertical"
                    selectedKeys={[this.state.selectedKey]}
                />
                {isLogin&&<div onClick={logout} className="u-login">退出</div>}
                {!isLogin&&<div onClick={login} className="u-login">登录</div>}
            </div>
        )
    }
}

export default withRouter(SiderCustom);