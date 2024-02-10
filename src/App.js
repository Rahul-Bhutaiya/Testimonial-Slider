import React, { useState } from "react";
import TestimonialCard from "./components/TestimonialCard";
import reviews from './data';


const App = () => {
  const [currentReviewerIndex,setCurrentReviewerIndex]=useState(0);

  return <div className="h-screen w-screen flex flex-col justify-center items-center bg-gray-200">

    <h1 className="text-4xl font-bold text-center">Our Testimonials</h1>

    <div className="bg-violet-400 h-[4px] w-[10%] mt-1 mx-auto"></div>

    <TestimonialCard reviewerData={reviews[currentReviewerIndex]} currentReviewerIndex={currentReviewerIndex} setCurrentReviewerIndex={setCurrentReviewerIndex} allData={reviews}/>

  </div>;
};

export default App;
