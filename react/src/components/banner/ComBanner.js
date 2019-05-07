import react, { Component } from "react"
//css
import css from "./ComBanner.css"
class Banner extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: [
            [require('../../assets/banner/2544f48e-a7e3-4467-afc6-c9fdd2198367.jpg'), require('../../assets/banner/265504dc-8d26-449a-bbd9-6a570140ef9e.jpg'), require('../../assets/banner/380b6f99-6cb5-4528-94fd-9eaa3f9f5e2c.jpg'),require('../../assets/banner/7310a75135ee4e01b0e3f6d054357462.jpg')],
            [require('../../assets/banner/575f6f37-4b15-4037-aaf9-85b7eed5f673.jpg'), require('../../assets/banner/7310a75135ee4e01b0e3f6d054357462.jpg'), require('../../assets/banner/809c247a-8327-440d-aff7-97e0f3fd221e.jpg'),require('../../assets/banner/8653a70a9a8347bebe712b2725e7ad70.jpg')],
            [require('../../assets/banner/8dc6e66f-92d7-41e2-ad41-ffdb4af79560.jpg'), require('../../assets/banner/a85e7084-65df-4dbc-a0dc-2164abc72888.jpg'),require('../../assets/banner/b208bbb1d436410e9748f276e5185689.jpg'), require('../../assets/banner/dbfac095-1817-4cbf-9c5e-ad12b546e327.jpg')]],//内容
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
            <div className={css.Combanner} style={{ overflow: "hidden" }} onMouseEnter={() => { this.timeNum('on') }} onMouseLeave={this.timeNum.bind(this)}  >

                {/* 内容 */}
                < ul className={css.contentUl} >
                    {content[contentIndex].map((item, indexs) => {
                        return <li key={indexs} style={index === indexs ? { left: "0" } : {}} className={css.contentLi}>
                        <img className={css.contentmain} src={item}/></li>
                    })}
                </ul >

                {/* 选项 */}
                < ul className={css.btnUl} >
                    {content[contentIndex].map((item, indexs) => {
                        return <li className={index === indexs ?  `${css.btnLi}` : `${css.btnLi}  ${css.bianhua} `} 
                        key={indexs} 
                        onMouseEnter={() => { this.setState({ index: indexs }) }} >
                        <img className={css.contentmain} src={item}/>
                        </li>
                    })}
                </ul >

                {/* 切换 */}
                <ul>
                    <li className={css.pre} style={{listStyle:'none'}}
                    onClick={() => { this.setState({ contentIndex: contentIndex > 0 ? --contentIndex : content.length-1, index: 0 }) }}>
                    <img className={css.preimg} src={require('../../assets/banner/xiangshang.png')}/>
                    </li>
                    <li className={css.next} style={{listStyle:'none'}} 
                    onClick={() => { this.setState({ contentIndex: contentIndex < content.length - 1 ? ++contentIndex : 0, index: 0 }) }}>
                    <img className={css.preimg} src={require('../../assets/banner/xiangxia.png')}/>
                    </li>
                </ul>

            </div >)
    }
    componentDidMount() {
        //初始自动轮播
        this.timeNum()
    }
}
export default Banner;