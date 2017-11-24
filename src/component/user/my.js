import React, {Component} from 'react';
import NavBar from './nav'
import './my.less'
import {connect} from 'react-redux'
import actions from '../../store/actions/user'
@connect(state=>state.user,actions)
export default class My extends Component {
    xg=()=>{
        let newimg=this.i;
        let newsrc=newimg.getAttribute('src');
        console.log(this.props);
        this.props.cimg({img:newsrc,username:this.props.user.username});
        this.n.src=newsrc;
    }
    mm=()=>{
        let input=this.p;
        let img=this.i;
        input.addEventListener('change',function (e) {
                let files = event.target.files, file;
                if (files && files.length > 0) {
                    // 获取目前上传的文件
                    file = files[0];// 文件大小校验的动作
                    if(file.size > 1024 * 1024 * 2) {
                        alert('图片大小不能超过 2MB!');
                        return false;
                    }
                    let URL = window.URL || window.webkitURL;
                    // 通过 file 生成目标 url
                    console.log(file);
                    let imgURL = URL.createObjectURL(file);
                    img.setAttribute("src",imgURL);
                }
            }
        )
    }
    render() {
        return (
            <div>
                <NavBar title="个人头像修改"/>

                <img src="" alt=""/>
                <img  className="myimg" ref={i=>this.i=i}  src={this.props.img} alt="" />

                <a href="javascript:;" className="file">选择文件
                    <input onClick={this.mm} ref={p=>this.p=p} type="file"/>
                </a>
                <p className="myppp" onClick={this.xg}>提交修改</p>
                <img ref={p=>this.n=p} src="" alt=""/>

            </div>
        )
    }
}
