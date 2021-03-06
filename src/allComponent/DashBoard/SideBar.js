import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { userContext } from '../../App';
import firebase from 'firebase'

const SideBar = () => {
    const [loogedInUser, setLoggedInUser] = useContext(userContext);
    const [isAdmin, setIsAdmin] = useState(false);

   console.log(isAdmin);
    useEffect(() => {
       if(loogedInUser.email){
        fetch('https://localhost:3000//Adminornot', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loogedInUser.email})
        })
            .then(res => res.json())
            .then(data =>{
                setIsAdmin(data);
                console.log(data)
                
                }
            );
       }
    }, [loogedInUser.email])

   
    return (

        
        <div class="">
            <input type="checkbox" id="check"/>
            <label htmlFor="check">     
            <i class='bx bx-menu  text-mainColorDark   md:ml-10 md:pb-4  md:h-16 md:w-16 md:flex md:justify-center md:items-center text-mainColorDark z-40' id="btn"></i>        
            <i class='bx bx-x ' id="cancel"></i>
            </label>

           <div className="sidebarMenu md:pt-20">
                <ul className="sideUnderList">
               
                <Link to="/Explore">
                  <li className="sideList">                    
                      <h5>Explore</h5>
                      </li>
                  </Link>
                { !isAdmin && <div>
                   
                   <Link to="/my_order">
                   <li className="sideList">                    
                       <h5>My Order</h5>
                  </li>
                   </Link>
 
                   <Link to="/review">
                   <li className="sideList">                    
                       <h5>Review</h5>
                  </li>
                  </Link> 
                   </div>
                    }


                 {isAdmin  && <div>                                                        
                 <Link to="/manage_courses">
                 <li className="sideList">                    
                     <h5>Manage Course</h5>
                </li>
                 </Link>

                 <Link to="/manage_teacher">
                 <li className="sideList">                    
                     <h5>Manage Teachers</h5>
                </li>
                 </Link>

                 <Link to="/manage_order">
                 <li className="sideList">                    
                     <h5>Manage Order</h5>
                </li>
                 </Link>

                <Link to="/add_admin">
                 <li className="sideList">                    
                     <h5>Add Admin</h5>
                </li>
                </Link>

                <Link to="/manage_review">
                 <li className="sideList">                    
                     <h5>Manage Review</h5>
                </li>
                </Link>
                </div>}
                
                 <div class="flex mt-64 pl-4">
                 <Link to="/privacy">
                 <li className=" text-sm border-r-2 pr-2 border-mainColorLight hover:no-underline underline">                    
                     <p>Privacy</p>
                </li>
                 </Link>
                 <Link to="/policy">
                 <li className=" text-sm pl-2 hover:no-underline underline">                    
                     <p>Term & Condition</p>
                </li>
                 </Link>
                 </div>
                
                 
             

                 

              
                  
                  
                 
                </ul>
           </div>
        </div>
    
    );
};

export default SideBar;