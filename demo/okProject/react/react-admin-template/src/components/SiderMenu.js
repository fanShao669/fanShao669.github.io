import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

const renderMenuItem = item => (    // item.route 菜单单独跳转的路由
    <Menu.Item
        key={item.key}
    >
        <Link to={item.route || item.key}>   
            {item.icon && <Icon type={item.icon} />}
            <span className="nav-text">{item.title}</span>
        </Link>
    </Menu.Item>
);

const renderSubMenu = (item,roleType) => ( 
    <Menu.SubMenu
        key={item.key}
        title={
            <span>
                {item.icon && <Icon type={item.icon} />}
                <span className="nav-text">{item.title}</span>
            </span>
        }
    >
        {item.subs
        .filter(t => !t.roleList || t.roleList.includes(roleType))
        .map(item => renderMenuItem(item))}
    </Menu.SubMenu>
);

export default ({ menus, ...props }) => {
    const { user = {} } = props;
    return (
        <Menu {...props}>
            {menus && menus
            .filter(t => !t.roleList || t.roleList.includes(user.roleType))
            .map(item => item.subs && item.subs.length ? renderSubMenu(item,user.roleType) : renderMenuItem(item)
            )}
        </Menu>
    )
   
};