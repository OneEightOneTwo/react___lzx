import React from 'react'
// import { NavBar, Icon } from 'antd-mobile';
// import axios from 'axios'
import styles from './Content.css'
import $ from 'jquery'
class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: {},
            res: { data: [] }
        };
        // this.get = this.get.bind(this);
    }

    get() {
        let _this = this;
        $.ajax({
            type: 'get',
            url: 'https://cnodejs.org/api/v1/topics',
            success: function (res) {
                _this.setState({
                    res: res
                })
            }
        })
    }
    componentDidMount() {
        this.get();
    }
    render() {
        console.log(this.state.res.data)

        return (
            <li className={styles['item']} >
                {this.state.res.data.map((item, index) => {
                    return (

                        <div key={index} className={styles['item-inner'] + " " + styles['y-box']}>
                            <div className={styles['normal'] + " " + styles['rbox']}>
                                <div className={styles['rbox-inner']}>
                                    <div className={styles['title-box']}>
                                        <a className={styles['title']} target="_blank" href="/group/6685285883916059144/">{item.title}</a>
                                    </div>
                                    <div className={styles['footer']}>
                                        <div className={styles['y-left']}>
                                            <div className={styles['y-left']}>
                                                <a className={styles['lbtn'] + " " + styles['media-avatar']} target="_blank" href="/c/user/4337783701/">
                                                    {/* <img alt="" src="">  </img> */}
                                                </a>
                                                <a className={styles['lbtn'] + " " + styles['source']} target="_blank" href="/c/user/4337783701/">&nbsp;{item.author.loginname}&nbsp;
                 </a>
                                                <a className={styles['lbtn'] + " " + styles['comment']} target="_blank" href="/group/6685285883916059144//#comment_area">&nbsp;评论&nbsp;
                  </a>
                                            </div>
                                            <span className={styles['lbtn']}>&nbsp;4分钟前</span>
                                        </div>
                                        <div className={styles['y-right']}>
                                            <span className={styles['dislike']} data-groupid="6685285883916059144" ga_event="article_dislike_click"> 不感兴趣
                    <i className="y-icon icon-dislikenewfeed"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles['lbox']} >
                                <a className={styles['img-wrap']} target="_blank" href="/group/6685285883916059144/">
                                    <img alt="" src={item.author.avatar_url} />
                                </a>
                            </div>
                        </div>
                    )
                })}
            </li>


        )
    }
}

export default Content