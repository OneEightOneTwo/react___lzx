import React from 'react';
import css from './gotop.css'
class header extends  React.Component{
    constructor(props){
        super(props)
        this.state={
            class:css.top
        }
        this.window()

    }
    
    
  //自定义方法 回到顶部
  window(){
    window.onscroll = ()=>{ 
         //获取滚动条滚动的距离
    let height=window.scrollY
        if(height>34){

            //回调函数
            this.setState({
                class:css.top+" "+css.headerfix
            });
        }else{
            this.setState({
                class:css.top
            }); 
        }
}
}

//回到顶部
goTo(){
    let scrollToTop = window.setInterval(function() {
      if ( window.pageYOffset > 0 ) {
          window.scrollTo(0,window.pageYOffset-20); 
      } else {
          window.clearInterval(scrollToTop);
      }
  });
  }



     render(){
         return (
        <div className={this.state.class} onClick={this.goTo}>
        回到顶部
        </div>
         )

     }
}
export default (header)