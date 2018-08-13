import React from 'react';
import { Carousel, Grid } from 'antd-mobile';
import './Club.scss';
class Club extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const imgList = [
            "https://y.gtimg.cn/music/common/upload/t_focus_info_iphone/136996.jpg",
            "https://y.gtimg.cn/music/common/upload/t_focus_info_iphone/137001.jpg",
            "https://y.gtimg.cn/music/common/upload/t_focus_info_iphone/136837.jpg",
            "https://y.gtimg.cn/music/common/upload/t_focus_info_iphone/136785.jpg",
            "https://y.gtimg.cn/music/common/upload/t_focus_info_iphone/136105.jpg",
            "https://y.gtimg.cn/music/common/upload/t_focus_info_iphone/136190.jpg",
            "https://y.gtimg.cn/music/common/upload/t_focus_info_iphone/136903.jpg",
            "https://y.gtimg.cn/music/common/upload/t_focus_info_iphone/118122.jpg"
        ];
        const menuList = [
            {
                icon: require('../../assets/imgs/icon-grid-singer.png'),
                text: '1'
            },
            {
                icon: require('../../assets/imgs/icon-grid-rank.png'),
                text: '2'
            },
            {
                icon: require('../../assets/imgs/icon-grid-radio.png'),
                text: '3'
            },
            {
                icon: require('../../assets/imgs/icon-grid-categories.png'),
                text: '4'
            },
            {
                icon: require('../../assets/imgs/icon-grid-video.png'),
                text: '5'
            },
            {
                icon: require('../../assets/imgs/icon-grid-album.png'),
                text: '6'
            },
        ];
        return (
            <div className="g-club">
                <Carousel
                    className="slideshow-list"
                    infinite
                    autoplay={true}
                    autoplayInterval={2000}
                >
                    {imgList.map((item, index) => {
                        return (
                            <a key={index} className="slideshow-item-link" href="javascript:;">
                                <img className="slideshow-item-img" src={item} />
                            </a>
                        );
                    })
                    }
                </Carousel>
                <Grid
                    className="qqMusic-grid-list"
                    data={menuList}
                    columnNum={3}
                    hasLine={false}
                    renderItem={
                        dataItem => (
                            <div className="qqMusic-grid-item">
                                <img className="qqMusic-grid-item-icon" src={dataItem.icon} />
                                <span className="qqMusic-grid-item-text" >{dataItem.text}</span>
                            </div>
                        )
                    }
                />
            </div>
        )
    }
}
export default Club