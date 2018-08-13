import React from 'react';
import { NavLink } from 'react-router-dom';
import { Popover, Toast } from 'antd-mobile';
import './Header.scss';
import Slider from '../Slider/Slider';
import Search from '../Search/Search';
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            docked: false,
            search: false,
            popover:false
        }
    }
    searchChange() {
        this.setState({
            search: !this.state.search
        });
    }
    popoverChange(visible){
        this.setState({
            popover:visible
        });
    }
    popoverSelect(options){
        if(options.key==="1"){
            Toast.offline('听歌识曲功能未开放', 1);
        }else if(options.key==="2"){
            Toast.offline('扫一扫功能未开放', 1);
        }
        this.setState({
            popover:false
        });
    }
    render() {
        const Item = Popover.Item;
        return (
            <div className={this.props.className}>
                <div className="qqMusic-header">
                    <div className="qqMusic-header-top">
                        <NavLink className="qqMusic-tab" activeClassName="qqMusic-tab-active" to="/center" replace>个人中心</NavLink>
                        <NavLink className="qqMusic-tab" activeClassName="qqMusic-tab-active" to="/club" replace>second</NavLink>
                        <NavLink className="qqMusic-tab" activeClassName="qqMusic-tab-active" to="/discovery" replace>搜索</NavLink>
                    </div>
                    <div className="qqMusic-header-bottom" onTouchStart={this.searchChange.bind(this)}>
                        <div className="qqMusic-header-search">
                            <i className="qqMusic-search-icon"></i>
                            <span className="qqMusic-search-text">搜索</span>
                        </div>
                    </div>
                </div>
                <Search search={this.state.search} searchChange={this.searchChange.bind(this)}></Search>
            </div>
        );
    }
}
export default Header;