import React, { Component } from "react";
import "./Support.scss";
import { Collapse } from "antd";
import NavBar from "./NavBar";

const { Panel } = Collapse;

export default class Support extends Component {
    render() {
        return (
            <div className="pageSupport-container">
                <NavBar />
                <div className="pageSupport">
                    <div className="titleHeaderPage">
                        <span>Trợ giúp</span>
                    </div>
                    <Collapse
                        defaultActiveKey={["1", "2", "3", "4"]}
                        expandIconPosition="right"
                    >
                        <Panel
                            header="1. Hướng dẫn chọn size"
                            key="1"
                            className="d-flex flex-column"
                        >
                            <span className="font-weight-bold">
                                Cách 1: Chọn size chuẩn theo bảng size tại
                                <span
                                    className="font-weight-bold"
                                    style={{
                                        color: "#FF6D3B",
                                        textDecoration: "underline"
                                    }}
                                >
                                    {" "}
                                    đây
                                </span>
                                .
                            </span>
                            <br></br>
                            <br></br>
                            <span className="font-weight-bold">
                                Cách 2: Bạn có thể cung cấp cho Tailor Wings số
                                đo ba vòng của bạn tại bước Chọn Size trong quá
                                trình mua hàng.
                            </span>
                            <br></br>
                            <br></br>
                            <span>
                                Xin lưu ý, trong trường hợp bạn cung cấp cho
                                chúng tôi cả hai thông tin: Size chuẩn và Số đo
                                3 vòng, Tailor Wings sẽ lấy số đo 3 vòng mà bạn
                                cung cấp để may sản phẩm cho bạn.
                            </span>
                        </Panel>
                        <Panel header="2. Hướng dẫn mua hàng" key="2">
                            <span>Vui lòng làm theo các bước tại Website.</span>
                        </Panel>
                        <Panel header="3. Hướng dẫn thanh toán" key="3">
                            <span>
                                Hiện nay, Tailor Wings chỉ áp dụng hai hình thức
                                thanh toán:{" "}
                                <span className="font-weight-bold font-italic">
                                    Thanh toán khi nhận hàng
                                </span>{" "}
                                và
                                <span className="font-weight-bold font-italic">
                                    {" "}
                                    Thanh toán chuyển khoản.
                                </span>
                            </span>
                            <br></br>
                            <br></br>
                            <span className="font-weight-bold">
                                Thông tin chuyển khoản
                            </span>
                            <br></br>
                            <br></br>
                            <span style={{ lineHeight: "30px" }}>
                                TÊN CHỦ TÀI KHOẢN: LA THI PHUONG CHAM
                                <br></br>
                                SỐ TÀI KHOẢN
                                <br></br>
                                Ngân hàng ACB chi nhánh Bến Thành: 969717
                                <br></br>
                                Ngân hàng Techcombank chi nhánh HCM: 190 332211
                                72015
                            </span>
                        </Panel>
                        <Panel header="4. Hướng dẫn đổi trả" key="4">
                            <span>
                                Sản phẩm chỉ được áp dụng đổi trả nếu: <br></br>
                                <br></br>- Sản phẩm may bị lỗi và lỗi phát sinh
                                do phía Tailor Wings. <br></br>
                                <br></br>- Sản phẩm không đúng như mô tả và cam
                                kết về chất lượng. Vui lòng liên hệ với Tailor
                                Wings tại Fanpage #TailorWings để được hướng dẫn
                                đổi trả.
                            </span>
                        </Panel>
                    </Collapse>
                </div>
            </div>
        );
    }
}
