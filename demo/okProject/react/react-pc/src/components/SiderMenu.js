import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

const menuStyle={
    background:'transparent',
    lineHeight:'50px'
}

const renderMenuItem =
    ({ key, title, icon, link, ...props }) =>
        <Menu.Item
            key={key || link}
            {...props}
        >
            <Link to={link || key}>
                {icon && <Icon type={icon} />}
                <span className="nav-text">{title}</span>
            </Link>
        </Menu.Item>;
export default ({ menus,mode, ...props }) => <Menu {...props} mode={mode} style={menuStyle} >
    {menus && menus.map(
        item => item.isHide && props.isMobile? '':renderMenuItem(item)
    )}
</Menu>;