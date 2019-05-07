import React, { Component } from "React"
//css
import css from "./ComBanner.css"
class Banner extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]],//内容
            contentIndex: 0, //当前组  第几个内容
            index: 0,// 第几组
            settime: null //定时器
        }
    }
    tab_index(index) {
        this.setState({
            index
        })
    }
    //自动轮播
    timeNum(on_off) {
        let timeNum = this.state.index;
        clearInterval(this.state.settime)
        if (on_off !== "on") {
            this.setState({
                settime: setInterval(() => {
                    if (timeNum >= this.state.content[this.state.contentIndex].length - 1) {
                        timeNum = 0
                        this.setState({ contentIndex: this.state.contentIndex === this.state.content.length - 1 ? 0 : 1 + this.state.contentIndex })
                    } else timeNum++
                    this.setState({ index: timeNum })
                }, 1000)
            })
        }
    }
    render() {
        let { index, content, contentIndex } = this.state;
        return (
            <div style={{ overflow: "hidden" }} onMouseEnter={() => { this.timeNum('on') }} onMouseLeave={this.timeNum.bind(this)}  >

                {/* 内容 */}
                < ul className={css.contentUl} >
                    {content[contentIndex].map((item, indexs) => {
                        return <li key={indexs} style={index === indexs ? { left: "0" } : {}} className={css.contentLi}>{item}</li>
                    })}
                </ul >

                {/* 选项 */}
                < ul className={css.btnUl} >
                    {content[contentIndex].map((item, indexs) => {
                        return <li style={index === indexs ? { background: 'red' } : {}} key={indexs} className={css.btnLi} onClick={() => { this.setState({ index: indexs }) }} >{item}</li>
                    })}
                </ul >

                {/* 切换 */}
                <ul>
                    <li onClick={() => { this.setState({ contentIndex: contentIndex > 0 ? --contentIndex : content.length-1, index: 0 }) }}>上一组</li>
                    <li onClick={() => { this.setState({ contentIndex: contentIndex < content.length - 1 ? ++contentIndex : 0, index: 0 }) }}>下一组</li>
                </ul>

            </div >)
    }
    componentDidMount() {
        //初始自动轮播
        this.timeNum()
    }
}
export default Banner;