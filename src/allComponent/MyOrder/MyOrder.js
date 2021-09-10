import React, { useContext, useEffect, useState } from 'react';
import { userContext } from "../../App";

const MyOrder = () => {
    const [loogedInUser, setLoggedInUser] = useContext(userContext);
        const [orderlist, setOrderList]= useState([]);
        useEffect(()=>{
            fetch(`https://rocky-sea-29087.herokuapp.com/get_a_order_by_email?email=${loogedInUser.email}`)
            .then(res=>res.json())
            .then(data=>{
            console.log(data)
                setOrderList(data);  
            })
            .catch(err=>
                {
                    console.log(err);
                })
        },[loogedInUser.email])


    return (

        <section class="text-gray-600 body-font pt-4">
        <div class="container px-5 py-24 mx-auto"> 
        <div class="flex flex-wrap mx-12 "> 
     {
         orderlist.map(order=>{
             return  <div class="p-4 lg:w-1/2  ">
                 <div class="h-full flex sm:flex-row shadow-shadow1 flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                   <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={order.img}/>
                   <div class="flex-grow sm:pl-8">
                     <h2 class="text-gray-300 mb-14 ml-56 bg-gray2 p-1 pl-4 rounded-md">{order.status}</h2>
                     <h3 class="text-gray-900 mb-14 title-font font-medium text-2xl text-gray-500">{order.courseName}</h3>                 
                   </div>
                 </div>
               </div>          
         })
     }
      </div>
      </div>
      </section>

    );
};

export default MyOrder;