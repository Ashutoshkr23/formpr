const justPayTest = ()=>{

    async function startPayments() {
        console.log("runned")
        var requestPayload = JSON.stringify({
          amount: "1.0",
        });
        var requestOptions = {
          method: "POST",
        //   headers: {
        //     Authorization: "Basic <merchant api auth token>",
        //     "Content-Type": "application/json",
        //   },
          body: requestPayload,
        };

        const response = await fetch("/api/justpay", requestOptions)
        const data = await response.json()
        const payment_link = data.response.payment_links.web
        console.log(data,"Data",payment_link)
        // window.location.replace(payment_link);
            var paymentPageDiv = document.querySelector("#juspayDiv");
            var juspayIframe = document.createElement("iframe");
            juspayIframe.src = payment_link;
            juspayIframe.setAttribute("allow", "payment *;");

            // JUSPAY Hypercheckout needs a minimum width of 700px to open the Hypercheckout screen on web,
            // on iframe widths less than 700px mobile web Hypercheckout screen will open

            juspayIframe.width = "1000";     // Set the width and height as per your requirements, for mobile try to
            juspayIframe.height = "920";     // keep the width as auto, so it will take entire width of the frame provided.
           
            paymentPageDiv.appendChild(juspayIframe);

            
       
        //   .then((result) => {
        //     console.log(result,"Res")
            //block:start:open-payment-page

            // Redirecting to payment link which is received from merchant server after Session API S2S call
            // window.location.replace(result.link);


            // OR
            // Opening the Hypercheckout screen in an iframe
            /*
            
            */

            //block:end:open-payment-page
        //   })
        //   .catch((error) => console.log("error", error));
      }
    return(
        <div className="min-h-screen flex justify-center items-center">
             <div id="juspayDiv">
            <button className="border px-4 py-2 rounded-xl" onClick={()=>startPayments()}>
                Justpay Test
            </button>
           </div>
        </div>
    )
}

export default justPayTest