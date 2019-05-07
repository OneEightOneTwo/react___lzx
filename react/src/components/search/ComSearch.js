import react from "react";
import css from "./ComSearch.css";

class Search extends react.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputText: {}
        }
    }

    render() {
        let type = this.props.type === 'blue'
        return (
            <div className={css.searchBox} style={this.state.inputText} >
                {/* 输入框 */}
                <input
                    style={type ? { width: "245px" } : {}}
                    className={css.inputText}
                    type="text"
                    placeholder="请输入关键字"
                    onFocus={() => { this.borderColor(type ? 'blue' : "red") }}//获得焦点
                    onBlur={() => { this.borderColor() }}                      //失去焦点
                />
                {/* 搜索按钮 */}
                {(() => {
                    if (type) {
                        return (<span className={css.inputBtnBlue}>搜索</span>)
                    } else {
                        return (<span className={css.inputBtn}></span>)
                    }
                })()}
            </div>
        )
    }

    //切换输入框颜色  color:切换的颜色
    borderColor(color) {
        this.setState({
            inputText: color ? { borderColor: color } : {}
        })
    }


}
export default Search;