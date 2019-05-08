import react from "react";
import { hashHistory } from 'dva/router';
//搜索组件(search)
import Search from "../../components/search/ComSearch";
//轮播图组件
import Banner from "../../components/banner/ComBanner";
//侧栏背景组件
import LinksBg from "../../components/LinksBg/ComLinksBg";
//侧栏内容组件
import MoreNav from "../../components/moreNav/ComMoreNav";
//侧栏图文组件
import ImgText from "../../components/ImgText/ComImgText";
//css
import css from './home.css'
import Top from '../../components/gaoli-gotop/gotop'
import Header from '../../components/gaoli-header/header'


import Recommend from '../../components/Recommend/Recommend'
import Subchannel from '../../components/Subchannel/Subchannel'
import Content from '../../components/Content/Content'


function Home() {
    //侧栏内容(更多)
    let GdList = ['关于头条', '加入头条', '媒体报道', '媒体合作', '产品合作', '合作说明', '广告投放', ' 联系我们', '用户协议', '隐私政策', '侵权投诉', '廉洁举报', '企业认证']
    //侧栏内容(友情链接)
    let YqljList = ['光明网', '央广网', '国际在线', '中国西藏网', '参考消息', '环球网', '中青在线', ' 中青网', '海外网', '中国网', '千龙网', '新京报', '北青网', '奥一网', '金羊网', '华商网', '新民网', '红网', '中国江苏网', '中国江西网', '齐鲁网', '南海网', '安徽网', '河北新闻网', '闽南网', '海峡网', '华声在线', '中国蓝TV', '北国网', '龙虎网', '东莞时间网', '汽车之家', 'Onlylady女人志', '中国搜索', '每日经济新闻', '网上车市', '网通社汽车', '北方网', '湖南省旅发委官网', '乐居网']
    //侧栏内容(........)
    let NrList = [
        '© 2019 今日头条',
        '中国互联网举报中心 京ICP证140141号',
        '京ICP备12025439号-3 网络文化经营许可证',
        '营业执照',
        '京-非经营性-2016-0081',
        '互联网药品信息服务资格证书',
        '跟帖评论自律管理承诺书',
        '违法和不良信息举报：010-58341833',
        '举报邮箱：jubao@toutiao.com',
        '公司名称：北京字节跳动科技有限公司',
        <span>
            <img alt="" src="//s3.pstatp.com/toutiao/static/img/gongan.d0289dc.png" style={{ marginBottom: "-5px" }} />
            京公网安备 11000002002023号
        </span>
    ];
    //侧栏图文内容
    let imgtext = [
        {
            img: "//p9.pstatp.com/list/240x240/1e0790002f9685d2372ed",
            text: '【朴有天认罪原因曝光】近日，韩星朴有天已承认大部分吸毒事实，并被警方逮捕。有韩国媒体曝光了他的认罪原因，朴有天之所以态度软化全因家人每日探视，他还曾求救律师：“以被关起来的状态与家人见面太痛苦了，想要被释放该怎么做？”'
        }, {
            img: "//p3.pstatp.com/list/240x240/pgc-image/RPBxa226WTep3j",
            text: '漳州角美母子三人失联：一男童被发现已无生命体征'
        }, {
            img: "//p9.pstatp.com/list/240x240/pgc-image/e4243170f0084577b2f32864390f5d64",
            text: '中国海上民兵=中国海军？美国为南海军事冲突埋下伏笔！中国做好打的准备了吗？'
        }, {
            img: "//p1.pstatp.com/list/240x240/pgc-image/78a128742df144a09a51daf26563835e",
            text: '巴黎圣母院被各城市撤回捐款，特朗普慷慨引美国民众愤怒'
        }
    ];
    //路由跳转
    return (
        <div>
            <div className={css.H_header}>
                <Header />
            </div>
            <div className={css.H_cantainer}>
                <div className={css.H_left}>
                    <Recommend />
                </div>
                <div className={css.H_center}>
                    <Subchannel />
                    <Content />
                </div>
                <div className={css.H_right}>
                    <Search /><br />
                    <Banner />
                    <LinksBg con={{ com: ImgText, data: imgtext, title: '24小时热闻' }} />
                    <LinksBg con={{ com: MoreNav, data: GdList, title: '更多' }} />
                    <LinksBg con={{ com: MoreNav, data: YqljList, title: '友情链接' }} />
                    <LinksBg con={{ com: MoreNav, data: NrList }} />
                </div>
            </div>
            <Top />
        </div>
    )
}

export default Home;