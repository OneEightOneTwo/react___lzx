import React from "React"
//css
import css from "./ComMoreNav.css"
function MoreNav(porps) {
    return (
       <ul className={css.ul}>
          {porps.data.map((item,index)=>{
              return (
                  <li className={css.item} key={index}>{item}</li>
              )
          })}
       </ul>
    )
}
export default MoreNav