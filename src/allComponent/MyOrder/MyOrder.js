import React, { useContext, useEffect, useState } from 'react';
import { userContext } from "../../App";

const MyOrder = () => {
    const [loogedInUser, setLoggedInUser] = useContext(userContext);
        const [orderlist, setOrderList]= useState([]);
        useEffect(()=>{
            fetch(`https://localhost:3000//get_a_order_by_email?email=${loogedInUser.email}`)
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

        <section class="text-gray-600 body-font pt-4 ">
        <div class="container px-5 py-24 mx-auto"> 
        <div class="flex flex-wrap mr-56 "> 
    
    

         { orderlist.map(order=>{
             return  <div>
                 {order.length<0 ?
                  <h3 class="text-xl font-semibold text-yellow-700 mt-24">You don't have any Registered course </h3> 
                 :
                 <div class="p-4 lg:w-1/2  ">
                 <div class="h-full flex sm:flex-row rounded-lg shadow-shadow1 flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                   <img alt="team" class="flex-shrink-0 rounded  w-48 h-48 object-cover object-center sm:mb-0  m-6 pb-4" src={order.img}/>
                   <div class="flex-grow sm:pl-4">
                     
                     {
                         order.status === "Done" ? 
                         <h2 class="text-gray-300 flex justify-center mb-8 ml-24 bg-green-300 p-1 mr-2 rounded-md">{order.status}</h2>:
                         order.status === "On going" ? 
                         <h2 class="text-gray-300 mb-14 ml-56 bg-yellow-300 p-1 pl-4 rounded-md">{order.status}</h2>:
                         <h2 class="text-gray-300 mb-14 ml-56 bg-gray2 p-1 pl-4 rounded-md">{order.status}</h2>


                     }
                     <h3 class="text-gray-900 mb-8 title-font font-semibold text-2xl text-gray-500">{order.courseName}</h3>                 
                   </div>
                 </div>
               </div>          }
             </div>
         })
     }
   
   
      </div>
      </div>
      </section>

    );
};

export default MyOrder;