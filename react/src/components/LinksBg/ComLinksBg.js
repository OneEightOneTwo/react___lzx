import react from "react"
//css
import css from "./ComLinkBg.css"
function LinksBg(porps) {
    return (
        <div>
            <div className={css.bg}>
                <div className={css.title} style={porps.con.title?{}:{display:'none'}}>{porps.con.title}</div>
                <porps.con.com data={porps.con.data} />
            </div>
        </div>
    )
}
export default LinksBg