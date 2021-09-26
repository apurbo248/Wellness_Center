import React, { useContext, useState } from 'react';
import firebase from 'firebase'
import { userContext } from '../../App';
import Login from '../Manager/Login';
import { Link } from 'react-router-dom';

//import 'bootstrap/dist/css/bootstrap.min.css';
const TopBar = () => {

  const [loogedInUser, setLoggedInUser] = useContext(userContext);
   const isSignedIn = loogedInUser.isSignedIn;
   console.log("sign = "+isSignedIn)
   
   const [isOpen, setIsOpen] = useState(false);

   const toggle = () => setIsOpen(!isOpen);
    
   



    return (
      <section class="text-gray-600 body-font fixed w-full z-40 bg-gray shadow-md">
  <div class="container px-5 py-5 mx-auto flex items-center md:flex-row flex-col">
    <div class="flex flex-col md:pl-14 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">

    <Link to="/Explore"> <h1 class="md:text-2xl text-2xl  font-medium title-font text-gray-900">WellnessCenter</h1></Link>
    </div>
    
      
      {isSignedIn ?

     <div class="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 ">
      <span class="bg-gray-100 inline-flex py-3 px- rounded-lg items-center hover:bg-gray-200 focus:outline-none">
        <span class="ml-4 flex items-start flex-col leading-none">
          <span class="text-md text-gray-600 mb-1  ml-8 rounded-lg">{loogedInUser.name}</span>        
        </span>
      </span>
      <button class="bg-gray-100 inline-flex  pl-5 mb-2 rounded-lg items-center  focus:outline-none">
        
       
          <span onClick={()=>setLoggedInUser({})} class="title-font font-medium ">Sign out</span>
   
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "rgba(0, 0, 0, 1)"}}><path d="M16 13v-2H7V8l-5 4 5 4v-3z"></path><path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"></path></svg>
      </button>
      </div> 
      :
      <div class="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 ">
      <button class="bg-gray-100 inline-flex py-3 pl-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
       
      <span class="ml-4 flex items-start flex-col leading-none">
      <Link to="/login"> <span class="title-font font-medium">Log in</span></Link>
      </span>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill:"rgba(0, 0, 0, 1)"}}><path d="m13 16 5-4-5-4v3H4v2h9z"></path><path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"></path></svg>
    </button> 
    </div>
}
    </div>

</section>
      //  <header class="text bg-gray body-font shadow-md fixed w-full   z-40">
      //   <div class="container mx-auto flex flex-wrap p-5 flex-row md:flex-row items-center">
      //     <a class="flex title-font font-medium items-center text-gray-900  md:pt-2">
      //       <Link to="/Explore"><span class="md:ml-14 mr-20 ml-8 text-xl">WellnessCenter</span></Link>
      //     </a>
          
      
      //     {isSignedIn ?
          
      //     <div >
      //     <span class="inline-flex items-center bg-blue-50 border-0 md:py-1 md:px-3 focus:outline-none hover:bg-gray-200 rounded text-base md:mt-2 md:ml-tml">
      //      {loogedInUser.name} 
      //      </span>
      //      <span
      //      onClick={()=>setLoggedInUser({})}
      //       class="inline-flex items-center bg-gray-100 border-0 md:py-1 md:px-3 focus:outline-none hover:bg-gray-200 rounded text-base md:mt-2 md:ml-tml">
      //          Signout
      //          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "rgba(0, 0, 0, 1)"}}><path d="M16 13v-2H7V8l-5 4 5 4v-3z"></path><path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"></path></svg>
      //     </span>
           
      //   </div> 
      //     :
      //      <div>

      //       <button class="inline-flex items-center bg-gray-100 border-0 md:py-1 md:px-3 focus:outline-none hover:bg-gray-200 rounded text-base md:mt-2 md:ml-tml">
      //     <Link to="/login">Login  </Link>
      //     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill:"rgba(0, 0, 0, 1)"}}><path d="m13 16 5-4-5-4v3H4v2h9z"></path><path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"></path></svg>
      //     </button>
      //     </div> 
      //     }
        
      //   </div>
      // </header>
    
    );
};

export default TopBar;