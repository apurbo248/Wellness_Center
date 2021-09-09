import React, { useContext, useEffect, useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import {useForm} from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { userContext } from '../../App';

const MakeAdmin = () => {
 
    const history = useHistory();
  const [loogedInUser, setLoggedInUser] = useContext(userContext);
  const{handleSubmit,reset} = useForm();
  
//For data...
  const [info, setInfo] = useState({});
 
  const handleBlur =e =>{
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
  }

 
  
  const handleFormSubmit = (data,e) =>{ 
      const email={
          email:info.email
      }
    fetch('http://localhost:9000/admin',{
        method: 'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(email)
    },[])
    .then(success=>{
        if(success){
          Swal.fire(
            'Thank you very much for your feedback...',
            '',
            'success'
          );
        }    
       // history.push("/Explore")    
    })
e.target.reset()
};

    return (    
   <div>        
	 
   <div class="md:pt-28 md:px-64 md:pb-6">
     <div><h3 class="text-3xl font-semibold pb-8 pl-14">Give a review...</h3></div>
      <form onSubmit={handleSubmit(handleFormSubmit)} class="  ">         
           <div class="text-gray-600 body-font relative ">
              <div class="">
                <div class="lg:w-2/2 md:w-3/3 md:mx-12 mx-auto">
                  <div class="flex flex-wrap ">
                    
                   


                    <div class="p-2 w-full">
                      <div class="relative">
                        <input 
                        onBlur={handleBlur}
                        type="email"
                        placeholder="Give a MakeAdmin..."
                        name="email" 
                        class="p-2 shadow w-full bg-gray-100 bg-opacity-50 rounded border border-mainColorLight focus:border-mainColorLight focus:bg-white focus:ring-2 focus:ring-mainColorDark  text-base outline-none text-gray-700 py-1  resize-none leading-6 transition-colors duration-200 ease-in-out"
                        required /> 
                        
                      </div>
                    </div> 

                   <div class="pt-8 w-full  pl-4">
                    <input
                        class="bg-mainColorDark px-8 py-2 rounded-md text-white text-lg font-semibold"
                        type="submit" />
                    </div>
                  </div>
                </div>
              </div>
            </div>    
          </form>  
           
    </div> 
</div>
     
        
    );
};

export default MakeAdmin;