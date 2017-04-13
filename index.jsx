import React, {Component} from 'react';


class RImageMiddle extends Component {

    constructor(props){
    	super(props);
    }

    render(){
      const { imageUrl , width , height , imgWidth , imgHeight , alt} = this.props
      const _spanCss = {
        display : 'inline-block',
        position : 'absolute',
        width : 0 ,
        height : height + 'px'
      }

      const _divCss = {
        'display': 'table-cell',
        'verticalAlign': 'middle',
        'textAlign': 'center',
        width : width + 'px' ,
        height : height + 'px'
      }

      return <div className="imageMiddle" style={_divCss}>
        <span style={_spanCss}></span>
        {imgWidth && !imgHeight && <img src={`./images/${imageUrl}`} width={imgWidth} alt={alt || ''} /> }
        {imgHeight && !imgWidth && <img src={`./images/${imageUrl}`} height={imgHeight} alt={alt || ''} />}
        {imgWidth && imgHeight && <img src={`./images/${imageUrl}`} width={imgWidth} height={imgHeight} alt={alt || ''} />}
      </div>
    }


}


export  { RImageMiddle }
