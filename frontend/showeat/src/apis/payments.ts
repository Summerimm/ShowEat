import { FetchProps } from "@customTypes/apiProps";
import { fetchModify, fetchGet } from "@utils/api";

// ----------------------------------------------------------------------------------------------------

/* Function for Posting Request of Payments */
const postRequestPayments = async (
    userId: number,
    payType: string,
    amount: number,
    orderName: string,
    credentialId: string,
    userEmail: string,
    userNickname: string,
) => {
    const props: FetchProps = {
        url: `payments/request/${userId}`,
        method: "POST",
        data: { payType, amount, orderName, credentialId, userEmail, userNickname },
        isAuth: true,
    };

    const result = await fetchModify(props);

    return result;
};

/* Function for Getting Request of Payment Approval */
const getRequestPaymentApproval = async (
    paymentType: string,
    orderId: string,
    paymentKey: string,
    amount: number,
) => {
    const props: FetchProps = {
        url: `payments/request/success`,
        method: "GET",
        isAuth: true,
        params: { paymentType, orderId, paymentKey, amount: amount.toString() },
    };

    const result = await fetchGet(props);

    return result;
};

// ----------------------------------------------------------------------------------------------------

/* Export */
export { postRequestPayments, getRequestPaymentApproval };
