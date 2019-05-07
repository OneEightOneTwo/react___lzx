import react from 'react'
// import { NavBar, Icon } from 'antd-mobile';
import styles from './Recommend.css'
class Recommend extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            // title: "头部"
        }
    }
    render() {
        return (
            <div className={styles['y-left'] + " " + styles['index-channel']}>
                <div riot-tag={styles['wchannel']}>
                    <div ga_event="left-channel-click" className={styles.wchannel} >
                        <a className={`${styles.logo} ${styles.aa}`} href="/#/">
                            <img src="//s3.pstatp.com/toutiao/resource/ntoutiao_web/static/image/logo_271e845.png" alt="" />
                        </a>
                        <ul>
                            <li className={styles.li} >
                                <a className={`${styles['wchannel-item']} `} href="/#/" target="" ga_event="channel_recommand_click">
                                    <span>推荐</span>
                                </a>
                            </li>
                            <li className={styles.li} >
                                <a className={`${styles['wchannel-item']}  `} href="/#/" target="_blank" ga_event="channel_video_click">
                                    <span>阳光宽频</span>
                                </a>
                            </li>
                            <li className={styles.li} > <a className={`${styles['wchannel-item']} `} href="/#/" target="" ga_event="channel_hot_click"> <span>热点</span> </a> </li>
                            <li > <a className={styles['wchannel-item']} href="/#/" target="_blank" ga_event="channel__click"> <span>直播</span> </a> </li>
                            <li > <a className={styles['wchannel-item']} href="/#/" target="_blank" ga_event="channel_image_click"> <span>图片</span> </a> </li>
                            <li  > <a className={styles['wchannel-item']} href="/#/" target="" ga_event="channel_technology_click"> <span>科技</span> </a> </li>
                            <li  > <a className={styles['wchannel-item']} href="/#/" target="" ga_event="channel_entertainment_click"> <span>娱乐</span> </a> </li>
                            <li  > <a className={styles['wchannel-item']} href="/#/" target="" ga_event="channel_game_click"> <span>游戏</span> </a> </li>
                            <li  > <a className={styles['wchannel-item']} href="/#/" target="" ga_event="channel_sports_click"> <span>体育</span> </a> </li>
                            <li  > <a className={styles['wchannel-item']} href="/#/" target="" ga_event="channel_car_click"> <span>汽车</span> </a> </li>
                            <li  > <a className={styles['wchannel-item']} href="/#/" target="" ga_event="channel_finance_click"> <span>财经</span> </a> </li>
                            <li  > <a className={styles['wchannel-item']} href="/#/" target="" ga_event="channel_funny_click"> <span>搞笑</span> </a> </li>
                            <li className={styles['wchannel-more']}> <a href="javascript:;" className={styles['wchannel-item']}> <span>更多</span> </a> 
                            <div className={styles['wchannel-more-layer']}> <ul> 
                                <li> <a className={styles['y-left'] + " " + styles['wchannel-item']} ref="/#/"  target="" ga_event="channel_military_click"> <span>军事</span> </a> </li><li> <a className={styles['y-left'] + " " + styles['wchannel-item']} href="/ch/news_world/" target="" ga_event="channel_international_click"> <span>国际</span> </a> </li><li> <a className={styles['y-left'] + " " + styles['wchannel-item']} href="/ch/news_fashion/" target="" ga_event="channel_fashion_click"> <span>时尚</span> </a> </li><li> <a className={styles['y-left'] + " " + styles['wchannel-item']} href="/ch/news_travel/" target="" ga_event="channel_travel_click"> <span>旅游</span> </a> </li><li> <a className={styles['y-left'] + " " + styles['wchannel-item']} href="/ch/news_discovery/" target="" ga_event="channel_explore_click"> <span>探索</span> </a> </li><li> <a className={styles['y-left'] + " " + styles['wchannel-item']} href="/ch/news_baby/" target="" ga_event="channel_childcare_click"> <span>育儿</span> </a> </li><li> <a className={styles['y-left'] + " " + styles['wchannel-item']} href="/ch/news_regimen/" target="" ga_event="channel_health_click"> <span>养生</span> </a> </li><li> <a className={styles['y-left'] + " " + styles['wchannel-item']} href="/ch/news_essay/" target="" ga_event="channel_article_click"> <span>美文</span> </a> </li><li> <a className={styles['y-left'] + " " + styles['wchannel-item']} href="/ch/news_history/" target="" ga_event="channel_history_click"> <span>历史</span> </a> </li><li> <a className={styles['y-left'] + " " + styles['wchannel-item']} href="/ch/news_food/" target="" ga_event="channel_food_click">
                                <span>美食</span>
                            </a>
                            </li>
                            </ul>
                            </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Recommend