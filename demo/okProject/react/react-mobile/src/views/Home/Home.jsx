import React from 'react';
import { Switch, Route ,Redirect} from 'react-router';
import Header from '../../components/Header/Header';
import Bandstand from '../../components/Bandstand/Bandstand';
import Center from '../Center/Center';
import Club from '../Club/Club';
import Discovery from '../Discovery/Discovery';
import './Home.scss';
class Home extends React.Component {
    render() {
        return (
            <div className="yani-home">
                <Header className="yani-home-header" /> 
                <div className="yani-home-body">
                    <Switch className="yani-home-body">      
                        <Redirect exact from="/" to="/center"/>                    
                        <Route path="/center"  component={Center} />
                        <Route path="/club" component={Club} />
                        <Route path="/discovery" component={Discovery} />
                    </Switch>
                </div>                                                            
                <Bandstand/>
            </div>
        );
    }
}
export default Home;