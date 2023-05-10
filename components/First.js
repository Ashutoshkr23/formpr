import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';



const First = () => {

  const [uuid, setUuid] = useState(null);
  const [email, setEmail] = useState(null);

  const { data: session } = useSession();

  function handleSignOut() {
    signOut()
  }

  const fetchUuid = async () => {
    try {
      const response = await axios.get(`/api/userprofile?email=${session.user.email}`);
      //console.log('email:', session.user.email);
      //console.log('uuid:', response.data.uuid);
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
    const cardUuid = uuidv4();
    //console.log(cardUuid)
    const response = await axios.post('/api/checkout', {
      email,
      uuid,
      cardUuid,
    })

    if (response.data.url) {
      window.location = response.data.url;
    }
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
