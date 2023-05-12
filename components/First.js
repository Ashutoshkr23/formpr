import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';



const First = () => {

  const [uuid, setUuid] = useState(null);
  const [email, setEmail] = useState(null);
  const [orderId, setOrderId] = useState('');


  const { data: session } = useSession();

  function handleSignOut() {
    signOut()
}

const fetchUuid = async () => {
  try {
    const response = await axios.get(`/api/userprofile?email=${session.user.email}`);
    console.log('email:', session.user.email);
    console.log('uuid:', response.data.uuid);
    setUuid(response.data.uuid);
    setEmail(session.user.email)


  } catch (error) {
    console.error(error);
  }
};

useEffect(() => {
  fetchUuid();
}, [session]);

const handleBuyClick = async () => {
  console.log("here...");
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }

    // Make API call to the serverless API
    const data = await fetch("/api/razorpay", { method: "POST" }).then((t) =>
      t.json()
    );
    console.log(data);
    var options = {
      key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
      name: "Alphamit Labs",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "Thankyou for your test donation",
     // image: "https://manuarora.in/logo.png",
      handler: function (response) {
        // Validate payment at server - using webhooks is a better idea.
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
        window.location.href = "/ContactForm";

      },
      prefill: {
        name: "amit kumar",
        email: email,
       // contact: "4785962514",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      // document.body.appendChild(script);

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };
  return (
    <div>
      <nav className='flex flex-row justify-around mt-5'>
    <div>
        
          <Link href="/">
            Home
          </Link>
       
        </div>
        <div>
        
          <Link href="/ContactForm">
           Create Card
          </Link>
       
        </div>
        <div>
        
        <Link href="/EditForm">
         Edit Card
        </Link>
     
      </div>
        <div>
        
          <button onClick={handleSignOut} className=' bg-red-400 rounded-xl'>btn</button>
        
      </div>
    </nav>
      
      <div className='flex justify-center  pb-10 text-2xl mt-40'>  <h1 className="title">Get Your Card</h1></div>
      <div className='flex flex-row justify-around'>
        <div>
<div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   
    <div className="p-5">
        <div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
       
    </div>
</div>
<div className='flex justify-center mt-5'>
<div onClick={handleBuyClick} className='px-2 rounded-sm text-lg bg-green-200 cursor-pointer'>Buy</div>
</div>
</div>
{/* <div>
<div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
  
    <div className="p-5">
        <div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
       
    </div>
</div>
<div className='flex justify-center mt-5'>
<button className='px-2 rounded-sm text-lg bg-green-200'>Buy</button>
</div>
</div>
<div>
<div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   
    <div className="p-5">
        <div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
       
    </div>
</div>
<div className='flex justify-center mt-5'>
<div className='px-2 rounded-sm text-lg bg-green-200'>Buy</div>
</div>
</div> */}

</div>
    </div>

  );
};

export default First;
// const cardUuid = uuidv4();
// alert("card purchased")
// console.log(cardUuid)
//   try {
//     const data = { email, uuid,cardUuid };
//     const response = await axios.post('/api/purchase', data);
//     console.log(response.data.message);
//   } catch (error) {
//     console.error(error);
//   }