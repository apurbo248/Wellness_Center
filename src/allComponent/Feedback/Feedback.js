import React, { useEffect, useState } from 'react';
import Slider from "react-slick";

const Feedback = () => {

    const[review, setReview] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:9000/get_all_review`)
        .then(res => res.json())
        .then(data => {
            setReview(data);           
        })
        },[])

    const settings = {
        dots: false,
        infinite: true,
        
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 2000,
        autoplaySpeed: 3000,
        cssEase: "linear"
      };
    return (
        <section class=" body-font">
            <div class="container mx-auto flex px-5  flex-col items-center md:px-16 md:pb-12 ">
                <div class="container px-5 pb-8  mx-auto flex flex-wrap justify-center">
                    <div class="">
                        <div class=" md:mt-4 mt-6 ">
                            <h3 class="text-2xl font-bold md:text-2xl border-b-2 border-mainColorDark text-darkColor  justify-center">What People Says</h3>
                            {/* <a class="inline-flex text-mainColorDark py-1.5 pl-10 underline md:pl-pl md:text-lg font-semibold">view all</a> */}
                        
                        </div>
                    </div>
            </div>
          
             <div class=" font-sans leading-normal tracking-normal container md:px-56  rounded-xl ">
            <div>
        
        <Slider {...settings}>
        {
            review.map(review =>{
          return <div class="xl:w-1/3 md:w-1/3  ">
              <div class=" rounded-lg  m-1 bg-mainColorLight shadow-lg">
                
               <img class="h-20 w-sm rounded-full  object-center " src={review.image}alt=""/>
                  <div class=" pt-2 pb-8 ">
                  <h2 class="text-xl md:pl-16 md:p-4 text-gray-900 font-medium title-font mb-4 ">{review.review}</h2>
                <h4 class="leading-relaxed md:pr-5  font- text-mainColorDark  text-1xl  flex md:justify-end md:pt-4">{review.name}</h4>
                
              </div>
              </div>
            </div>
            })
        }      
        </Slider>
      </div>
   </div>
 </div>
</section>
    );
};

export default Feedback;