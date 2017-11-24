import './up.less'
import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import NavBar from './nav'
import {connect} from 'react-redux'
import actions from '../../store/actions/user'
class Up extends Component {
    Up=()=>{
            let username=this.username.value;
            let password=this.password.value;
            let img=this.props.oldimg;
            this.props.Up({username,password,img})
     }
    render() {
        return (
            <div className="login-panel">
                <NavBar title="注册"/>
                <div className="login-logo">
                    <img src={this.props.oldimg}/>
                </div>
                <input ref={input=>this.username=input} type="text" placeholder="手机号"/>
                <input ref={input=>this.password=input} type="text" placeholder="密码"/>
                <Link to="/in">登陆</Link>
                <div onClick={this.Up} className="login-button">注&nbsp;册</div>
                {
                    this.props.error&&<div className="error-info">{this.props.error}</div>
                }
                {
                    this.props.success&&<div className="success-info">{this.props.success}</div>
                }

            </div>

        )
    }
}
export default connect(state=>state.user,actions)(Up)