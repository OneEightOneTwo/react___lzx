import React from 'react';
import Top from '../../components/gaoli-gotop/gotop'
import Header from '../../components/gaoli-header/header'
import css from './gaoli.css'
class gaoli extends  React.Component{
    constructor(props){
        super(props)
        this.state={}


  }

     render(){
         return (
           <div className={css.content}>
               <Header/>
               <Top/>



           </div>
         )

     }
}
export default (gaoli)