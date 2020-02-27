import React, { Component } from 'react'
import './Footer.css';
import './Footer.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    let isHome = window.location.pathname === "/" ? true : false;
    let isShoppingCart = window.location.pathname === "/shopping-cart" ? true : false;
    let isAdmin = window.location.pathname.includes("/admin") ? true : false;
    this.state = {
      isHome,
      isShoppingCart,
      isAdmin
    }
  }

  componentDidMount() {
    const { history } = this.props;
    this.unlisten = history.listen(() => {
      let isHome = window.location.pathname === "/" ? true : false;
      let isShoppingCart = window.location.pathname === "/shopping-cart" ? true : false;
      let isAdmin = window.location.pathname.includes("/admin") ? true : false;
      this.setState({
        isHome,
        isShoppingCart,
        isAdmin
      })
    })
  }

  componentWillUnmount() {
    this.unlisten();
  }

  render() {
    const { isHome, isShoppingCart, isAdmin } = this.state;
    return (
      <footer
        // style={{ display: "none" }}
        className={classNames({ footer: !isShoppingCart, footerHide: isShoppingCart || isAdmin })}
        id="contact"
      >
        <div className="container">
          <div className={classNames("row", { deactiveMinimize: !isHome })}>
            {/* Lien he */}
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 pd5">
              <a href="#" data-toggle="collapse" data-target="#lienhe" style={{ textDecoration: "none" }}>
                <h3 className="link-title text-uppercase">Liên Hệ</h3>
              </a>
              <h3 className="text-title text-uppercase">Liên Hệ</h3>
              <div className="collapse" id="lienhe">
                <ul className="list-inline quicklinks">
                  <li className="list-inline-item">
                    <p className="text-muted">63, Võ Thị Sáu, Phường 6, Quận 3</p>
                    <p className="text-muted">09XX XXX XXX</p>
                    <p className="text-muted">Email: xxxxxx.com</p>
                  </li>
                </ul>
              </div>
            </div>
            {/* Chinh sach ho tro */}
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 pd5">
              <a href="#" data-toggle="collapse" data-target="#hotro" style={{ textDecoration: "none" }}>
                <h3 className="link-title text-uppercase">Chính sách hỗ trợ</h3>
              </a>
              <h3 className="text-title text-uppercase">Chính sách hỗ trợ</h3>
              <div className="collapse" id="hotro">
                <ul className="list-inline quicklinks">
                  <li className="list-inline-item">
                    <p className="text-muted">Hướng dẫn chọn size</p>
                    <p className="text-muted">Cam kết bảo hành</p>
                    <p className="text-muted">Giao hàng và Đổi trả</p>
                  </li>
                </ul>
              </div>
            </div>
            {/* Lien ket */}
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 pd5">
              <a href="#" data-toggle="collapse" data-target="#lienket" style={{ textDecoration: "none" }}>
                <h3 className="link-title text-uppercase">Liên kết</h3>
              </a>
              <h3 className="text-title text-uppercase">Liên kết</h3>
              <div className="collapse" id="lienket">
                <ul className="list-inline quicklinks">
                  <li className="list-inline-item">
                    <p className="text-muted">Hãy kết nối với chúng tôi</p>
                  </li>
                  <ul className="list-inline social-buttons">
                    <li className="list-inline-item">
                      <a className="google">
                        <i className="fab fa-google " style={{ padding: "1.5px" }}></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="facebook">
                        <i className="fab fa-facebook-f " style={{ transform: "translateX(16px)" }}></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="instagram">
                        <i className="fab fa-instagram fa-lg " style={{ transform: "translateX(11px)" }}></i>
                      </a>
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
            {/* Fanpage */}
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 pd5">
              <h3 className="text-uppercase">Fanpage</h3>
              <div style={{ maxWidth: "100%" }}>
                <div className="fb-page" data-href="https://www.facebook.com/TailorWings/" data-tabs="timeline" data-height="70" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/TailorWings/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/TailorWings/">Tailor Wings</a></blockquote></div>
              </div>
            </div>
            {/* <div className="d-flex justify-content-between" style={{ color: "white" }}>
              <a href="#" className="bottomFooter"><p className="text-muted ">@TailorWings All right reserved</p> </a>
              <a href="#" className="bottomFooter"><p className="text-muted">Điều khoản sử dụng</p> </a>
              <a href="#" className="bottomFooter"><p className="text-muted">Chính sách bảo mật</p> </a>
              <a href="#" className="bottomFooter editBottomFooter"><p className="text-muted" style={{ marginRight: "0px !important" }}>Công ty Cổ phần Tailor Wings MST: 03xxxxx | Đã đăng ký bộ công thương</p></a>
            </div> */}
          </div>
          {/* footer 2 */}
          <div className={classNames({ activeMinimize: !isHome, deactiveMinimize: isHome, footerExample: !isHome })}>
            <div className="nameStore d-flex flex-nowrap justify-content-start">
              <Link className=" navbar-brand js-scroll-trigger" to="/">TailorWings</Link>
            </div>
            {/* <div className="titleBottom d-flex flex-nowrap justify-content-center" >
              <p className="text-muted">@TailorWings All right reserved</p>
            </div> */}
            <div className="buttonSocial">
              <ul className="list-inline social-buttons d-flex flex-nowrap justify-content-end">
                <li className="list-inline-item">
                  <a  className="google">
                    <i className="fab fa-google "></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a  className="facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="instagram">
                    <i className="fab fa-instagram fa-lg "></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}