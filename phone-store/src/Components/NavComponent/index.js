import React from 'react';
class Nav extends React.Component {
    render() {
        return (
            <div className="nava">
                <nav className="navbar navbar-expand-sm bg-warning justify-content-center fixed-top">            
                        <ul className="navbar-nav ">
                            <li className="nav-item a">
                                <a className="nav-link active" href="/">TRANG CHỦ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#">GIỚI THIỆU</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#">SẢN PHẨM</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#">TIN TỨC</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#">LIÊN HỆ</a>
                            </li>
                        </ul>
                </nav>
            </div>
        )
    }
}
export default Nav;
