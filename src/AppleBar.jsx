
import React, {Component} from 'react';

import '../assets/css/base.css';
import '../assets/css/AppleBar.css';



class AppleBar extends Component {

    constructor(props){
    	super(props);
    }

    componentDidMount() {

      this.initAppleAnimate('homeFooter-apple')
      $(document).bind('mousemove',(ev) => {
        this.appleAnimate(ev,'homeFooter-apple')
      })
    }



    initAppleAnimate(el){
      var oUl=document.getElementById(el);
      var aImg=oUl.getElementsByTagName("img");
      var aImgW = [48,56,68,50,48]

      aImgW.map((_item,i)=> {
        aImg[i].style.width=_item/2+"px";
      })
    }

    appleAnimate(ev,el){

      var oUl=document.getElementById(el);
      var aImg=oUl.getElementsByTagName("img");
      var disX=0;
      var disY=0;
      var dis=0;
      var aImgW = [48,56,68,50,48]

      aImgW.map((_item,i)=> {

        disX=ev.clientX-(aImg[i].offsetWidth/2+aImg[i].offsetLeft);
        disY=ev.clientY-(aImg[i].offsetHeight/2+aImg[i].offsetTop+oUl.offsetTop);
        dis=Math.sqrt(Math.pow(disX,2)+Math.pow(disY,2));
        var scale=1-dis/240;
        if(scale < 0.5){
          scale=0.5;
        }
        aImg[i].style.width=aImgW[i]*scale+"px";
      })

    }

    render(){



      return <div>
                <div className="homeFooter" id="homeFooter" data-from="rtcs">
                  <div className="homeFooter-apple-bg"></div>
                  <div className="homeFooter-apple-box"></div>
                </div>
                <ul className="homeFooter-apple" id="homeFooter-apple">
                  <li><a href="#"><img src="images/home-04.png" /></a><span>项目问答</span></li>
                  <li><a href="#"><img src="images/home-05.png" /></a><span>团队梳理</span></li>
                  <li className="center"><a href="#"><img src="images/home-06.png" /></a><span>协作</span></li>
                  <li><a href="#"><img src="images/home-07.png" /></a><span>协作</span></li>
                  <li><a href="#"><img src="images/home-08.png" /></a><span>历史回顾</span></li>
                </ul>
           </div>
    }


}


export default AppleBar
