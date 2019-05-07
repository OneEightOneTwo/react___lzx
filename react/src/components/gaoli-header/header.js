import react from 'react';
import css from './header.css';
class header extends react.Component {
  constructor(props) {
    super(props)
    this.state = {
      isToggleOn: true,
      hover_display: 'none'
    }
   // 这个绑定是必要的，使`this`在回调中起作用
   this.hover = this.hover.bind(this);
  
  }
 //鼠标经过
  hover() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
      hover_display: prevState.isToggleOn ? 'none': 'block'
    }));

      }
  render() {
    return (
      <div>
        <header >
          <div className={css.app}>下载APP</div>
          <div className={css.weather} onMouseOver={this.hover} >
            <iframe title="navigation" width="200" scrolling="no" height="18" frameBorder="0" allowtransparency="true" src="//i.tianqi.com/index.php?c=code&id=1&color=%23FFFFFF&bgc=%23000000&bdc=%23000000&icon=1&wind=0&num=1&site=12"></iframe>
            <div className={css.mtest}    style={{display:this.state.hover_display}}><iframe title="navigation" width="700" scrolling="no" height="70" frameBorder="0" allowtransparency="true" src="//i.tianqi.com/index.php?c=code&id=2&color=%23&bgc=%23FFFFFF&bdc=%23&icon=1&num=2&site=12"></iframe></div>
          </div>

          <div className={css.right}>
            <ul>
              <li className={`${css.right.li} ${css.li1}`}><a >登录</a>

            </li><li>反馈</li><li>控诉侵权</li><li>头条产品</li></ul></div>
        </header>
      </div>
    )

  }
}
export default header