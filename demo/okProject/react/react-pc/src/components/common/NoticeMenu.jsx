import React, { Component } from 'react'
import { Menu} from 'antd';
import NoticeIcon from 'ant-design-pro/lib/NoticeIcon';

export default class NoticeMenu extends Component {
    state={
    }
    onItemClick=(ev,tabProps)=>{
        this.setState({
            popupVisible:false
        })
        const {getToRead, history} = this.props;
        getToRead(ev.id)
        history.push(`/app/personal/msgDetail?msgId=${ev.id}`)
    }
    onPopupVisibleChange =(popupVisible)=>{
        this.setState({popupVisible})
    }
    onClear=()=>{
        this.props.clearNotice();
    }
    render() {
        const { noticeData,unreadCount } = this.props;
        return (
                <Menu
                    mode="horizontal"
                    onClick={this.menuClick}
                    className="notice-menu"
                    style={{background:'transparent'}}
                >   
                    <Menu.Item key="full">
                        <NoticeIcon
                            className="notice-icon"
                            count={unreadCount}
                            popupVisible={this.state.popupVisible}
                            onPopupVisibleChange={this.onPopupVisibleChange}
                            onItemClick={this.onItemClick}
                            onTabChange = {this.onTabChange}
                            onClear={this.onClear}>
                                <NoticeIcon.Tab
                                    list={noticeData['1']}
                                    title="通知"
                                    emptyText="你已查看所有通知"
                                    emptyImage="https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg"
                                />
                        </NoticeIcon>
                    </Menu.Item>
                </Menu>
        )
    }
}
