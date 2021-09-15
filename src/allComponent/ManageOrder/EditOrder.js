import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';

const EditOrder = () => {
    const {_id} = useParams();
    const{handleSubmit} = useForm();
    const [updateOrder, setUpdateOrder] = useState([]); 
    const [info, setInfo] = useState([]);

    const handleBlur =e =>{
        const newInfo = {...info,...updateOrder};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
        console.log(newInfo)
       
  }

  useEffect(()=>{
    fetch(`http://localhost:9999/get_a_order/${_id}`)
    .then(res=>res.json())
    .then(data=>{
      setUpdateOrder(data[0]);
      console.log(data)
        
    })
    .catch(err=>
        { console.log(err); })
},[_id]);

        const onSubmit =data =>{ 
            console.log(data)
        //      const status = info.status;           
          
        //   const updateCourseInfo = {status};
         
        //   console.log(updateCourseInfo);
        //   fetch(`http://localhost:9999/updateStatus/${_id}`, {
        //      method: 'PATCH',
        //      headers:{'Content-Type':'application/json'},
        //      body: JSON.stringify(updateCourseInfo)
        //    })
        //    .then(response => response.json())
        //    .then(data => {
        //    })
        //    .catch(error => {
        //      console.error(error)
        //    })  
        //    Swal.fire(
        //      ' ',
        //      'Course Info updated successfully',
        //      'success'
        //    );
           //history.push("/manage_courses")
           

         }

    return (       
        <div class="pt-24 pl-24">
          <h2> id- {updateOrder._id}</h2>
<form action="" onSubmit={handleSubmit(onSubmit)}>

             <select   
             handleBlur={handleBlur}
            
             name="status"
             class="bg-mainColorLight"
            
             >
                       <option  value={updateOrder.status} >{updateOrder.status}</option>
                       <option  value="Accept" >Accept</option>
                       <option  value="Reject">Reject</option>
                       </select> 
                       <input type="submit"/>
                       </form> 
        </div>
    );
};

export default EditOrder;