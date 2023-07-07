import Image from "next/image";
import { useEffect, useState } from "react";

const { useRouter } = require("next/router");

const PaymentStatus = () => {
    const router = useRouter();
    const { orderId } = router.query

    const [responseObj, setStatus] = useState(null)

    useEffect(() => {
        const fetchPaymentStatus = async () => {

            const response = await fetch(`/api/justpay?orderId=${orderId}`);
            const data = await response.json()
            setStatus(data.result)
            // console.log(data, "resp from ps");
        }

        if (orderId) {

            fetchPaymentStatus()
        }
    }, [orderId])

    console.log(responseObj, "res")

    return (
        <div>
            <div className="flex items-center justify-center min-h-screen  text-center  sm:p-0">

                <div
                    className="inline-block min-h-[450px] align-bottom bg-gradient-to-br from-[#67D4E1] to-[#8DF6B8] rounded-lg text-left overflow-hidden shadow-xl transform transition-all  sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-headline"
                >
                    {responseObj?.status == "CHARGED" ? <div className="h-full w-full flex flex-col justify-center items-center">
                        <Image
                            src={"/assets/images/rightImage.png"}
                            height={200}
                            width={200}
                            alt="right icon"
                            className=""
                        />
                        <p className="text-3xl font-bold text-center mt-6">
                            Payment Completed
                        </p>
                        <p className=" text-sm font-medium text-center text-[#626262] mt-6">
                            Thank you for your purchase!
                        </p>
                        <button
                            className="text-xs bg-black shadow border rounded-lg border-black text-white font-medium mt-6 px-6 py-2"
                        //   onClick={() => {
                        //     closeModal();
                        //     clearCart();
                        //     router.push("/manageCards");
                        //   }}
                        >
                            Go to Manage Cards and create your profile
                        </button>
                    </div> : <div className="h-full w-full flex flex-col justify-center items-center">
                        <Image
                            src={"/assets/images/failed.png"}
                            height={175}
                            width={175}
                            alt="failed icon"
                            className=""
                        />
                        <p className="text-3xl font-bold text-center mt-6">
                            Payment Failed
                        </p>
                        <p className=" text-sm font-medium text-center text-[#626262] mt-6">
                            {responseObj?.status}
                        </p>
                        <button
                            className="text-xs bg-black shadow border rounded-lg border-black text-white font-medium mt-6 px-6 py-2"
                        //   onClick={() => {
                        //     closeModal();
                        //     clearCart();
                        //     router.push("/manageCards");
                        //   }}
                        >
                            Go to Manage Cards and create your profile
                        </button>
                    </div>}
                </div>
            </div>

        </div>
    )
}

export default PaymentStatus