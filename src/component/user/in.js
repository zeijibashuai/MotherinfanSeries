import './in.less'
import React, {Component} from 'react';
import NavBar from './nav'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import actions from '../../store/actions/user'


 class In extends Component {
    login=()=>{
        let username=this.username.value;
        let password=this.password.value;
        this.props.In({username,password})
    }
    render() {
        return (
            <div className="login-panel">
                <NavBar title="登录"/>
                <div className="login-logo">
                    <img src={this.props.oldimg}/>
                </div>
                <input ref={input=>this.username=input} type="text" placeholder="手机号"/>
                <input ref={input=>this.password=input} type="text" placeholder="密码"/>
                <Link to="/up">注册</Link>
                <div onClick={this.login} className="login-button">登&nbsp;录</div>
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

export default connect(state=>state.user,actions)(In)