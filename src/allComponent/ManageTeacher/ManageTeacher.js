import React, { useEffect, useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import {useForm} from 'react-hook-form'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ManageTeacher = () => {
 
 
  const [allTeacher, setAllteacher] = useState([]);
  //For Modal...
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const{handleSubmit,reset} = useForm();
  
//For data...
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);
 
  const handleBlur =e =>{
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
  }

  const handleFileChange = (e) => {
      const newFile = e.target.files[0];
      setFile(newFile);
      console.log(newFile);
    }

  
  const handleFormSubmit = (data,e) =>{ 
    console.log(data);
     const formData = new FormData();
    
    formData.append('file', file);
    formData.append('name', info.name);
    formData.append('email', info.email);
    formData.append('level', info.level);
    formData.append('biography', info.Biography);
    formData.append('phone', info.phone);
    formData.append('facebook', info.facebook);
    formData.append('instagram', info.instagram);
    formData.append('twetter', info.twetter);
     
   
    fetch('https://rocky-sea-29087.herokuapp.com/add_teacher', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {

    })
    .catch(error => {
      console.error(error)
    })  
    Swal.fire(
      'New teacher added successfully!',
      '',
      'success'
    );
  e.target.reset();
  }

  //For Table data
  useEffect(()=>{
    fetch(`https://rocky-sea-29087.herokuapp.com/get_all_teacher`)
    .then(res => res.json())
    .then(data => {
        setAllteacher(data);
        
    })
    },[allTeacher])


    //For delete...
    const deleteTeacherInfo=(id)=>{
      fetch(`https://rocky-sea-29087.herokuapp.com/get_all_teacher/${id}`,{
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
              const remainCourse = allTeacher.filter(teacher=> teacher._id !==id);
              setAllteacher(remainCourse);
            }
          })    
        }
     
      })
    }



    return (    
   <div>        
	 
   <div class="md:pt-28 md:pl-28 md:pb-6">
      <button class="bg-mainColorLight   py-2  rounded-md text-mainColorDark text-lg shadow-md font-semibold" onClick={onOpenModal}><i class='bx bx-plus font-bold pr-2'></i>add teacher</button>
      <Modal class="rounded-lg" open={open} onClose={onCloseModal} center>
      
      <form onSubmit={handleSubmit(handleFormSubmit)} class="  ">         
           <div class="text-gray-600 body-font relative ">
              <div class="">
                <div class="lg:w-2/2 md:w-3/3 md:mx-12 mx-auto">
                  <div class="flex flex-wrap ">
                    
                    
                    <div class="p-2 w-1/2">
                      <div class="relative">
                        <input 
                        onBlur={handleBlur}
                        class="shadow w-full bg-gray-100 bg-opacity-50 rounded border border-mainColorLight focus:border-mainColorLight focus:bg-white focus:ring-2 focus:ring-mainColorDark text-base outline-none text-gray-700 py-2  leading-8 transition-colors duration-200 ease-in-out"
                        type="text" 
                        name="name" 
                        placeholder="Teacher name"
                         required/> 
                       
                      </div>
                    </div>
                    

                   
                     <div class="p-2 w-1/2 " >
                      <div class="relative ">  
                        <input 
                    
                        onChange={handleFileChange}
                         type="file"                      
                         class="shadow w-full    bg-gray-100 bg-opacity-50 rounded border border-mainColorLight focus:border-mainColorLight focus:bg-white focus:ring-2 focus:ring-mainColorDark text-base outline-none text-gray-700 py-1   leading-8 transition-colors duration-200 ease-in-out"
                        required/> 
                       
                      </div>
                    </div> 

                    <div class="p-2 w-1/2">
                      <div class="relative">
                        <input 
                        onBlur={handleBlur}
                        class="shadow w-full bg-gray-100 bg-opacity-50 rounded border border-mainColorLight focus:border-mainColorLight focus:bg-white focus:ring-2 focus:ring-mainColorDark text-base outline-none text-gray-700 py-1  leading-8 transition-colors duration-200 ease-in-out"
                        type="text" 
                        name="email" 
                        placeholder="email"
                         required/> 
                       
                      </div>
                    </div>

                    <div class="p-2 w-1/2">
                      <div class="relative">
                        <input 
                        onBlur={handleBlur}
                        class="shadow w-full bg-gray-100 bg-opacity-50 rounded border border-mainColorLight focus:border-mainColorLight focus:bg-white focus:ring-2 focus:ring-mainColorDark text-base outline-none text-gray-700 py-1  leading-8 transition-colors duration-200 ease-in-out"
                        type="level" 
                        name="level" 
                        placeholder="level"
                         required/> 
                       
                      </div>
                    </div>



                    <div class="p-2 w-full">
                      <div class="relative">
                        <textarea 
                        onBlur={handleBlur}
                        placeholder="Biography"
                        name="Biography" 
                        class="shadow w-full bg-gray-100 bg-opacity-50 rounded border border-mainColorLight focus:border-mainColorLight focus:bg-white focus:ring-2 focus:ring-mainColorDark h-32 text-base outline-none text-gray-700 py-1  resize-none leading-6 transition-colors duration-200 ease-in-out"
                        required /> 
                        
                      </div>
                    </div> 

                    <div class="p-2 w-1/2">
                      <div class="relative">
                        <input 
                        onBlur={handleBlur}
                        class="shadow w-full bg-gray-100 bg-opacity-50 rounded border border-mainColorLight focus:border-mainColorLight focus:bg-white focus:ring-2 focus:ring-mainColorDark text-base outline-none text-gray-700 py-1  leading-8 transition-colors duration-200 ease-in-out"
                        type="number" 
                        name="phone" 
                        placeholder="phone"
                         required/> 
                       
                      </div>
                    </div>
                    
       
                    <div class="p-2 w-1/2">
                      <div class="relative">
                        <input 
                        onBlur={handleBlur}
                        class="shadow w-full bg-gray-100 bg-opacity-50 rounded border border-mainColorLight focus:border-mainColorLight focus:bg-white focus:ring-2 focus:ring-mainColorDark text-base outline-none text-gray-700 py-1  leading-8 transition-colors duration-200 ease-in-out"
                        type="text" 
                        name="facebook" 
                        placeholder="facebook"
                        required /> 
                       
                      </div>
                    </div>

                    <div class="p-2 w-1/2">
                      <div class="relative">
                        <input 
                        onBlur={handleBlur}
                        class="shadow w-full bg-gray-100 bg-opacity-50 rounded border border-mainColorLight focus:border-mainColorLight focus:bg-white focus:ring-2 focus:ring-mainColorDark text-base outline-none text-gray-700 py-1  leading-8 transition-colors duration-200 ease-in-out"
                        type="text" 
                        name="instagram" 
                        placeholder="instagram"
                        required/> 
                       
                      </div>
                    </div>

                    <div class="p-2 w-1/2">
                      <div class="relative">
                        <input 
                        onBlur={handleBlur}
                        class="shadow w-full bg-gray-100 bg-opacity-50 rounded border border-mainColorLight focus:border-mainColorLight focus:bg-white focus:ring-2 focus:ring-mainColorDark text-base outline-none text-gray-700 py-1  leading-8 transition-colors duration-200 ease-in-out"
                        type="text" 
                        name="twetter" 
                        placeholder="twetter"
                        required /> 
                       
                      </div>
                    </div>

                    

                    <div class="pt-8 w-full ">
                    <input
                        class="bg-mainColorDark px-8 py-2 rounded-md text-white text-lg font-semibold"
                        type="submit" />
                    </div>
                  </div>
                </div>
              </div>
            </div>    
          </form>   
      </Modal>
    </div>
   
    <div class=" md:bg-gray-305 md:p-4 md:mx-3 md:rounded-lg ">
      <table class="min-w-sm mx-auto md:min-w-lg table-fixed whitespace-nowrap">
        <thead class="justify-between ">
          <tr class="bg-gray2">
            
            <th class=" py-2 px-2  ">
              <span class="text-sm">Image</span>
            </th>
            <th class=" py-2 px-2 ">
              <span class="text-sm">Teacher Name</span>
            </th>
            <th class=" py-2 px-2 ">
              <span class="text-sm">Email</span>
            </th>
            <th class=" py-2 px-2 ">
              <span class="text-sm">Level</span>
            </th>

            <th class=" py-2 px-2 ">
              <span class="text-sm ">Phone</span>
            </th>

            <th class=" py-2 px-2 ">
              <span class="text-sm">Facebook</span>
            </th>

            <th class=" py-2 px-2 ">
              <span class="text-sm">Instagram</span>
            </th>

            <th class=" py-2 px-2 ">
              <span class="text-sm">twetter</span>
            </th>

            <th class=" py-2 px-2 ">
              <span class="text-sm">Biography</span>
            </th>

            <th class="px- py-2 px-2 ">
              <span class="text-gray-300">Action</span>
            </th>
          </tr>
        </thead>
              {
                allTeacher.map(teacherInfo=>{
                 return <tbody class="bg-gray-200 ">
          <tr class="bg-white border-b-2 border-mainColorLight">
            <td class=" py-2 px-2 flex flex-row items-center">
              <img
                class="h-8 w-8 rounded-full object-cover "
                src={`data:image/png;base64,${teacherInfo.image.img}`}
                alt=""
              />
            </td>
            <td>
              <span class="text-center ml-2 font-semibold">{teacherInfo.name} </span>
            </td>
            <td class=" py-2 px-2 ">
           
            <span>{teacherInfo.email}</span>
           
            </td>
            <td class=" py-2 px-2 ">
              <span>{teacherInfo.level}</span>
            </td>
            
            <td class=" py-2 px-2">
              <span>{teacherInfo.phone}</span>
            </td>
            <td class=" py-2 px-2">
              <span>{teacherInfo.facebook}</span>
            </td>
            <td class=" py-2 px-2">
              <span>{teacherInfo.instagram}</span>
            </td>
            <td class=" py-2 px-2">
              <span>{teacherInfo.twetter}</span>
            </td>
            
            <td class=" py-2 px-2">
            <div class="w-64 bg-gray-200 m-2 truncate">
            <span>{teacherInfo.biography}</span>
            </div>
            </td>
            <td class=" py-2 px-2">
            <Link to={`/edit_teacher/${teacherInfo._id}`} class="text-2xl text-mainColorDark pr-3"><i class='bx bxs-edit ' ></i></Link>
              <button  class="text-2xl text-red-500" onClick={()=> deleteTeacherInfo(teacherInfo._id)}><i class='bx bx-trash'></i></button>
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

export default ManageTeacher;