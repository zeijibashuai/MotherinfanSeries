import React, {Component} from 'react';
import './public.less'
import actions from '../../../store/actions/list'
import {connect} from 'react-redux'
@connect(state=>state.list,actions)
export default class Public extends Component {
    render() {
        return (
            <div className="p">
                <img src="http://www.cr173.com/up/2017-11/15101267652253370.jpg" className="pb" alt=""/>
                <div className="pbp"></div>

                <div className="pbpb">此页面需要你登陆后才显示
                    <span className="godenglu" onClick={this.props.pusha.bind(null,1)}>去登陆</span>
                    <span className="gohome" onClick={this.props.pusha.bind(this,2)}>去首页</span>
                </div>


            </div>
        )
    }
}
