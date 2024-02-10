import React from 'react';
import { FaQuoteLeft,FaQuoteRight } from "react-icons/fa";
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";

const TestimonialCard = (props) => {
    const eachUserReview=props.reviewerData;
    const setCurrentReviewerIndex=props.setCurrentReviewerIndex;
    const currentReviewerIndex=props.currentReviewerIndex;
    const allData=props.allData;

    function previousReviewHandler(){
        if(currentReviewerIndex===0){
            setCurrentReviewerIndex(allData.length-1);
        }
        else{
            setCurrentReviewerIndex(currentReviewerIndex-1);
        }
    }

    function nextReviewHandler(){
        if(currentReviewerIndex===allData.length-1){
            setCurrentReviewerIndex(0);
        }
        else{
            setCurrentReviewerIndex(currentReviewerIndex+1);
        }
    }

    function getRandomReviewHandler(){
        const ind=Math.floor(Math.random()*allData.length);
        setCurrentReviewerIndex(ind);
    }

  return (
    <div className='
    bg-white w-[85vw] md:w-[700px] mt-10 shadow-md hover:shadow-xl 
    rounded-md p-10 transition-all duration-700  flex flex-col justify-center items-center relative'>

        <div className='relative mx-auto md:absolute md:top-[-4.5rem] md:left-[2.5rem]'>
            <img className='w-[140px] h-[140px] rounded-full object-cover aspect-square z-40 sticky' src={eachUserReview.image} alt={eachUserReview.name}/>
            <div className='w-[140px] h-[140px] rounded-full bg-violet-500 absolute top-[-6px] z-30 left-[10px]'></div>
        </div>

        <h2 className='mt-7 font-bold text-lg md:text-2xl tracking-wider capitalize'>{eachUserReview.name}</h2>
        <h3 className='text-violet-300  uppercase text-sm'>{eachUserReview.job}</h3>

        <FaQuoteLeft className='text-violet-400 mt-5 '/>

        <p className='text-center mt-4 text-slate-500'>
            {eachUserReview.text}
        </p>

        <FaQuoteRight className='text-violet-400 mt-5 mb-5'/>

        <div className='flex text-3xl mt-5 gap-3 text-violet-400 font-semibold'>
            <button onClick={previousReviewHandler} className='cursor-pointer hover:text-violet-500'><IoIosArrowBack /></button>
            <button onClick={nextReviewHandler} className='cursor-pointer hover:text-violet-500'><IoIosArrowForward /></button>
        </div>

        <button onClick={getRandomReviewHandler} className='
        mt-5 bg-violet-400 hover:bg-violet-500 shadow-md hover:shadow 
        transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'>Surprise Me</button>
    </div>
  )
}

export default TestimonialCard;