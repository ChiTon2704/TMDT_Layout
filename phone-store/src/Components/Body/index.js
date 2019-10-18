import React from 'react';
import DanhMuc from './DanhMuc';
import Carousel from './Carousel';
import category from './category.json';
class Body extends React.Component {
    render() {
        // const elements =category.map((item)=>{
        //     return(
        //         <DanhMuc
        //             key={item.id}
        //             name_Category={item.name_category}
        //         />
        //     )
        // })
        return (
            <div className="grid-container ">
                <div className="danhmuc vertical-menu">
                    {/* <DanhMuc /> */}
                    <a className="active">Danh Mục</a>
                    {/* {elements} */}
                    <a href="iphone">IPhone</a>
                    <a href="samsung">SamSung</a>
                    <a href="oppo">Oppo</a>
                    <a href="xiaomi">Xiaomi</a>
                    <a href="hauwei">Hauwei</a>
                    <a href="nokia">Nokia</a>
                </div>
                <div >
                    <Carousel />
                </div>
            </div>
        )
    }
}
export default Body;