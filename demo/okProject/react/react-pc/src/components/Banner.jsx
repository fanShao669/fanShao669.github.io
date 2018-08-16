/**
 * Created by yanji on 2018/8/16.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import BannerAnim, { Element, Arrow,Thumb} from 'rc-banner-anim';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
import '../style/banner.less'

const BgElement = Element.BgElement;
class Banner extends React.Component {
    constructor(props) {
        super(props);
        this.imgArray = [Bg1,Bg2];
        this.BannerArray = ['q1111111','22222']
        this.state = {
          intShow: 0,
          limitWidth:'560',
          scale:1,
          prevEnter: false,
          nextEnter: false,
        };
      }
      componentWillMount(){
        const clientWidth = document.body.clientWidth;
        this.setState({
            scale:clientWidth/1920
        })
      }
      onChange = (type, int) => {
        if (type === 'before') {
          this.setState({
            intShow: int,
          });
        }
      }
    
      getNextPrevNumber = () => {
        let nextInt = this.state.intShow + 1;
        let prevInt = this.state.intShow - 1;
        if (nextInt >= this.imgArray.length) {
          nextInt = 0;
        }
        if (prevInt < 0) {
          prevInt = this.imgArray.length - 1;
        }
    
        return [prevInt, nextInt];
      }
    
      prevEnter = () => {
        this.setState({
          prevEnter: true,
        });
      }
    
      prevLeave = () => {
        this.setState({
          prevEnter: false,
        });
      }
    
      nextEnter = () => {
        this.setState({
          nextEnter: true,
        });
      }
    
      nextLeave = () => {
        this.setState({
          nextEnter: false,
        });
      }
    render(){
        const intArray = this.getNextPrevNumber();
        // const thumbChildren = this.imgArray.map((img, i) =>
        //   <span key={i}><i style={{ backgroundImage: `url(${img})` }} /></span>
        // );
        const thumbChildren = this.BannerArray.map((item, i) =>
          <span key={i}>{item}</span>
        );
        return (
            <BannerAnim onChange={this.onChange} autoPlay >
                <Element key={`${"a"+Math.random()}`}
                    prefixCls="banner-user-elem"
                    >
                <BgElement
                    key="bg"
                    className="bg"
                    style={{
                    backgroundImage: `url(${this.imgArray[0]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    }}
                />
                <TweenOne
                    //animation={{ y: 50, opacity: 0, type: 'from', delay: 0 }}
                    key="2"
                    name="TweenOne"
                >
                    <div className="u-banner-content">
                        <Link to='/app/campus/recruitment4campus'>
                            <img src={titlePic} width={this.state.limitWidth*this.state.scale} />
                        </Link>
                    </div>
                </TweenOne>
                </Element>
                <Element key={`${"b"+Math.random()}`}
                prefixCls="banner-user-elem"
                >
                <BgElement
                    key="bg"
                    className="bg"
                    style={{
                    backgroundImage: `url(${this.imgArray[1]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    }}
                />
                <TweenOne
                    key="2"
                    name="TweenOne"
                >
                    <Link to='/app/hy/lh' className="lh-banner-link f-cp"></Link>
                </TweenOne>
                </Element>
                <Arrow arrowType="prev" key="prev" prefixCls="user-arrow" component={TweenOne}
                onMouseEnter={this.prevEnter}
                onMouseLeave={this.prevLeave}
                animation={{ left: this.state.prevEnter ? 0 : -120 }}
                >
                <div className="arrow arrow-left" />
                <TweenOneGroup enter={{ opacity: 0, type: 'from' }} leave={{ opacity: 0 }}
                    appear={false} className="img-wrapper" component="ul"
                >
                    <li
                    style={{ backgroundImage: `url(${this.imgArray[intArray[0]]})` }}
                    key={intArray[0]}
                    />
                </TweenOneGroup>
                </Arrow>
                <Arrow arrowType="next" key="next" prefixCls="user-arrow" component={TweenOne}
                onMouseEnter={this.nextEnter}
                onMouseLeave={this.nextLeave}
                animation={{ right: this.state.nextEnter ? 0 : -120 }}
                >
                <div className="arrow arrow-right" />
                <TweenOneGroup enter={{ opacity: 0, type: 'from', delay: 200 }} leave={{ opacity: 0 }}
                    className="img-wrapper" component="ul"
                >
                    <li
                    style={{ backgroundImage: `url(${this.imgArray[intArray[1]]})` }}
                    key={intArray[1]}
                    />
                </TweenOneGroup>
                </Arrow>
                <Thumb prefixCls="user-thumb" key="thumb" component={TweenOne}
                    animation={{ bottom: 80 }}>
                    {thumbChildren}
                    </Thumb>
            </BannerAnim>
        );
    }
}

export default Banner;