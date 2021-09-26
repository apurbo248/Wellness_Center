import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const CourseDetails = () => {
   
    const{_id} = useParams();
    const[courseInfo, setCourseInfo] = useState([]);

    useEffect(()=>{
        fetch(`https://rocky-sea-29087.herokuapp.com/get_a_course/${_id}`)
        .then(res=>res.json())
        .then(data=>{
          setCourseInfo(data); 
                             
        })
        .catch(err=>
            { console.log(err);})
    },[_id])

    return (
        <section class="">
           <div class="container mx-auto flex md:pl-6 pt-20 md:flex-row flex-col items-start md:pl-14 md:pt-28 ">
        <div class="lg:flex-grow md:w-3/5 lg:w-3/5  flex flex-col items-start text-left md:mb-16 md:mb-0 items-start p-6 text-start">
        <h3 class=" text-2xl md:text-4xl mb-6 font-medium text-darkColor md:leading-normal  ">{courseInfo.name}</h3>
       <div class="mb-6">
           <img src="" alt=""/>
           <div>
               <h4 class="font-bold text-lg">Trainer</h4>
               <h6>{courseInfo.teacher}</h6>
           </div>
       </div>
       <div>
       <img class="h-50 rounded w-full  object-center mb-2" src={`data:image/png;base64,${courseInfo.image?.img}`}alt=""/>
       </div> 
       <div class="">
       <h4 class="text-xl font-semibold mt-6 tracking-wide">Introduction to the class</h4>      
            <p class="mt-6 font-semibold text-gray3 tracking-normal text-justify ">
                {courseInfo.introduction}
            </p>
       </div>
        </div>


        <div class=" lg:w-2/5 md:w-2/5 md:mt-mmt2 ">
            <div class="shadow-xl md:p-8 md:m-12 m-6 p-8 rounded-lg ">
            <h2 class="mb-6 text-2xl font-semibold">Class Information</h2>
            <div class="divide-y divide-mainColorLight">
            <div class="flex justify-between  font-semibold text-gray3 tracking-normal pb-4 pt-4">
                <h4><i class='bx bx-file  pr-2 text-mainColorDark'></i> Number of Week</h4>
                <h4> {courseInfo.totalDay}</h4>
            </div>
            <div class="flex justify-between  font-semibold text-gray3 tracking-normal pb-4 pt-4">
                <h4><i class='bx bxs-calendar-check  pr-2 text-mainColorDark'></i> Open</h4>
                <h4> {new Date(courseInfo.openDate).toLocaleDateString()}</h4>
            </div>
            <div class="flex justify-between  font-semibold text-gray3 tracking-normal pb-4 pt-4">
                <h4><i class='bx bxs-calendar  pr-2 text-mainColorDark' ></i> Next</h4>
                <h4> {new Date(courseInfo.nextDate).toLocaleDateString()}</h4>
            </div>
            <div class="flex justify-between  font-semibold text-gray3 tracking-normal pb-4 pt-4">
                <h4><i class='bx bx-check-double  pr-2 text-mainColorDark'></i> Days</h4>
                <h4 class="text-darkColor"> {courseInfo.days}</h4>
            </div>
            <div class="flex justify-between  font-semibold text-gray3 tracking-normal pb-4 pt-4">
                <h4><i class='bx bxs-time pr-2 text-mainColorDark'></i> Time</h4>
                <h4> {courseInfo.from} - {courseInfo.to}</h4>
            </div>
            <div class="flex justify-between  font-semibold text-gray3 tracking-normal pb-4 pt-4">
                <h4><i class='bx bxs-layer pr-2 text-mainColorDark' ></i> Level</h4>
                <h4> {courseInfo.level}</h4>
            </div>
            </div>

            <div class="flex justify-center mt-6 ">
            <Link to={`/course/registration/${courseInfo._id}`}><button class=" flex text-darkColor font-semibold  border-0 py-2 px-14 shadow-shadow1 focus:outline-none hover:bg-mainColorLight rounded md:text-2xl  rounded-lg bg-red-300">Register only ${courseInfo.price}</button></Link>
            </div>
            </div>
            </div>
     </div>
        </section>
    );
};

export default CourseDetails;