import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import DatePicker from 'react-date-picker';
import TimePicker from 'react-time-picker';
import Swal from 'sweetalert2'

const EditCourse = () => {
    const {_id} = useParams();
    const history = useHistory();
    const [updateCourse, setUpdateCourse] = useState([]);
    const [allTeacher, setAllteacher] = useState([]);
   
    const [selectedDate, setSelectedDate] = useState({
        openDate: new Date(),
        nextDate: new Date()
      });
      const [fromTime, handleFromTimeChange] = useState("12:00");
      const [toTime, handleToTimeChange] = useState("12:00");
    
    
    //For Modal...
    const{handleSubmit,reset} = useForm();
    
  //For data...
    const [upi, setInfo] = useState({});
    const [File, setFile] = useState(null);
   

    const handleBlur =e =>{
          const newInfo = {...updateCourse,...upi};
          newInfo[e.target.name] = e.target.value;
          setInfo(newInfo);
          console.log(newInfo)
         
    }
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
        console.log(newFile);
      }
  
    const handleOpenDateChange = (date) => {
      const newDate = {...selectedDate}  
      newDate.openDate = date 
      setSelectedDate(newDate);
      console.log(newDate)
    }  
  
    const handlenextDateChange = (date) => {
      const newDate = {...selectedDate}  
      newDate.nextDate = date 
      setSelectedDate(newDate);
      console.log(newDate)
  }  
    
    

      useEffect(()=>{
        fetch(`https://localhost:3000//get_a_course/${_id}`)
        .then(res=>res.json())
        .then(data=>{
          setUpdateCourse(data);
          console.log(data)
            
        })
        .catch(err=>
            { console.log(err); })
    },[_id])

    useEffect(()=>{
        fetch(`https://localhost:3000//get_all_teacher`)
        .then(res => res.json())
        .then(data => {
            setAllteacher(data);
            
        })
        },[allTeacher])
    
    const onSubmit =data =>{ 
    
       // const file = req.files.file;
        const name = upi.name;
        const totalDay = upi.totalDay;
        const days = upi.days;
        const address = upi.address;
        const introduction = upi.introduction;
        const level = upi.level;
        const openDate = selectedDate.openDate;
        const nextDate = selectedDate.nextDate;
        const from = fromTime;
        const to = toTime;
        const teacher = upi.teacher;
     
     const updateCourseInfo = {_id,name,totalDay,days,address,introduction ,openDate, nextDate,from,to,level,teacher};
    
     console.log(updateCourseInfo);
     fetch(`https://localhost:3000//update/${_id}`, {
        method: 'PATCH',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(updateCourseInfo)
      })
      .then(response => response.json())
      .then(data => {
      })
      .catch(error => {
        console.error(error)
      })  
      Swal.fire(
        ' ',
        'Course Info updated successfully',
        'success'
      );
      history.push("/manage_courses")
      
    // data.target.reset();
    }
  

    
    
    return (
        <div class="md:pt-20 md:pl-28 md:pb-4">
            <form onSubmit={handleSubmit(onSubmit)} id="fromel" class=" py-10 ">         
           <div class="text-gray-600 body-font relative">
              <div class="">
                <div class="lg:w-2/2 md:w-2/3 mx-auto">
                  <div class="flex flex-wrap ">
                    
                    <div class="p-2 w-1/2">
                      <div class="relative">
                        <input 
                        onBlur={handleBlur}
                        class="shadow w-full bg-gray-100 bg-opacity-50 rounded border border-mainColorLight focus:border-mainColorLight focus:bg-white focus:ring-2 focus:ring-mainColorDark text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
                        type="text" 
                        name="name" 
                        placeholder="Course name"
                        defaultValue={updateCourse.name}
                         required/> 
                       
                      </div>
                    </div>
                    

                     {/* <div class="p-2 w-1/2 " >
                      <div class="relative ">  
                        <input 
                    
                        onChange={handleFileChange}
                         type="file"                      
                         class="shadow w-full    bg-gray-100 bg-opacity-50 rounded border border-mainColorLight focus:border-mainColorLight focus:bg-white focus:ring-2 focus:ring-mainColorDark text-base outline-none text-gray-700 py-1 px-4 leading-8 transition-colors duration-200 ease-in-out"
                        required/> 
                       
                      </div>
                    </div> 
 */}

                    <div class="p-2 w-full">
                      <div class="relative">
                        <textarea 
                        onBlur={handleBlur}
                        placeholder="Introduction to the class"
                        name="introduction" 
                        class="shadow w-full bg-gray-100 bg-opacity-50 rounded border border-mainColorLight focus:border-mainColorLight focus:bg-white focus:ring-2 focus:ring-mainColorDark h-32 text-base outline-none text-gray-700 py-1 px-4 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        defaultValue={updateCourse.introduction}
                       required/> 
                        
                      </div>
                    </div> 

                    <div class="p-2 w-1/2">
                      <div class="relative">
                        <input 
                        onBlur={handleBlur}
                        class="shadow w-full bg-gray-100 bg-opacity-50 rounded border border-mainColorLight focus:border-mainColorLight focus:bg-white focus:ring-2 focus:ring-mainColorDark text-base outline-none text-gray-700 py-1 px-4 leading-8 transition-colors duration-200 ease-in-out"
                        type="text" 
                        name="address" 
                        placeholder="address"
                        defaultValue={updateCourse.address}
                         required/> 
                       
                      </div>
                    </div>

                    <div class="p-2 w-1/2">
                      <div class="relative">
                        <input 
                        onBlur={handleBlur}
                        class="shadow w-full bg-gray-100 bg-opacity-50 rounded border border-mainColorLight focus:border-mainColorLight focus:bg-white focus:ring-2 focus:ring-mainColorDark text-base outline-none text-gray-700 py-1 px-4 leading-8 transition-colors duration-200 ease-in-out"
                        type="number" 
                        name="totalDay" 
                        placeholder="Number of Week"
                        defaultValue={updateCourse.totalDay}
                         required/> 
                       
                      </div>
                    </div>

                   
                     <div class="p-2 w-1/2">
                      <div class="relative">
                        <input 
                        onBlur={handleBlur}
                        class="shadow w-full bg-gray-100 bg-opacity-50 rounded border border-mainColorLight focus:border-mainColorLight focus:bg-white focus:ring-2 focus:ring-mainColorDark text-base outline-none text-gray-700 py-1 px-4 leading-8 transition-colors duration-200 ease-in-out"
                        type="text" 
                        name="days" 
                        placeholder="Days"
                        defaultValue={updateCourse.days}
                         required/> 
                       
                      </div>
                    </div>

                    <div class="p-2 w-1/2">
                      <div class="relative">
                        <input 
                        onBlur={handleBlur}
                        class="shadow w-full bg-gray-100 bg-opacity-50 rounded border border-mainColorLight focus:border-mainColorLight focus:bg-white focus:ring-2 focus:ring-mainColorDark text-base outline-none text-gray-700 py-1 px-4 leading-8 transition-colors duration-200 ease-in-out"
                        type="text" 
                        name="level" 
                        placeholder="Level"
                        defaultValue={updateCourse.level}
                         required/> 
                       
                      </div>
                    </div>

                    <div class="p-2 w-1/2">
                      <div class="relative">
                        <label htmlFor="">Open</label> <br/>
                        <DatePicker                     
                          onChange={handleOpenDateChange}
                          value={selectedDate.openDate}
                        />
                      </div>
                    </div>

                      <div class="p-2 w-1/2">
                      <div class="relative">
                      <label htmlFor="">Next</label> <br/>
                        <DatePicker                  
                        onChange={handlenextDateChange}
                        value={selectedDate.nextDate}
                        />
                       </div>
                    </div>

                      <div class="p-2 w-1/2">
                      <div class="relative">
                      <label htmlFor="">From</label> <br/>
                      <TimePicker
                      value={fromTime} 
                      onChange={handleFromTimeChange} />
                     </div>
                    </div>

                    <div class="p-2 w-1/2">
                      <div class="relative">
                      <label htmlFor="">To</label> <br/>
                      <TimePicker
                       value={toTime} 
                      onChange={handleToTimeChange} />
                     </div>
                    </div>

                    <div class="p-2 w-1/2">
                      <div class="relative">
                      <label htmlFor="">Assign a teacher</label> <br/>
                      <select  
                      onBlur={handleBlur}
                      name="teacher">
                     {
                       allTeacher.map(value => (
                        <option key = {value._id} value={value.name}>{value.name}</option>
                       ))
                     }
                       </select>
                     </div>
                    </div>

                   

                    <div class="p-2 w-full">
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
    );
};

export default EditCourse;