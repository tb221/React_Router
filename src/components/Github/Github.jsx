import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom';

const Github = () => {
 //const [data,setData] = useState([]);
 // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
  const data = useLoaderData();
  return (
    <div className='flex max-w-full w-full justify-center items-center'>
        <div className='w-full bg-blue-200 mt-3'>
            <img src={data.avatar_url} className="mt-7" alt="Git picture" width={300} />
            <p className='text-center font-bold text-3xl '> Your follower is {data.followers}</p>
        </div>
    </div>
  )
}

export default Github


export async function GithubLoader()
{
    const response = await fetch("https://api.github.com/users/hiteshchoudhary");
    const data = await response.json();
    console.log("Value is ",data);
    
    return data; 
}