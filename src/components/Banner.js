import React from 'react'
import { Carousel } from 'antd-mobile';

class Banner extends React.Component {
    state = {
        imgHeight: 200,
    };
    render() {
        let {banner} = this.props;
        return (
                <Carousel
                    autoplay={true}
                    infinite
                    style={this.props.location.pathname === '/home' ? {marginTop:45} : {marginTop: 0 }}
                >
                    { banner && banner.map(item => (
                        <a
                            key={item.id}
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                src= {item.banner}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' ,touchAction:'none',height:200}}
                                onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                            }}
                            />
                        </a>
                    ))}
                </Carousel>
        );
    }
}

export default Banner;