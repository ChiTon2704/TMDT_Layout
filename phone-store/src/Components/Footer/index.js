import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-5 about ">
                            <h5>About</h5>
                            <p>To make an HTML element behave as a grid container, you have to set the display property to grid or inline-grid.</p>
                        </div>
                        <div className="col-4 about ">
                            <h5>Navigation</h5>
                            <a>
                                <li>adasd</li>
                                <li>asdasdasd</li>
                            </a>
                        </div>
                        <div className="col-3 about">
                            <h5>Resources</h5>
                            <a>
                                <li>adasd</li>
                                <li>asdasdasd</li>
                            </a>
                        </div>
                    </div>
                    <hr />
                    <div className="row follow">
                        <div className="col ">
                            <h5>Follow Us</h5>
                            <div>
                                <ul className="social-network social-circle">
                                    {/* <li><a href="#" className="icoRss" title="Rss"><i className="fa fa-rss"></i></a></li> */}
                                    <li><a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#" className="icoTwitter" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                                    {/* <li><a href="#" className="icoGoogle" title="Google +"><i className="fa fa-google-plus"></i></a></li> */}
                                    <li><a href="#" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col text-center" >
                            <h6>Công ty HNTT HN_CT</h6>
                            <a className="">
                                <img className="img " src="LOGOG.png" />
                            </a>
                        </div>
                        <div className="col text-center">
                            <h5>Subcribe</h5>
                        </div>

                    </div>

                </div>
                <div className="copyright">
                    <a>© 2019. Công ty cổ phần HN_CT. GPDKKD: 0303217354 do sở KH & ĐT TP.HCM cấp ngày 02/01/2007. Địa chỉ: 128 Trần Quang Khải, P. Tân Định, Q.1, TP.Hồ Chí Minh. Điện thoại: 18001060</a>
                </div>
            </div>
        )
    }
}
export default Footer;