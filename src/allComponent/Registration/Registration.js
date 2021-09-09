import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import SimpleCard from '../SimpleCard';
import { Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
const Registration = () => {
    
    const stripePromise = loadStripe('pk_test_51IeKjbKEpvv2MRIRgOxUc9fD5S2266VpauzM59KB0wlzgqcncDMwEQQ0WilW0g8dY8q9lY72krWAyHcXm7QJM2I500wDS3WABE');
    const{_id} = useParams();
    const[courseInfo, setCourseInfo] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:9000/get_a_course/${_id}`)
        .then(res=>res.json())
        .then(data=>{
          setCourseInfo(data); 
                           
        })
        .catch(err=>
            { console.log(err);})
    },[_id])


    return (
        <section class="">
            <h3 class="text-2xl font-semibold md:text-4xl  text-darkColor md:pt-24 md:pl-28">Payment...</h3>
        <div class="container mx-auto flex pl-6  md:flex-row flex-col items-center md:pl-14 ">
        
        <div class=" lg:w-2/5 md:w-2/5 ">
            <div class="shadow-xl p-8 m-12">

            <div className="pt-3">
            <Elements stripe={stripePromise}>
            <SimpleCard></SimpleCard>
            </Elements>
             </div>
            </div>
            </div>
            

            <div class=" lg:w-2/5 md:w-2/5 ">
            <div class="shadow-xl p-12 m-12">
            <h2 class="pt-4 text-2xl font-semibold border-b pb-4 border-mainColorDark mb-8">&#128151;  {courseInfo.name}</h2>
            <div class="divide-y divide-mainColorLight">
            <div class="flex justify-between  font-semibold text-gray3 tracking-normal pb-4 pt-4">
                <h4><i class='bx bx-file  pr-2 text-mainColorDark'></i> Number of Week</h4>
                <h4> {courseInfo.totalDay}</h4>
            </div>
            <div class="flex justify-between  font-semibold text-gray3 tracking-normal pb-4 pt-4">
                <h4><i class='bx bxs-calendar-check  pr-2 text-mainColorDark'></i> Start</h4>
                <h4> {new Date(courseInfo.openDate).toLocaleDateString()}</h4>
            </div>
            <div class="flex justify-between  font-semibold text-gray3 tracking-normal pb-4 pt-4">
                <h4><i class='bx bxs-time pr-2 text-mainColorDark'></i> Time</h4>
                <h4> {courseInfo.from} - {courseInfo.to}</h4>
            </div>         
            </div>
            </div>
            </div>
        </div>
     </section>
    );
};

export default Registration;