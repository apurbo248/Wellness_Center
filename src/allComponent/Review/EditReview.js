import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'

const EditReview = () => {
   
    const[review, setReview] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:9999/get_all_review`)
        .then(res => res.json())
        .then(data => {
            setReview(data);           
        })
        },[])
    
    
        //For delete...
        const deleteTeacherInfo=(id)=>{
          fetch(`http://localhost:9999/get_all_review/${id}`,{
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
                  const remainCourse = review.filter(teacher=> teacher._id !==id);
                  setReview(remainCourse);
                }
              })    
            }
         
          })
        }
    
    
    return (
       <div>
            <div class="  md:p-4 md:mx-3 md:rounded-lg md:pt-24">
      <table class="min-w-sm mx-auto md:min-w-lg table-fixed whitespace-nowrap">
        <thead class="justify-between ">
          <tr class="bg-mainColorLight ">
            
            <th class=" py-2 px-2  ">
              <span class="text-sm">Image</span>
            </th>
            <th class=" py-2 px-2 ">
              <span class="text-sm">Name</span>
            </th>
            <th class=" py-2 px-2 ">
              <span class="text-sm">Email</span>
            </th>
            <th class=" py-2 px-2 ">
              <span class="text-sm">Feedback</span>
            </th>

          </tr>
        </thead>
              {
                review.map(reviewInfo=>{
                 return <tbody class="bg-gray-200 ">
          <tr class="bg-white border-b-2 border-mainColorLight">
            <td class=" py-2 px-2 flex flex-row items-center">
              <img
                class="h-8 w-8 rounded-full object-cover "
                src={reviewInfo.image} alt="" />
            </td>
            <td>
              <span class="text-center ml-2 font-semibold">{reviewInfo.name} </span>
            </td>
            <td class=" py-2 px-2 ">         
            <span>{reviewInfo.email}</span>          
            </td>
                 
            <td class=" py-2 px-2">
            <div class="w-64 bg-gray-200 m-2 truncate">
            <span>{reviewInfo.review}</span>
            </div>
            </td>
            <td class=" py-2 px-2">
           
              <button  class="text-2xl text-red-500" onClick={()=> deleteTeacherInfo(reviewInfo._id)}><i class='bx bx-trash'></i></button>
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

export default EditReview;