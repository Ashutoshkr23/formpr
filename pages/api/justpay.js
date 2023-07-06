import { connectToDatabase } from '../../lib/mongoose';


export default async function handler(req, res) {
    try {
        await connectToDatabase();
        if (req.method === "GET") {
          console.log("run");
        } else if (req.method === "POST") {
          console.log("runned");
          const apiKey = process.env.JUSTPAY_ACCESS_KEY;
          const merchantId = process.env.JUSTPAY_MERCHANT_ID;
          const clientId = process.env.JUSTPAY_MERCHANT_ID;
          const authorization =
            "Basic " + Buffer.from(apiKey + ":").toString("base64");

          var requestPayload = JSON.stringify({
            order_id: "order-122",
            amount: "1.0",
            customer_id: "123312",
            customer_email: "test@mail.com",
            customer_phone: "9876543210",
            payment_page_client_id: clientId,
            action: "paymentPage",
            return_url: `${process.env.NEXT_PUBLIC_BASE_URL}justpayTest`,
            description: "Complete your payment",
            theme: "dark",
            first_name: "John",
            last_name: "wick",
          });

          var requestOptions = {
            method: "POST",
            headers: {
              Authorization: authorization,
              "x-merchantid": merchantId,
              "Content-Type": "application/json",
            },
            body: requestPayload,
          };

        const response = await fetch("https://api.juspay.in/session", requestOptions)
        const data = await response.json();
        console.log(data)
        res.status(200).json({
            response:data
        })
        } else {
          return res.status(405).json({ message: "Method not allowed" });
        }
    }

    catch (error) {
        return res.status(500).json({ message: 'Unable to create purchase', error });
    }
}
