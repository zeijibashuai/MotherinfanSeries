import React, {Component} from 'react';
import './index.less'
import ReactSwipe from 'react-swipe';
import {upMore} from '../../../../api/uu'
import Loading from '../../Loading/index'
import { NoticeBar, WhiteSpace, Icon } from 'antd-mobile';
export default class H1 extends Component {
    componentDidMount(){
        upMore(this.refs.asd,this.props.fn)
    }
    render() {
        let swipeOptions = {
            continuous:true,
            auto:1600,
            callback:(index)=>{
                this.setState({index})
            }
        };
        return (
            <div className="home-main" ref="asd" >
                <div className="slidera" >
                    {
                        this.props.imglist.length>0?<ReactSwipe className="carousel" swipeOptions={swipeOptions}>
                            {
                                this.props.imglist.map((item,index)=>(
                                    <div key={index} >
                                        <img  src={item}/>
                                    </div>
                                ))
                            }
                        </ReactSwipe>:null
                    }
                </div>

                    <NoticeBar  marqueeProps={{ loop: true, style: { padding: '0 0.15rem'} }}>
                    国庆期间母婴产品大降价，欢迎大家前来选购，新地球，却想回到那一年被遗忘的小岛，新地球，他们怎么想？
                 </NoticeBar>



                <div className="itemul" >
                    <ul >
                        {
                      this.props.item.map((item,index)=>(
                          <li key={index} className="itemli">
                              <img className="itemimg" src={item.Cover} alt=""/>
                              <div className="zzz">
                                  <h2 className="itemh5">{item.Name}</h2>
                                  <h2 className="itemspan">￥{item.Mo}</h2>
                              </div>
                              <p className="itemp">{item.Info}{item.Name}</p>

                          </li>
                      ))

                        }
                        {
                            this.props.item.f?null:<Loading/>
                        }
                    </ul>
                </div>

            </div>
        )
    }
}
