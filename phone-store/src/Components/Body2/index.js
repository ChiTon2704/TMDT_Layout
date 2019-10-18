import React from 'react';
import DienThoaiNB from './DienThoaiNB';
import DienThoaiIPhone from './DienThoaiIPhone';
import DienThoaiSamsung from './DienThoaiSamsung';
// npm i axios
import axios from 'axios';

//khởi tạo state phone là một mãng trống
class Body2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phones: []
        }
    }
// đỗ dử liệu lấy từ API vào biến đã khởi tạo
    componentDidMount() {
        axios.get('https://flat-selenium.glitch.me/api/getphones')// địa chỉ AIP
            .then((result) => {
                console.log(result.data)

                this.setState(() => ({
                    phones: result.data
                }))
            })
    }
// render dữ liệu đã lấy ra giao diện
    render() {

        const elementsNB = this.state.phones.map((product) => {
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
        const elementIphone = this.state.phones.map((product) => {
            if (product.category === "Iphone") {
                return (
                    <DienThoaiIPhone
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
        const elementSamsung = this.state.phones.map((product) => {
            if (product.category === "Samsung") {
                return (
                    <DienThoaiSamsung
                        key={product.id}
                        name_phone={product.name_phone}
                        category={product.name_category}
                        price={product.price}
                        img={product.img}
                        description={product.description}
                    />
                )
            }
        })
        return (
            <div className="row">
                <div className="dienthoainoibat body2 ">
                    <div className="h3">
                        <h5 className="NB">ĐIỆN THOẠI NỔI BẬT</h5>
                        <a className="NB NBPhone" href='/allphone'>Xem tất cả >></a>
                        <a className="NB NBPhone">iPhone</a>
                        <a className="NB NBPhone">Oppo</a>
                        <a className="NB NBPhone">Xiaomi</a>
                        <a className="NB NBPhone">SamSung</a>
                    </div>
                    <div >
                        {elementsNB}
                    </div>
                </div>
                <div className="dienthoainoibat body2 ">
                    <div className="h3">
                        <h5 className="NB">ĐIỆN THOẠI IPHONE</h5>
                        <a className="NB NBPhone">Xem tất cả điện thoại iPhone >></a>
                    </div>
                    <div >
                        {elementIphone}
                    </div>
                </div>
                <div className="dienthoainoibat body2 ">
                    <div className="h3">
                        <h5 className="NB">ĐIỆN THOẠI SAMSUNG</h5>
                        <h6 className="NB NBPhone">Xem tất cả điện thoại Samsung >></h6>
                    </div>
                    <div >
                        {elementSamsung}
                    </div>
                </div>
            </div>
        )
    }
}
export default Body2;