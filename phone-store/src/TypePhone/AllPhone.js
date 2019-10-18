import React from 'react';
import numeral from 'numeral';
import phone from '../Components/Body2/phone.json';
import DienThoaiNB from '../Components/Body2/DienThoaiNB';

class AllPhone extends React.Component {
    render() {
        const elementsallPhone = phone.map((product) => {

            return (
                <div className="gallery">
                    <a target="_blank" href="#" >
                        <img src={product.img} alt="Cinque Terre" />
                    </a>
                    <div className="desc">
                        <div className="p">
                            <a>{this.name_phone}</a>
                        </div>
                        <p className="h6">- {numeral(product.discount).format('0,0')} VNĐ </p>
                        <p className="h6">{numeral(product.price).format('0,0')} VNĐ </p>
                        
                    </div>
                    <div className="muangay text-center">
                        <a href="#" className="a" onClick={() => this.onAddToCart('Đã thêm vào giỏ hàng')}>MUA NGAY</a>
                    </div>
                </div>
            )

        });
        const elementsNB = phone.map((product) => {
            if (product.NB === true) {
                return (
                    <DienThoaiNB
                        key={product.id}
                        name_phone={product.name_phone}
                        category={product.name_category}
                        price={product.price}
                        img={product.img}
                        description={product.description}
                    />
                )
            }
        });
        return (
            <div>
                <div className="body">
                    {/* <ul className="nav justify-content-center">
                        <li className="nav-item ">
                            <a className="nav-link " href="#"><img src="https://cdn.tgdd.vn/Brand/1/iPhone-(Apple)42-b_16.jpg"/></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><img src="https://cdn.tgdd.vn/Brand/1/Samsung42-b_25.jpg"/></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#"><img src="https://cdn.tgdd.vn/Brand/1/OPPO42-b_57.jpg"/></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><img src="https://cdn.tgdd.vn/Brand/1/Xiaomi42-b_31.png"/></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><img src="https://cdn.tgdd.vn/Brand/1/Huawei42-b_30.jpg"/></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#"><img src="https://cdn.tgdd.vn/Brand/1/Nokia42-b_21.jpg"/></a>
                        </li>
                    </ul> */}
                    <div className="allphone-img text-center">
                        <a href="/allphone"><img className="a" src="https://cdn.tgdd.vn/Brand/1/iPhone-(Apple)42-b_16.jpg" /></a>
                        <a><img className="a" src="https://cdn.tgdd.vn/Brand/1/Samsung42-b_25.jpg" /></a>
                        <a><img className="a" src="https://cdn.tgdd.vn/Brand/1/OPPO42-b_57.jpg" /></a>
                        <a><img className="a" src="https://cdn.tgdd.vn/Brand/1/Xiaomi42-b_31.png" /></a>
                        <a><img className="a" src="https://cdn.tgdd.vn/Brand/1/Huawei42-b_30.jpg" /></a>
                        <a><img className="a" src="https://cdn.tgdd.vn/Brand/1/Nokia42-b_21.jpg" /></a>
                    </div>
                </div>
                <div className="body">
                    <div className="row">
                        <div className="dienthoainoibat body2 ">
                            <div className="h3">
                                <h5 className="NB">ĐIỆN THOẠI NỔI BẬT</h5>
                            </div>
                            <div >
                                {elementsNB}
                            </div>
                        </div>
                        <div className="dienthoainoibat body2 ">
                            {/* <div className="h3">
                                <h5 className="NB">ĐIỆN THOẠI IPHONE</h5>
                                <a className="NB NBPhone">Xem tất cả điện thoại iPhone >></a>
                            </div> */}
                            <div >
                                {elementsallPhone}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default AllPhone;
