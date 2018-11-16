import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
// import {createStackNavigator} from 'react-navigation'


import ShareIndex from "./page/pull";
import GotBagIndex from "./component/pull/GotBag";



class RootRouter extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={ShareIndex} /> {/*share*/}
                <Route exact path="/bag" component={GotBagIndex} />
            </Switch>
        )
    }
}
export default RootRouter;