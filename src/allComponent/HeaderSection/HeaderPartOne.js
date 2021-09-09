import React from 'react';
import img from '../Images/header.png'
const HeaderPartOne = () => {
    return (
    <section class=" body-font pb-36 border-b-2  border-mainColorLight ">
     <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center md:px-16 md:pt-48 ">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 class=" text-2xl md:text-5xl mb-6 font-medium text-darkColor md:leading-normal  ">Helping You Find Peace Within Yourself</h1>
       
        <div class="flex justify-center">
            <a href="#course" class="inline-flex text-mainColorDark font-semibold bg-darkColor border-0 py-2 px-6 shadow-shadow1 focus:outline-none hover:bg-mainColorLight rounded text-lg rounded-full">Explore Course</a>
        </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-2/2 w-6/6">
        <img class="heroImg   object-center rounded" alt="hero" src={img}/>
        </div>
     </div>
    </section>
  
    );
};

export default HeaderPartOne;