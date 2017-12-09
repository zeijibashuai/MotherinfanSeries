import React,{Component} from 'react'
import Homeheader from "./homeheader/index";
import H1 from "./homeheader/h1/index";
import {connect} from 'react-redux'
import action from '../../store/actions/home'
import './index.less'


@connect(state=>state,action)
export default class Home extends Component{
    constructor(){
        super();
        this.state={home:1}
    }
    componentDidMount(){
        if(this.props.home.list.length==0){
            this.props.getSlider();
            this.props.getIteml();
        }
    }

    asd=(b)=>{
        this.setState({home:b})
    }
    render(){
        return(
          <div>

            <Homeheader user={this.props.user} home={this.state.home} asd={this.asd}/>
                  {this.state.home==1?<H1 fn={this.props.getItem} f={this.props.home.flag} item={this.props.home.item} imglist={this.props.home.list}/>:this.state.home==2?<h1>b</h1>:this.state.home==3?<h1>SB</h1>:<h1>kkk</h1>}

          </div>
        )
    }
}

