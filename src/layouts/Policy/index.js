import { Collapse } from "antd";
import NavbarShopping from "components/Navbar/NavbarShopping";
import React, { useEffect } from "react";
import ReactGA from "react-ga";

const initGA = () => {
    ReactGA.initialize("UA-159143322-2");
};

const logPageViewGA = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname + window.location.search);
};

const { Panel } = Collapse;

function Policy() {
    /*--------------*/
    useEffect(() => {
        /*--------------*/
        initGA();
        logPageViewGA();
        /*--------------*/
    }, []);
    /*--------------*/
    return (
        <div className="l-policy">
            <section className="l-policy__navbar">
                <NavbarShopping />
            </section>
            <h2 className="l-policy__title-header">Điều kiện & Điều khoản</h2>
            <section className="l-policy__content-header">
                <span className="l-policy__title-content">
                    Điều khoản sử dụng website
                </span>
                <p className="l-policy__desc">
                    Trang web này được cung cấp và quản lý bởi Công ty TNHH
                    Thương Mại Kết Nối Á Âu (Sau đây gọi tắt là Công ty Á Âu),
                    bằng việc truy cập vào trang website www.tailorwings.com của
                    chúng tôi, quý khách hàng đồng ý với những điều khoản, điều
                    kiện dưới đây. Vui lòng thoát ra nếu bất kỳ điều khoản nào
                    dưới đây không phù hợp hoặc không được sự chấp thuận của Quý
                    khách hàng.
                </p>
            </section>
            <hr />
            <section className="l-policy__collapse">
                <Collapse expandIconPosition="right">
                    <Panel header="1. Cam kết" key="1">
                        <span>
                            Chúng tôi cam kết những thông tin được cung cấp trên
                            trang web này đều minh bạch và trung thực.
                        </span>
                    </Panel>
                    <Panel header="2. Chính sách bảo mật" key="2">
                        <span>
                            Chúng tôi cam kết những thông tin được cung cấp trên
                            trang web này đều minh bạch và trung thực.
                        </span>
                    </Panel>
                    <Panel header="3. Khiếu nại" key="3">
                        <span>
                            TW không chịu trách nhiệm nếu thông tin trên trang
                            web này là không đầy đủ hoặc mô tả không chi tiết .
                            Khách hàng đồng ý rằng đó là trách nhiệm của bản
                            thân khách hàng để theo dõi bất kỳ những thay đổi dữ
                            liệu và các thông tin cập nhật trên trang web này.
                        </span>
                    </Panel>
                    <Panel
                        header="4. Cung cấp thông tin / dữ liệu tới TW"
                        key="4"
                    >
                        <span>
                            Bất kỳ thông tin phi cá nhân hoặc tài liệu gửi đến
                            trang web này bằng thư điện tử hoặc bằng cách khác,
                            bao gồm bất kỳ dữ liệu, câu hỏi, ý kiến, quan điểm
                            hay tương tự như vậy, đang và sẽ được coi là không
                            bảo mật và không độc quyền.
                            <br></br>
                            <br></br>Bất cứ điều gì được gửi tới hay được đăng
                            trên website sẽ trở thành tài sản của Công ty Á Âu
                            và có thể được sử dụng cho bất kỳ mục đích nào bao
                            gồm, nhưng không giới hạn, trong việc tiết lộ, xuất
                            bản, phát thanh, và gửi bài. Mọi thông tin chi tiết,
                            xin vui lòng gửi email cho chúng tôi tại:
                            info.tailorwings@gmail.com.
                        </span>
                    </Panel>
                    <Panel header="5. Quyền sở hữu trí tuệ" key="5">
                        <span>
                            Thương hiệu TAILOR WINGS. Tất cả quyền được bảo lưu.
                            <br></br>
                            <br></br>Tất cả quyền tác giả và quyền sở hữu trí
                            tuệ khác trong tất cả các văn bản, hình ảnh, và các
                            tài liệu khác trên trang web này là tài sản của Công
                            ty Á Âu hoặc được bao gồm với sự cho phép của chủ sở
                            hữu tương ứng. <br></br>
                            <br></br>Khách hàng có thể tự do truy cập trang web,
                            nhưng chỉ được phép truy cập, tải về, hoặc sử dụng
                            thông tin từ trang web này, bao gồm bất kỳ văn bản,
                            hình ảnh, âm thanh và video, vv, (sau đây gọi là
                            "thông tin") không phục vụ cho mục đích thương mại
                            của riêng Khách hàng . Viêc sao chép và/ hay sử dụng
                            thông tin nêu trên nên được thực hiện với điều kiện:
                            Tất cả các bản quyền và quyền sở hữu khác được giữ
                            nguyên vẹn, và được chú thích nguồn dữ liệu tương
                            ứng trên các bản sao . Không được sao chép bất kỳ
                            phần nào của trang web này cho mục đích thương mại,
                            cũng như không được sửa đổi hoặc kết hợp vào bất kỳ
                            công việc nào khác của Quý khách hàng. <br></br>
                            <br></br>Các nhãn hiệu, biểu tượng, ký tự, và nhãn
                            hiệu dịch vụ (gọi chung sau đây gọi là "thương
                            hiệu") (ví dụ : Tailor Wings , và logo Tailor Wings
                            , cũng như các nhãn sản phẩm của Tailor Wings ) được
                            bảo vệ nhãn hiệu bởi Công ty TNHH Thương Mại Kết Nối
                            Á Âu . Việc khách hàng sử dụng / sử dụng sai trong
                            thương hiệu/ nhãn hiệu được hiển thị trên trang web
                            này hoặc của bất kỳ nội dung khác trên trang web này
                            đều bị nghiêm cấm.
                        </span>
                    </Panel>
                    <Panel
                        header="6. Các liên kết tới các trang web khác"
                        key="6"
                    >
                        <span>
                            Việc dẫn liên kết đến các trang web khác nhằm cung
                            cấp cho khách hàng sự thuận lợi và phù hợp với nhu
                            cầu của khách hàng ghé thăm trang web của TW . Tất
                            cả các liên kết từ TW có thể dẫn khách hàng ra khỏi
                            trang web www.tailorwings.com theo đó TW không có
                            trách nhiệm cho bất kỳ nội dung nào mà trang web
                            khác cung cấp. Cũng không có trách nhiệm đối với vấn
                            đề bảo mật thông tin cá nhân của quý khách ngoài
                            trang web của chúng tôi.
                        </span>
                    </Panel>
                    <Panel header="7. Đảm bảo và Khiếu nại" key="7">
                        <span>
                            Bảo đảm bao gồm, nhưng không giới hạn, bất kỳ dữ
                            liệu nào trên trang web này đều là hoàn chỉnh, chính
                            xác, đáng tin cậy, và không vi phạm các bên thứ ba.
                            TW có quyền hạn chế hoặc chấm dứt quyền truy cập của
                            khách hàng vào trang web này, hoặc bất kỳ tính năng
                            của trang web này hoặc một phần của nó vào bất cứ
                            lúc nào mà không báo trước.
                        </span>
                    </Panel>
                    <Panel header="8. Trách nhiệm" key="8">
                        <span>
                            TW và bất kỳ bên nào khác liên quan đến việc sáng
                            tạo, sản xuất, hoặc giao hàng của trang web này trên
                            danh nghĩa của công ty, sẽ không chịu trách nhiệm về
                            bất kỳ: Thiệt hại trực tiếp, gián tiếp, ngẫu nhiên,
                            hậu quả, hoặc trừng phạt; chi phí; thiệt hại có thể
                            xảy ra như là kết quả của: sử dụng và / hoặc không
                            có khả năng sử dụng trang web TW của khách hàng.
                        </span>
                    </Panel>
                    <Panel header="9. Hành động bị cấm" key="9">
                        <span>
                            TW đơn phương được quyền kiểm duyệt tất cả các nội
                            dung mà khách hàng đăng tải hoặc chia sẻ trên trang
                            web của TW. Tuy nhiên, TW không chịu trách nhiệm đối
                            với bất kỳ tổn thất, thiệt hại nào phát sinh từ nội
                            dung của bất kỳ bộ phận nào trên trang web và cũng
                            không cho bất kỳ nội dung nào từ phía khách hàng
                            mang tính chất tục tĩu, phỉ báng, khiêu dâm, tiết lộ
                            riêng tư, xuyên tạc, nguy hiểm, giả dối hoặc chứa
                            bất kỳ thông tin khuyến khích các hành vi hình thành
                            hành vi phạm tội.
                            <br></br>
                            <br></br>TW cũng có quyền nghiêm cấm khách hàng truy
                            cập trang web này để thực hiện bất kỳ hành vi nào có
                            thể tạo thành một hành vi vi phạm quyền riêng tư
                            (bao gồm gửi thông tin cá nhân của cá nhân khác mà
                            không có sự đồng ý của cá nhân có liên quan) hoặc vi
                            phạm các quyền hợp pháp của cá nhân khác; sử dụng
                            trang web này để nói xấu hoặc bôi nhọ TW, nhân viên
                            của TW và tải lên những file chứa virus mà có thể
                            gây ra thiệt hại cho tài sản của TW. <br></br>
                            <br></br>Khách hàng và chúng tôi đồng ý rằng bất kỳ
                            tranh cãi hoặc khiếu kiện phát sinh từ hoặc liên
                            quan đến, việc sử dụng các trang web này sẽ được
                            điều chỉnh bởi pháp luật của Việt Nam.
                        </span>
                    </Panel>
                    <Panel header="10. Hậu quả" key="10">
                        <span>
                            Nếu chúng tôi nhận ra bất kỳ khách hàng nào vi phạm
                            bất kỳ điều khoản và điều kiện nào đã quy định như
                            trên, TW có quyền chặn sự truy cập của quý khách
                            hàng đó. Mọi thiệt hại nghiêm trọng do hàng động cố
                            ý của khách hàng sẽ phải bồi thường theo quy định
                            của Pháp luật Việt Nam.
                        </span>
                    </Panel>
                    <Panel header="11. Cookies" key="11">
                        <span>
                            TW sử dụng hệ thống công nghệ theo dõi truy cập
                            (cookies), giúp cho trang web dễ sử dụng, hiệu quả
                            và an toàn. Cookies là các tập tin văn bản nhỏ được
                            lưu trữ trên máy tính của khách hàng và sử dụng cho
                            trình duyệt của khách hàng. Hầu hết các ứng dụng
                            cookie sẽ bị xóa tự động vào lượt truy cập cuối cùng
                            của khách hàng. Cookies sẽ không làm hại máy tính
                            của khách hàng và không chứa bất kỳ loại virus gây
                            hại nào. Tuy nhiên, nếu khách hàng không muốn sử
                            dụng các tập tin cookie, điều này sẽ không ngăn cản
                            bạn truy cập vào trang web của công ty trong bất kỳ
                            trường hợp nào.
                        </span>
                    </Panel>
                    <Panel header="12. Sửa đổi" key="12">
                        <span>
                            TW có thể sửa đổi các Điều khoản và Điều kiện bằng
                            cách cập nhật nội dung trang này bất cứ lúc nào.
                            Theo đó khách hàng bị ràng buộc bởi bất kỳ sửa đổi
                            như vậy và do đó TW khuyến cáo khách hàng nên định
                            kỳ xem lại trang này.
                        </span>
                    </Panel>
                </Collapse>
            </section>
        </div>
    );
}

export default Policy;
