import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const EditTeacher = () => {
    const {_id} = useParams();
    const history = useHistory();
    const [updateTeacher, setUpdateteacher] = useState([]);
    //For Modal...
    const{handleSubmit,reset} = useForm();
    
  //For data...
    const [upi, setInfo] = useState({});
    const [File, setFile] = useState(null);
   

    const handleBlur =e =>{
          const newInfo = {...updateTeacher,...upi};
          newInfo[e.target.name] = e.target.value;
          setInfo(newInfo);        
    }
  
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
        console.log(newFile);
      }

      useEffect(()=>{
        fetch(`http://localhost:9999/get_a_teacher/${_id}`)
        .then(res=>res.json())
        .then(data=>{
          setUpdateteacher(data);
          console.log(data)
            
        })
        .catch(err=>
            { console.log(err); })
    },[_id])
    
    const onSubmit =data =>{ 
    
       const name = upi.name;
       const email = upi.email;
       const level = upi.level;
       const biography = upi.biography;
       const phone = upi.phone;
       const facebook = upi.facebook;
       const instagram = upi.instagram;
       const twetter = upi.twetter;
      //  const file = File.name;
      
     const updateTeacherInfo = {_id,name,email,level,biography,phone,facebook,instagram,twetter};
    
     console.log(updateTeacherInfo);
     fetch(`http://localhost:9999/update/${_id}`, {
        method: 'PATCH',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(updateTeacherInfo)
      })
      .then(response => response.json())
      .then(data => {
      })
      .catch(error => {
        console.error(error)
      })  
      Swal.fire(
        ' ',
        'Teacher Info updated successfully',
        'success'
      );
      history.push("/manage_teacher")
      
    // data.target.reset();
    }
  

    
    
    return (
        <div class="md:pt-20 md:pl-28 md:pb-4">
            <form onSubmit={handleSubmit(onSubmit)} class="  ">         
           <div class="text-gray-600 body-font relative ">
              <div class="">
                <div class="lg:w-2/2 md:w-2/3  mx-auto bg-gray2 p-6 rounded-lg">
                  <div class="flex flex-wrap ">
                    
                    <div class="p-2 w-1/2">
                      <div class="relative">
                        <input 
                        onBlur={handleBlur}
                        class="shadow w-full bg-gray-100 bg-opacity-50 rounded border border-mainColorLight focus:border-mainColorLight focus:bg-white focus:ring-2 focus:ring-mainColorDark text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
                        type="text" 
                        name="name" 
                        placeholder="Teacher name"
                        defaultValue={updateTeacher.name}
                         required/> 
                       
                      </div>
                    </div>
                    

                   
                     {/* <div class="p-2 w-1/2 " >
                      <div class="relative ">  
                        <input 
                    
                        onChange={handleFileChange}
                         type="file"                      
                         class="shadow w-full    bg-gray-100 bg-opacity-50 rounded border border-mainColorLight focus:border-mainColorLight focus:bg-white focus:ring-2 focus:ring-mainColorDark text-base outline-none text-gray-700 py-1  px-4 leading-8 transition-colors duration-200 ease-in-out"
                        
                        required/> 
                       
                      </div>
                    </div>  */}

                    <div class="p-2 w-1/2">
                      <div class="relative">
                        <input 
                        onBlur={handleBlur}
                        class="shadow w-full bg-gray-100 bg-opacity-50 rounded border border-mainColorLight focus:border-mainColorLight focus:bg-white focus:ring-2 focus:ring-mainColorDark text-base outline-none text-gray-700 py-1 px-4 leading-8 transition-colors duration-200 ease-in-out"
                        type="text" 
                        name="email" 
                        placeholder="email"
                         defaultValue={updateTeacher.email}
                         required/> 
                       
                      </div>
                    </div>

                    <div class="p-2 w-1/2">
                      <div class="relative">
                        <input 
                        onBlur={handleBlur}
                        class="shadow w-full bg-gray-100 bg-opacity-50 rounded border border-mainColorLight focus:border-mainColorLight focus:bg-white focus:ring-2 focus:ring-mainColorDark text-base outline-none text-gray-700 py-1 px-4 leading-8 transition-colors duration-200 ease-in-out"
                        type="level" 
                        name="level" 
                        placeholder="level"
                         defaultValue={updateTeacher.level}
                         required/> 
                       
                      </div>
                    </div>



                    <div class="p-2 w-full">
                      <div class="relative">
                        <textarea 
                        onBlur={handleBlur}
                        placeholder="Biography"
                        name="biography" 
                        class="shadow w-full bg-gray-100 bg-opacity-50 rounded border border-mainColorLight focus:border-mainColorLight focus:bg-white focus:ring-2 focus:ring-mainColorDark h-32 text-base outline-none text-gray-700 py-1 px-4 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        defaultValue={updateTeacher.biography}
                        required /> 
                        
                      </div>
                    </div> 

                    <div class="p-2 w-1/2">
                      <div class="relative">
                        <input 
                        onBlur={handleBlur}
                        class="shadow w-full bg-gray-100 bg-opacity-50 rounded border border-mainColorLight focus:border-mainColorLight focus:bg-white focus:ring-2 focus:ring-mainColorDark text-base outline-none text-gray-700 py-1 px-4 leading-8 transition-colors duration-200 ease-in-out"
                        type="number" 
                        name="phone" 
                        placeholder="phone"
                         defaultValue={updateTeacher.phone}
                         required/> 
                       
                      </div>
                    </div>
                    
       
                    <div class="p-2 w-1/2">
                      <div class="relative">
                        <input 
                        onBlur={handleBlur}
                        class="shadow w-full bg-gray-100 bg-opacity-50 rounded border border-mainColorLight focus:border-mainColorLight focus:bg-white focus:ring-2 focus:ring-mainColorDark text-base outline-none text-gray-700 py-1 px-4 leading-8 transition-colors duration-200 ease-in-out"
                        type="text" 
                        name="facebook" 
                        placeholder="facebook"
                        defaultValue={updateTeacher.facebook}
                        required /> 
                       
                      </div>
                    </div>

                    <div class="p-2 w-1/2">
                      <div class="relative">
                        <input 
                        onBlur={handleBlur}
                        class="shadow w-full bg-gray-100 bg-opacity-50 rounded border border-mainColorLight focus:border-mainColorLight focus:bg-white focus:ring-2 focus:ring-mainColorDark text-base outline-none text-gray-700 py-1 px-4 leading-8 transition-colors duration-200 ease-in-out"
                        type="text" 
                        name="instagram" 
                        placeholder="instagram"
                        defaultValue={updateTeacher.instagram}
                        required/> 
                       
                      </div>
                    </div>

                    <div class="p-2 w-1/2">
                      <div class="relative">
                        <input 
                        onBlur={handleBlur}
                        class="shadow w-full bg-gray-100 bg-opacity-50 rounded border border-mainColorLight focus:border-mainColorLight focus:bg-white focus:ring-2 focus:ring-mainColorDark text-base outline-none text-gray-700 py-1 px-4 leading-8 transition-colors duration-200 ease-in-out"
                        type="text" 
                        name="twetter" 
                        placeholder="twetter"
                        defaultValue={updateTeacher.twetter}
                        required /> 
                       
                      </div>
                    </div>


                    <div class="p-4 w-full ">
                   <button
                        class="bg-mainColorDark px-8 py-2 rounded-md text-white text-lg font-semibold"
                        type="submit">update</button>
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>    
          </form>   
    </div>
    );
};

export default EditTeacher;