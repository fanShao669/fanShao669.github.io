import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NotFound from './view/pages/NotFound';
import E500 from './view/pages/E500';
import E503 from './view/pages/E503';
import E403 from './view/pages/E403';
import App from './App';

export default () => (
    <Router>
        <Switch>
            <Route exact path="/" render={() => <Redirect to="/app/home" push />} />        
            <Route path="/app" component={App} />
            <Route path="/403" component={E403} />
            <Route path="/404" component={NotFound} />
            <Route path="/503" component={E503} />
            <Route path="/500" component={E500} />
            <Route component={NotFound} />
        </Switch>
    </Router>
)