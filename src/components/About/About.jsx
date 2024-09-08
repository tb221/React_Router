import React from 'react'
import Images from "./Images/wedding.jpeg"
const About = () => {
  return (
    <div className="flex flex-col  max-w-full justify-center mt-5 ">
    <div className="flex flex-col items-center mt-12">
      <div className="text-xl font-bold italic">We are wedding planners</div>
      <div className="mt-1 py-1">
          <img src={Images}></img>
      </div>
      <div className="mt-5 text-center font-bold text-md mb-1 p-3">
          <p>Wedding to make two hearts as one soul and one Heart.</p>
      </div>
    </div>
    
  </div>
  )
}

export default About