import React, { useEffect, useState } from 'react';
import { Button } from 'rsuite';
import Swal from 'sweetalert2';


const OrderList = () => {

    const [allOrder, setAllOrder] = useState([]);
    const [orders, setOrders] = useState([]);

    useEffect(()=>{
        fetch(`https://rocky-sea-29087.herokuapp.com/get_all_order`)
        .then(res => res.json())
        .then(data => {
            setAllOrder(data);           
        })
        },[])


        const handleStatusChange = (id, status) => {
            let modifiedOrders = [];
            allOrder.forEach(order => {
                if (order._id === id) {
                    order.status = status;
                }
                modifiedOrders.push(order)
            })
            setOrders(modifiedOrders);
    
            const modifiedStatus = { id, status }
            console.log(modifiedStatus)
    
           fetch(`https://rocky-sea-29087.herokuapp.com/updateStatus/${id}`, {
            method: 'PATCH',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(modifiedStatus)
          })
          .then(response => response.json())
          .then(success => {
            if(success){
               
            }
          })
          .catch(error => {
            Swal.fire(
                '',
                'Order Status not updated',
                'error'
              );
          }) 
          Swal.fire(
            '',
            'Order Status updated successfully',
            'success'
          ); 
        }
             

        const deleteOrder=(id)=>{
            fetch(`https://rocky-sea-29087.herokuapp.com/get_all_order/${id}`,{
              method: 'DELETE'
            })
            .then(res=> res.text())
            .then(data=>{
              
              if(data){
                Swal.fire({
                  title: 'Are you sure?',
                  text: "You won't be able to revert this!",
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                  if (result.isConfirmed) {
                    const remainCourse = allOrder.filter(order=> order._id !==id);
                    setAllOrder(remainCourse);
                  }
                }) 
               
                
                           
              }     
            })
          }

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
                           
                        <select class="" defaultValue={orderInfo.status}  onChange={e => handleStatusChange(orderInfo._id, e.target.value)}>
                            <option className="bg-white text-muted">Pending</option>
                            <option className="bg-white text-muted">On going</option>
                             <option className="bg-white text-muted">Done</option>
                        </select> 
                        </td> 
                        <td>
                        <button  class="text-2xl text-red-500" onClick={()=> deleteOrder(orderInfo._id)}><i class='bx bx-trash'></i></button>
                        </td>
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