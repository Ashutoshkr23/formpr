import { connectToDatabase } from '../../lib/mongoose';
import shortid from 'shortid';


export default async function handler(req, res) {
  try {
    await connectToDatabase();

    const apiKey = process.env.JUSTPAY_ACCESS_KEY;
    const merchantId = process.env.JUSTPAY_MERCHANT_ID;
    const clientId = process.env.JUSTPAY_MERCHANT_ID;
    const authorization = "Basic " + Buffer.from(apiKey + ":").toString("base64");

    if (req.method === "GET") {
      console.log("runn")
      const { orderId } = req.query;

      var requestOptions = {
        method: "GET",
        headers: {
          Authorization: authorization,
          "x-merchantid": merchantId,
          "version": "2023-07-07",
          "Content-Type": "application/json",
        },
      };
      const api = `https://api.juspay.in/orders/${orderId}`


      const response = await fetch(api, requestOptions)
      const data = await response.json();
      console.log(data, " data from server");
      res.status(200).json({
        result: data
      })
    } else if (req.method === "POST") {

      const orderId = `order-${shortid.generate()}`
      const return_url = ` ${process.env.NEXT_PUBLIC_BASE_URL}paymentStatus/${orderId}`
      // const return_url = ` ${process.env.NEXT_PUBLIC_BASE_URL}justpayTest`

      console.log(return_url)
      var requestPayload = JSON.stringify({
        order_id: orderId,
        amount: "2.0",
        customer_id: "1233121",
        customer_email: "tester@mail.com",
        customer_phone: "9876543211",
        payment_page_client_id: clientId,
        action: "paymentPage",
        return_url: return_url,
        description: "Complete your payment",
        theme: "dark",
        first_name: "John 1",
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
        response: data
      })
    } else {
      return res.status(405).json({ message: "Method not allowed" });
    }
  }

  catch (error) {
    return res.status(500).json({ message: 'Unable to create purchase', error });
  }
}
