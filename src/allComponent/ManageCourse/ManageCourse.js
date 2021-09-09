import React, { useEffect, useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import DatePicker from 'react-date-picker';
import {useForm} from 'react-hook-form'
import TimePicker from 'react-time-picker';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';


const ManageCourse = () => {

  const { reset } = useForm();

  const [allCourse, setAllCourse] = useState([]);
  const [allTeacher, setAllteacher] = useState([]);
  //For Modal...
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
const{handleSubmit} = useForm();
  //For data...
  const [info, setInfo] = useState({});
  const [file, setFile] = useState(null);
  const [selectedDate, setSelectedDate] = useState({
    openDate: new Date(),
    nextDate: new Date()
  });
  const [fromTime, handleFromTimeChange] = useState("12:00");
  const [toTime, handleToTimeChange] = useState("12:00");


 
  
  const handleBlur =e =>{
        const newInfo = {...info};
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
  
  const handleFormSubmit = (data,e) =>{ 
     const formData = new FormData();
    
    formData.append('file', file);
    formData.append('name', info.name);
    formData.append('totalDay', info.totalDay);
    formData.append('price', info.price);
    formData.append('introduction', info.Introduction);
     formData.append("openDate",selectedDate.openDate);
     formData.append("nextDate",selectedDate.nextDate);
     formData.append("from",fromTime);
     formData.append("to",toTime);
     formData.append('address', info.address);
     formData.append('level', info.level);
    formData.append('days', info.days);
    formData.append('teacher', info.teacher);
     
   
    fetch('http://localhost:9000/add_course', {
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
      'New course added successfully !',
      '',
      'success'
    );
    //e.target.reset()

  }

  //For Table data
  useEffect(()=>{
    fetch(`http://localhost:9000/get_all_course`)
    .then(res => res.json())
    .then(data => {
        setAllCourse(data);
    })
    },[])

    //For get teacher info
    useEffect(()=>{
      fetch(`http://localhost:9000/get_all_teacher`)
      .then(res => res.json())
      .then(data => {
          setAllteacher(data);
      })
      },[allTeacher])
  

    const deleteCourse=(id)=>{
      fetch(`http://localhost:9000/get_all_course/${id}`,{
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
              const remainCourse = allCourse.filter(course=> course._id !==id);
              setAllCourse(remainCourse);
            }
          }) 
         
          
                     
        }     
      })
    }

    return (    
   <div>        
	 
   <div class="md:pt-28 md:pl-28 md:pb-6">
      <button class="bg-mainColorLight  px-4 p-1 rounded-md text-mainColorDark text-md shadow-md font-semibold md:ml-mlm" onClick={onOpenModal}><i class='bx bx-plus font-bold pr-2'></i>Add course</button>
      <Modal open={open} onClose={onCloseModal} center>
      
      <form onSubmit={handleSubmit(handleFormSubmit)} id="fromel" class=" py-10 ">         
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
                         required/> 
                       
                      </div>
                    </div>
                    

                     <div class="p-2 w-1/2 " >
                      <div class="relative ">  
                        <input 
                    
                        onChange={handleFileChange}
                         type="file"                      
                         class="shadow w-full    bg-gray-100 bg-opacity-50 rounded border border-mainColorLight focus:border-mainColorLight focus:bg-white focus:ring-2 focus:ring-mainColorDark text-base outline-none text-gray-700 py-1 px-4 leading-8 transition-colors duration-200 ease-in-out"
                        required/> 
                       
                      </div>
                    </div> 


                    <div class="p-2 w-full">
                      <div class="relative">
                        <textarea 
                        onBlur={handleBlur}
                        placeholder="Introduction to the class"
                        name="Introduction" 
                        class="shadow w-full bg-gray-100 bg-opacity-50 rounded border border-mainColorLight focus:border-mainColorLight focus:bg-white focus:ring-2 focus:ring-mainColorDark h-32 text-base outline-none text-gray-700 py-1 px-4 resize-none leading-6 transition-colors duration-200 ease-in-out"
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
                         required/> 
                       
                      </div>
                    </div>

                    <div class="p-2 w-1/2">
                      <div class="relative">
                        <input 
                        onBlur={handleBlur}
                        class="shadow w-full bg-gray-100 bg-opacity-50 rounded border border-mainColorLight focus:border-mainColorLight focus:bg-white focus:ring-2 focus:ring-mainColorDark text-base outline-none text-gray-700 py-1 px-4 leading-8 transition-colors duration-200 ease-in-out"
                        type="number" 
                        name="price" 
                        placeholder="price"
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

                    <div class="pt-8 pl-3 w-2/2">
                      <div class="relative border-dotted  border-2">
                      <select  
                      onBlur={handleBlur}
                      name="teacher"

                      >
                      <option value="">Select a teacher...</option>
                     {
                       
                       allTeacher.map(value => (
                       
                        <option key = {value._id} value={value.name} >{value.name} </option>
                       
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
      </Modal>
    </div>
   
    

    <div class=" md:bg-gray-305 md:p-4 md:mx-16 md:rounded-lg ">
      <table class="min-w-sm mx-auto md:min-w-lg table-fixed whitespace-nowrap">
        <thead class="justify-between ">
          <tr class="bg-gray2">
            <th class="px-2 py-2  ">
              <span class="text-gray-300 text-sm">Image</span>
            </th>
            <th class="px-2 py-2 ">
              <span class="text-gray-300 text-sm">Course Name</span>
            </th>
            <th class="px-2 py-2 ">
              <span class="text-gray-300 text-sm">Introduction</span>
            </th>
            <th class="px-2 py-2 ">
              <span class="text-gray-300 text-sm">From</span>
            </th>

            <th class="px-2 py-2 ">
              <span class="text-gray-300 text-sm">To</span>
            </th>

            <th class="px-2 py-2 ">
              <span class="text-gray-300 text-sm">Address</span>
            </th>

            <th class="px-2 py-2 ">
              <span class="text-gray-300 text-sm ">Total Week</span>
            </th>

            <th class="px-2 py-2 ">
              <span class="text-gray-300 text-sm">Days</span>
            </th>

            <th class="px-2 py-2 ">
              <span class="text-gray-300 text-sm">Price</span>
            </th>

            <th class="px-2 py-2 ">
              <span class="text-gray-300 text-sm">Open</span>
            </th>

            <th class="px-2 py-2 ">
              <span class="text-gray-300 text-sm">Next</span>
            </th>
            <th class="px-2 py-2 ">
              <span class="text-gray-300 text-sm">Teacher</span>
            </th>
           
            <th class="px-2 py-2 ">
              <span class="text-gray-300 text-sm">Action</span>
            </th>
          </tr>
        </thead>
              {
                allCourse.map(courseInfo=>{
                 return <tbody class="bg-gray-200 ">
          <tr class="bg-white border-b-2 border-mainColorLight">
            <td class="px-2 py-2 flex flex-row items-center">
              <img
                class="h-8 w-8 rounded-full object-cover "
                src={`data:image/png;base64,${courseInfo.image.img}`}
                alt=""
              />
            </td>
            <td>
              <span class="text-center ml-2 font-semibold">{courseInfo.name} </span>
            </td>
            <td class="px-3 py-2 ">
            <div class="w-64 bg-gray-200 m-2 truncate">
            <span>{courseInfo.introduction}</span>
            </div>
            </td>
            <td class="px-3 py-2 ">
              <span>{courseInfo.from}</span>
            </td>
            <td class="px-3 py-2">
              <span>{courseInfo.to}</span>
            </td>
            <td class="px-3 py-2">
              <span>{courseInfo.address}</span>
            </td>
            <td class="px-3 py-2">
              <span>{courseInfo.totalDay}</span>
            </td>
            <td class="px-3 py-2">
              <span>{courseInfo.days}</span>
            </td>
            
            <td class="px-2 py-2">
              <span>{courseInfo.price}</span>
            </td>
            <td class="px-2 py-2">
              <span>{new Date(courseInfo.openDate).toLocaleDateString()}</span>
            </td>
            <td class="px-2 py-2">
              <span>{new Date(courseInfo.nextDate).toLocaleDateString()}</span>
            </td>
            <td class="px-2 py-2">
              <span>{courseInfo.teacher}</span>
            </td>
            <td class="px-2 py-2">
            <Link to={`/edit_course/${courseInfo._id}`}class="text-2xl text-mainColorDark pr-3"><i class='bx bxs-edit ' ></i></Link>
              <button class="text-2xl text-red-500" onClick={()=> deleteCourse(courseInfo._id)}><i class='bx bx-trash'></i></button>
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

export default ManageCourse;