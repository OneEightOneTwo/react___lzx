import react from 'react'
// import { NavBar, Icon } from 'antd-mobile';
import styles from './Subchannel.css'
class Subchannel extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            // title: "头部"
            title: ["全部", "NBA", "CBA", "中超", "意甲"]
        }
    }
    test(index) {
        this.setState({                   //setState 是一个方法，把里面的东西都存到 this.state 里面
            colorRed: {
                color: "red"
            },
            borderRed: {
                'border-bottom': 'red solid 2px'
            },
            idx: index
        })

    }
    // 写入函数
    li() {
        return this.state.title.map((item, index) => {    //获取数组的内容，做成循环
            return (
                <li onClick={(e) => { this.test(index) }} style={this.state.idx === index ? this.state.borderRed : {}} className={styles['sub-item']}>
                    <a style={this.state.idx === index ? this.state.colorRed : {}} href="javaScript:;">{item}</a>
                </li>
            )
        })
    }
    render() {
        return (
            <div id="subchannel" className={styles['subchannel']}>
                <ul name="subchannel" style={{ 'width': "660px" }} className={styles['sub-list']}>
                {this.li()} {/*      调用函数 ，把li结构挂载到 ul下面 */}


                    {/* 
                    <li onClick={(e) => { this.test() }} style={this.state.borderRed} className={styles['sub-item']}>
                        <a style={this.state.colorRed} href="javaScript:;">全部</a>
                    </li>
                    <li className={styles['sub-item']}>
                        <a href="javaScript:;">NBA</a>
                    </li>
                    <li className={styles['sub-item']}>
                        <a href="javaScript:;">CBA</a>
                    </li>
                    <li className={styles['sub-item']}>
                        <a href="javaScript:;">中超</a>
                    </li>
                    <li className={styles['sub-item']}>
                        <a href="javaScript:;">意甲</a>
                    </li> */}
                </ul>
            </div>
        )
    }
}

export default Subchannel