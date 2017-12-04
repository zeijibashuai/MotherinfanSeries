import React, {Component} from 'react';
import 'moment/locale/zh-cn'
import moment from 'moment';
import {connect} from 'react-redux'
import './index.less'
import action from '../../../store/actions/list'
@connect(state=>state.list,action)
export default class Yinsi extends Component {
    constructor(){
        super();
        this.state={img:[]}
    }
    componentDidMount(){
        this.props.is();
    }
    ckk=()=>{
        this.setState({
            img:[]
        })
        let aa=new Date()
        let zz=this.zz;
        let obj1={li:zz.value,lim:this.state.img,time:aa};
        this.props.upd(obj1);
        this.zz.value=''
        // if(zz){
        //     this.setState((prevState, props) => ({
        //         iii:[...prevState.iii,obj1]
        //        }));
        //     this.setState((prevState, props) => {
        //         console.log(prevState.iii);
        //     });
        // }
    };

    mm=()=>{
        console.log(10);
        let input=this.p;
        let h=this.h||this.p;
        let img=this.i;
        let _this=this;
        console.log( );
        input.addEventListener('change',function (e) {
                let files = event.target.files, file;
            console.log(files,'geteteetetetete');
            if (files && files.length > 0) {
                let aaary=[],URL = window.URL || window.webkitURL;
                 for(let i=0;i<files.length;i++){
                     let imgURL=URL.createObjectURL(files[i]);
                     aaary.push(imgURL)
                 }

                _this.setState((prevState, props) => ({
                    img:[...prevState.img,...aaary]
                }));
                _this.setState((prevState, props) => ({
                    width:(parseFloat(getComputedStyle(h, null).width)+5 )*prevState.img.length+"px"
                }));
                }
            }
        )
    }
    bbbbb(){
        let input=document.getElementsByClassName('fileq')[0];
        input.style.display='block';
    }
    ccccc(){
        let input=document.getElementsByClassName('fileq')[0];
        setTimeout(()=>{
            input.style.display='none'
        },100)
    }

    render() {
        return (
            <div className="mmmmm" >
                <div className="hul">
                    <h4>ta的成长路途</h4>
                    <ul className="majiang">
                        {this.props.iii.map((item,index)=>(
                            <li key={index} className="hong">👶 <span className="timeout">{moment(item.time).fromNow()}</span>
                                <p className="zhong">{item.li}</p>
                                {item.lim.map((item,index)=>(
                                    <img src={item} key={index} className="caidian" alt=""/>
                                ))}

                            </li>
                        ))}
                        {/*{this.state.iii.map((item,index)=>(*/}
                        {/*<li key={index} className="hong">*/}
                        {/*<h1 className="zhong">{item.li}</h1>*/}
                        {/*{item.lim.map((item,index)=>(*/}
                        {/*<img src={item} key={index} className="caidian" alt=""/>*/}
                        {/*))}*/}
                        {/*</li>*/}
                        {/*))}*/}
                    </ul>
                </div>

                    <div className="hhhhhh">
                        <label className="cooooo">写点什么吧</label>
                        <div className="sm">
                           <textarea onFocus={this.bbbbb} ref={p=>this.zz=p} onBlur={this.ccccc} className="form-control gggggggg" rows="3" placeholder="宝贝点点滴滴"></textarea>
                            <a href="javascript:;" className="fileq">+
                                <input name="img" onClick={this.mm} ref={p=>this.p=p} type="file" multiple="multiple"/>
                            </a>
                        </div>

                            <div className="yykk">
                                <ul className="yyk" style={{width:this.state.width}}>
                                    {this.state.img.map((item,i)=>(
                                        <li ref={p=>this.h=p} key={i}><img   src={item} alt=""/></li>
                                    ))}
                                </ul>
                            </div>

                        <div type="button" onClick={this.ckk} className="btn btn-sm btn-primary yyu" disabled="disabled">提交</div>
                    </div>
            </div>
        )
    }
}