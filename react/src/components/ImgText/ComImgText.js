import react from "react"
//css
import css from "./ComImgText.css"
function ImgText(porps) {
    return (
        <ul className={css.ul}>
            {porps.data.map((item, index) => {
                    return (
                        <li className={css.item} key={index}>
                            <div>
                                <img src={item.img} alt="" className={css.imgdiv} />
                            </div>
                            <span className={css.span}>
                                {item.text}
                            </span>
                        </li>
                    )
                })}
        </ul>
    )
}
export default ImgText