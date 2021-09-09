import React from 'react';
import waist from "../Images/waist.png"
import ex from "../Images/ex.png"
import online from "../Images/online.png"
const HeaderPartTwo = () => {
    return (
        <section class="body-font ">
        <div class="container mx-auto flex px-5  md:flex-row flex-col items-center md:px-16  bg-mainColorDark md:w-2/3 rounded-lg md:h-36  mt-mmt">
            <div class="lg:flex-grow md:w-1/2 lg:pr-4 md:pr-14 flex flex-col md:items-center md:text-center mb-8 md:mb-0 items-center text-center pt-6 md:pt-0 ">
            <div class="flex justify-center mb-3 h-10 w-10 rounded-md text-lightColor bg-lightColor p-2 animate-pulse">
                <img src={waist} alt=""/>
            </div>
            <p class=" text-2xl  text-lightColor md:leading-normal ">Support & Motivation</p>      
            </div>

            <div class="lg:flex-grow md:w-1/2 lg:pr-4 md:pr-4 flex flex-col md:items-center md:text-center mb-8 md:mb-0 items-center text-center md:border-l-2 md:border-r-2 border-mainColorLight border-t-2 border-b-2  border-mainColorLight pt-5 pb-5 md:border-t-0 md:border-b-0">
            <div class="flex justify-center mb-3 h-10 w-10 rounded-md text-lightColor bg-lightColor p-2 animate-pulse">
                <img src={ex} alt=""/>
            </div>
            <p class=" text-2xl text-lightColor md:leading-normal  ">Experience Trainers</p>      
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pr-4 md:pr-4 flex flex-col md:items-center md:text-center mb-16 md:mb-0 items-center text-center">
            <div class="flex justify-center mb-3 h-10 w-10 rounded-md text-lightColor bg-lightColor p-2 animate-pulse">
                <img src={online} alt=""/>
            </div>
            <p class=" text-2xl text-lightColor md:leading-normal">Online Courses</p>      
            </div>
         
            
            </div>
  
    </section>
    );
};

export default HeaderPartTwo;