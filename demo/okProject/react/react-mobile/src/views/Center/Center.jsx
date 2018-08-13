import React from 'react';
import { List, Switch, Grid } from 'antd-mobile';
import { createForm } from 'rc-form';
import './Center.scss';
import auditionImg from '../../assets/imgs/icon-user-audition.png';
import dredgeImg from '../../assets/imgs/icon-user-dredge.png';
import rankImg from '../../assets/imgs/icon-user-rank.png';
import Songlist from '../../components/Songlist/Songlist';
class Center extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="g-center">
                <div className="m-center-top">
                    个人中心页面
                </div>
            </div>
        )
    }
}
export default Center;