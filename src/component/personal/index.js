import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './index.less'
import {connect} from 'react-redux'
import actions from '../../store/actions/user'
class Personal extends Component{

    render(){
        console.log(this.props);
        return(
            <div className="profile">
                <div className="profile-bg">
                    <img src={this.props.img} alt=""/>

                    {
                        this.props.user?<p className="ffg">Hi！{this.props.user.username}</p>:null
                    }
                    {
                    this.props.user? <Link to="/my">头像更改</Link>:<Link to="/in">登陆</Link>
                   }
                    {this.props.user?<div className="oout" onClick={this.props.oout.bind(this,this.props.oldimg)}>退出</div>:null}

                </div>{
                this.props.success&&<div className="success-infoo">{this.props.success}</div>
            }
            </div>
        )
    }
}
export default connect(state=>state.user,actions)(Personal)
