import React,{Component} from 'react'
import {HashRouter as Router,Route,NavLink} from 'react-router-dom'
import 'antd/dist/antd.css';
import Home from "../home/index";
import List from "../list/index";
import Personal from "../personal/index";
import Tab from "../Tab/index";
import In from "../user/in";
import Up from "../user/up";
import createHistory from 'history/createHashHistory'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import My from "../user/my";
const history = createHistory();



export default class App extends Component{
    render(){
        return(
            <ConnectedRouter history={history}>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route  path="/home" component={Home}/>
                    <Route path="/list" component={List}/>
                    <Route path="/personal" component={Personal}/>
                    <Route path="/up" component={Up}/>
                    <Route path="/in" component={In}/>
                    <Route path="/my" component={My}/>
                    <Tab/>
                </div>
            </ConnectedRouter>
        )
    }
}
