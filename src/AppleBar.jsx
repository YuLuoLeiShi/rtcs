
import React, {Component} from 'react';
import '../assets/css/base.css';
import '../assets/css/AppleBar.css';




class AppleBar extends Component {

    constructor(props){
    	super(props);
      this.move = this.move.bind(this)

    }

    componentDidMount() {
      this.initAppleAnimate('homeFooter-apple')
      $(document).bind('mousemove',this.move)
    }

    componentWillUnmount() {
      $(document).unbind('mousemove',this.move)
    }


    move(ev){
      this.appleAnimate(ev,'homeFooter-apple')
    }


    initAppleAnimate(el){
      var oUl=document.getElementById(el);
      var aImg=oUl.getElementsByTagName("img");
      var aImgW = this.props.appData

      aImgW.map((_item,i)=> {
        aImg[i].style.width=(_item.width || 50)/2+"px";
      })
    }

    appleAnimate(ev,el){

      var oUl=document.getElementById(el);
      var aImg=oUl.getElementsByTagName("img");
      var disX=0;
      var disY=0;
      var dis=0;
      var aImgW = this.props.appData

      aImgW.map((_item,i)=> {

        disX=ev.clientX-(aImg[i].offsetWidth/2+aImg[i].offsetLeft);
        disY=ev.clientY-(aImg[i].offsetHeight/2+aImg[i].offsetTop+oUl.offsetTop);
        dis=Math.sqrt(Math.pow(disX,2)+Math.pow(disY,2));
        var scale=1-dis/240;
        if(scale < 0.5){
          scale=0.5;
        }
        aImg[i].style.width=(aImgW[i].width || 50)*scale+"px";
      })

    }

    render(){

      const { appData , appBarStyle , appBarCenterColr } = this.props;

      return <div>
                <div className="homeFooter" id="homeFooter" data-from="rtcs">
                  <div style={appBarStyle || {}} className="homeFooter-apple-bg"></div>
                  {appBarCenterColr && <div style={{backgroundColor:appBarCenterColr}} className="homeFooter-apple-box"></div> }
                </div>
                <ul className="homeFooter-apple" id="homeFooter-apple">
                  { appData && appData.length > 0 && appData.map((item,index) => {
                    return (<li onClick={() => { item.cb && item.cb()} } key={`${item.image}${item.title}`}><a href="#"><img src={item.image} /></a>{item.title && <span>{item.title}</span>}</li>)
                  })}


                </ul>
           </div>
    }


}


export default AppleBar
