import React from 'react'
import { useParams } from 'react-router-dom'
import Image from "./Images/amit.jpg"
const User = () => {
  const {userId} = useParams();
  return (
    <div className='flex max-w-full w-full justify-center mt-24'>
        <div className='text-center text-bold text-2xl italic bg-pink-300'>
            <p className='p-4 '>Hi {userId}</p>
            <p clasName="p-4 mb-2">Your wedding image is</p>
            <img src={Image} width={400} height={400}></img>
        </div>
    </div>
  )
}

export default User