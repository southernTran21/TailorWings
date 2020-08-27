import { updateVoucher } from "actions";
import Voucher from "components/Pages/Cart/Voucher";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWithDoubleCondition } from "../../../services/Firebase API/basic";
import { message } from "antd";

function VoucherContainer() {
    /*--------------*/
    const [isVoucherApplied, setIsVoucherApplied] = useState(false);
    /*--------------*/
    const voucher = useSelector((state) => state.cart.voucher);
    /*--------------*/
    const dispatch = useDispatch();
    /*********************************
     *  Description: handle applying voucher success or not
     *
     *
     *  Call by:
     */
    function onApplyVoucher(voucher) {
        /*--------------*/
        console.log("voucher :>> ", voucher);
        if (voucher && voucher !== "") {
            /*--------------*/
            fetchWithDoubleCondition(
                "voucher",
                "isExpired",
                false,
                "code",
                voucher
            )
                .then((result) => {
                    if (result.length > 0) {
                        let voucherInfo = { ...result[0] };
                        const { code, value } = voucherInfo;
                        /*--------------*/
                        setIsVoucherApplied(true);
                        /*--------------*/
                        const action_updateVoucher = updateVoucher({
                            code,
                            value,
                        });
                        dispatch(action_updateVoucher);
                        /*--------------*/
                        message.success(
                            "Áp dụng thành công!"
                        );
                    } else {
                        message.error(
                            "Mã giảm giá không có giá trị hoặc hết hạn!"
                        );
                    }
                })
                .catch((error) => {
                    console.log("error :>> ", error);
                });
        } else {
            message.error("Vui lòng nhập mã giảm giá!");
        }
    }
    /************_END_****************/
    return (
        <section className="l-cart__voucher">
            <Voucher
                isVoucherApplied={isVoucherApplied}
                onApplyVoucher={onApplyVoucher}
                voucher={voucher}
            />
        </section>
    );
}

export default VoucherContainer;
