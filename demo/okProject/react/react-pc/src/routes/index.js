/**
 * Created by yanji on 2018/4/1.
 */
import React, { Component } from 'react';
// import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import Home from '../view/home/Home.jsx'; // 首页
import Second from '../view/second/Second.jsx'; // 第二页
import Third from '../view/third/Third.jsx'; // 第三页
import Four from '../view/four/Four.jsx'; // 第三页
import Personal from '../view/personal/Personal.jsx' /*个人中心  不能使用lazy加载，因为会影响componentWillReceive*/
import Bundle from '../components/Bundle';
const lazy = (lazyComponent) => (props) => (
    <Bundle load={lazyComponent}>
        { Component => <Component {...props} />}
    </Bundle>
)
export default class CRouter extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/app/home" component={() => <Home {...this.props} />} />
                <Route exact path="/app/second" component={Second} />
                <Route exact path="/app/third" component={Third} />
                <Route exact path="/app/four" component={Four} />
                <Route path="/app/personal" component={Personal} />
            </Switch>
        )
    }
}