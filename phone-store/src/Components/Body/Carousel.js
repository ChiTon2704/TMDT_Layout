import React from 'react';

class Carousel extends React.Component {
    render() {
        return (
            <div id="demo" className="carousel slide" data-ride="carousel">
                <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" className="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    <li data-target="#demo" data-slide-to="2"></li>
                </ul>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://cdn.tgdd.vn/2019/10/banner/800-300-800x300-(2).png" alt="Los Angeles" width="100%" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://cdn.tgdd.vn/2019/09/banner/thu-cu-note10-800-300-800x300-(2).png" alt="Chicago" width="100%" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://cdn.tgdd.vn/2019/09/banner/oppo-A9-800-300-800x300-(3).png" alt="New York" width="100%" />
                    </div>
                </div>
                <p className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </p>
                <p className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </p>
            </div>
        )
    }
}
export default Carousel;