import React, {Component} from 'react';
import {connect} from 'react-redux'
import actions from '../../store/actions/list'
import Public from "./or/public";
import Yinsi from "./or/yinsi";
@connect(state=>state.list,actions)
export default class List extends Component {
     componentDidMount(){
         this.props.is()
     }
    render() {
        return (
            <div>
                {this.props.code===0?<Yinsi/>:<Public/>}
            </div>
        )
    }
}