import React, {Component} from 'react';
import './index.less'
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
import {NavLink} from 'react-router-dom';
export default class Homeheader extends Component {

    a=(b,e)=>{
        // 事件源问题
        if(e.target.tagName!=='DIV'){
            console.log(e.tagName);
            return
        }
        if(this.props.home==b){
            console.log(1111111111);
            return false
        }
        this.props.asd(b);
        e.target.setAttribute('class',"activee");
        let d=function siblings() {
            var a = [];
            var p = e.target.parentNode.parentNode.children;
            for(var i =0,pl= p.length;i<pl;i++) {
                if(p[i] !== e.target.parentNode) a.push(p[i]);
            }
            return a;
        }();
        for(let p=0;p<d.length;p++){
            d[p].children[0].classList.remove("activee");
        }
    }

    render() {
        return (
            <div className="homeheader">
                <div className="headerh">
                    <div className="headerimg">
                        <img src="https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=005e5fcd9aef76c6c4dff379fc7f969f/9358d109b3de9c8234db74636681800a18d843a4.jpg" alt="" />
                    </div>
                </div>
                <div className="aaa">
                    <div className="asd">
                        <ul className="headernav">
                            <li onClick={this.a.bind(this,1)}><div className="activee">舒身心<span></span></div></li>
                            <li onClick={this.a.bind(this,2)}><div>好心情<span></span></div></li>
                            <li onClick={this.a.bind(this,3)}><div>膳食<span></span></div></li>
                            <li onClick={this.a.bind(this,4)}><div>维生素<span></span></div></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}