import React from 'react'
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image';
import { useRouter } from 'next/router';


const Navbar = () => {
  const router = useRouter();

    const { data: session } = useSession();

    function handleSignOut() {
        signOut()
    }
    const handleClick=()=>{
      router.push('/Profile');
    }
   
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
        
          <button onClick={handleClick} className=''>
            <Image className='rounded-full'
            src={session.user.image}
            alt="user image"
            width={30}
            height={30}


            />

          </button>
          <button className='bg-black rounded-md text-white ml-10 mt-3' onClick={handleSignOut}>Sign Out</button>

{/* 
          {toggle && (
        <div className="dropdown-menu">
          <div>
          <Link  href="" >
          Home
          </Link>
          </div>
        <div>
        <Link  href="" >
          About
          </Link>
        </div>
         
          <button className='bg-black rounded-md text-white' onClick={handleSignOut}>Sign Out</button>
        </div>
      )} */}
        
        
      </div>

    </nav>

    </div>
  )
}

export default Navbar