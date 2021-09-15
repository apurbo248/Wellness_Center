import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import ex from "../Images/ex.png"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
const Courses = () => {
    const [allCourse, setAllCourse] = useState([]);

    useEffect(()=>{
      fetch(`https://rocky-sea-29087.herokuapp.com/get_all_course`)
      .then(res => res.json())
      .then(data => {
        
          setAllCourse(data);
      })
      },[])


  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background:"#01a954",margin:"210px 40px 0px 0px " ,height:"30px" ,width:"55px",padding:"6px 0 0 18px",fontSize:"40px" ,borderTopLeftRadius:"5px",borderBottomRightRadius:"5px"}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background:"#01a954",margin:"210px 0px 0px 1040px ",width:"55px",padding:"6px 0 0 18px",height:"30px" ,borderTopRightRadius:"5px",borderBottomLeftRadius:"5px"  }}
        onClick={onClick}
      />
    );
  }
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              initialSlide: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              nextArrow:false,
              prevArrow:false,

            }
          }
        ]
      };
    return (
        
        <section class=" body-font pb-24" id="course">
            <div class="container mx-auto flex px-5  flex-col items-center md:px-16 md:pt-8 ">
                <div class="container px-5 pt-14  mx-auto flex flex-wrap">
                    <div class="md:w-5/5">
                        <div class="flex md:mt-4 mt-6">
                            <h3 class="text-2xl font-bold md:text-2xl border-b-2 border-mainColorDark text-darkColor">Popular courses</h3>
                            {/* <a class="inline-flex text-mainColorDark py-1.5 pl-10 underline md:pl-pl md:text-lg font-semibold">view all</a> */}
                        
                        </div>
                    </div>
            </div>
          
             <div class=" font-sans leading-normal tracking-normal container mx-6  rounded-xl ">
            <div>
        
        <Slider {...settings}>
          {
            allCourse.map(course =>{
              return <div class="xl:w-1/4 md:w-1/2  border-0 p-4 ">
              <div class=" rounded-lg  m-1 bg-slc hover:shadow-lg">
                
                <Link to={`/course_details/${course._id}`}><img class="h-50 rounded w-full  object-center mb-2 " src={`data:image/png;base64,${course.image.img}`}alt=""/></Link>
                  <div class="p-4 pt-7 pb-5 ">
                  <Link to={`/course_details/${course._id}`}> <h2 class="text-2xl pl-5 text-gray-900 font-medium title-font mb-4 hover:text-mainColorDark">{course.name}</h2></Link>
                <h4 class="leading-relaxed pl-5  font- text-mainColorDark  text-1xl hover:text-mainColorDark">{course.level}</h4>
                
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

export default Courses;