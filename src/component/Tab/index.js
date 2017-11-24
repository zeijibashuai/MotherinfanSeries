import React,{Component} from 'react'
import {NavLink} from 'react-router-dom';
import './index.less'
import {connect} from 'react-redux'
import actions from '../../store/actions/user'

class Tab extends Component{
    componentDidMount(){
        this.props.validate()
    }
    render(){
        return (
            <nav className="tabs">
                <NavLink  activeStyle={{color:"#e4c87e"}} exact to="/" >
                    <i className="iconfont icon-jianjie"></i>
                    <span>资讯</span>
                </NavLink>

                <NavLink activeStyle={{color:"#e4c87e"}} to="/list">
                    <i className="iconfont icon-guanyuwomen"></i>
                    <span>baby成长</span>
                </NavLink>

                <NavLink activeStyle={{color:"#e4c87e"}} to="/personal">
                    <i className="iconfont icon-common-changjianwenti-copy"></i>
                    <span>个人中心</span>
                </NavLink>
            </nav>
        )
    }
}
export default connect(state=>state,actions)(Tab)
