import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import { Button } from 'rsuite';
import Swal from 'sweetalert2';
import EditOrder from './EditOrder';

const OrderList = () => {

    const [allOrder, setAllOrder] = useState([]);
  
    useEffect(()=>{
        fetch(`http://localhost:9000/get_all_order`)
        .then(res => res.json())
        .then(data => {
            setAllOrder(data);
            
        })
        },[])

             

    return (
        <div class="pt-24">
            <div class="">
                <h3 class="bg-mainColorDark py-2 flex justify-center text-2xl font-semibold text-white ">All Order</h3>
            </div>
            <div class=" md:bg-gray-305 md:p-4 md:mx-3 md:rounded-lg ">
                <table class="min-w-sm mx-auto md:min-w-lg table-fixed whitespace-nowrap">
                    <thead class="justify-between ">
                    <tr class="bg-mainColorLight">
                        
                        <th class=" py-2 px-2  ">
                        <span class="text-sm">Image</span>
                        </th>
                        <th class=" py-2 px-2 ">
                        <span class="text-sm">Course Name</span>
                        </th>
                        <th class=" py-2 px- ">
                        <span class="text-sm">User</span>
                        </th>
                        <th class=" py-2 px-2 ">
                        <span class="text-sm">Email</span>
                        </th>

                        <th class=" py-2 px-2 ">
                        <span class="text-sm ">Payment Method</span>
                        </th>

                        <th class=" py-2 px-2 ">
                        <span class="text-sm">Status</span>
                        </th>

                       
                    </tr>
                    </thead>
                        {
                            allOrder.map(orderInfo=>{
                            return <tbody class="bg-gray-200 ">
                    <tr class="bg-white border-b-2 border-mainColorLight">
                        <td class=" py-2 px-2 flex flex-row items-center">
                        <img
                            class="h-8 w-8 rounded-full object-cover "
                            src={orderInfo.img}
                            alt=""
                        />
                        </td>
                        <td>
                        <span class="text-center ml-2 font-semibold">{orderInfo.courseName} </span>
                        </td>
                        <td class=" py-2 px-4 ">
                    
                        <span>{orderInfo.userName}</span>
                    
                        </td>
                        <td class=" py-2 px-2 ">
                        <span>{orderInfo.email}</span>
                        </td>
                        
                        <td class=" py-2 px-2">
                        <span>{orderInfo.cardType}</span>
                        </td>
                        <td class=" py-2 px-2 ">
                        <Link to={`/edit/${orderInfo._id}`}><span>{orderInfo.status}</span></Link>   
                        </td>  
                        {/* <td class=" py-2 px-2 ">
                        <EditOrder></EditOrder>   
                        </td>                    */}
                    </tr>
                    
                    </tbody>
                            })
                        }
                </table>
                </div> 
        </div>
    );
};

export default OrderList;