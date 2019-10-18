import React from 'react';
import numeral from 'numeral';

class DienThoaiISamsung extends React.Component {
    onAddToCart(text){
        alert(text);
   }
    render() {
        return (
            <div className="gallery">
                <a target="_blank" href="#">
                    <img src={this.props.img} alt="Cinque Terre" />
                </a>
                <div className="desc">
                    <div className="p">
                        <a>{this.props.name_phone}</a>
                    </div>
                    <p className="h6">{numeral(this.props.price).format('0,0')} VNĐ </p>
                </div>
                <div className="muangay text-center">
                    <a href="#" className="a"  onClick={  () => this.onAddToCart('Đã thêm vào giỏ hàng')}>MUA NGAY</a>
                </div>
            </div>
        )
    }
}
export default DienThoaiISamsung;