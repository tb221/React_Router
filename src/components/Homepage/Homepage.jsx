import React from "react";
import Images from "./Images/card.jpeg"
const Homepage = ({ title }) => {
  return (
    <div className="flex flex-col  max-w-full justify-center mt-5 ">
      <div className="flex flex-col items-center mt-12">
        <div className="text-xl font-bold italic">{title}</div>
        <div className="mt-1 py-1">
            <img src={Images}></img>
        </div>
        <div className="mt-5 text-center font-bold text-md mb-1 p-3">
            <p>This is a welcome Page. We host the guest and fulfill their dream by arranging the plan as per their choice.</p>
        </div>
      </div>
      
    </div>
  );
};

export default Homepage;
