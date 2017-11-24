import React, {Component} from 'react';
import './nav.less'
import {push,goBack} from 'react-router-redux'
import {connect} from 'react-redux'
 class NavBar extends Component {
    render() {
        return (
            <div className="nav-bar">
                {this.props.title}
                <i className="iconfont icon-fanhui" onClick={this.props.back}></i>
            </div>
        )
    }
}
let qqq={
    back(){
        return dispatch=>{
                dispatch(
                    goBack()
                )
        }
    }
}
export default connect(null,qqq)(NavBar)