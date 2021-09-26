import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';

import {
  googleSIgnInHandler,
  initiateLoginFramework,
  facebookSignInHandler,
  
  setJWTToken, 
  signInWithEmailAndPassword
} from "./LogManager";

import { useHistory, useLocation } from "react-router";
import { userContext } from "../../App";
import { Button } from "rsuite";
import Swal from "sweetalert2";


const Login = () => {
  const {handleSubmit} = useForm();
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    photo: ""
  });

  const [loogedInUser, setLoggedInUser] = useContext(userContext);
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  initiateLoginFramework();
  handleSubmit();



  
  const handleResponse = (res, redirect) =>{
    setUser(res);
    setLoggedInUser(res);
    if(redirect){
        history.replace(from);
    }
  }

//   const login = () => {
//     initiateLoginFramework()
//     signInWithEmailAndPassword(email, password)
//         .then(res => {
//           console.log(res);
//             handleResponse(res)
//         })
//         .catch((error) => {
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             alert(errorMessage);
//         });
//         history.replace(from);
// }



  const google = () => {
    googleSIgnInHandler()
    .then((res) => {
if(res){
  alert("sign in")
}
      console.log(res)
      handleResponse(res, true);
    });
  };

  const facebook = () => {
    facebookSignInHandler().then((res) => {
      handleResponse(res, true);
    });
  };

  return (
  
      <div className="pt-56 flex justify-center m-2 ">
         {/* <form onSubmit={handleSubmit(login)} id="fromel" class=" py-10 ">  
         <div class="p-2 w-1/2">
                      <div class="relative">
                        <input 
                       
                        class="shadow w-full bg-gray-100 bg-opacity-50 rounded border border-mainColorLight focus:border-mainColorLight focus:bg-white focus:ring-2 focus:ring-mainColorDark text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
                        type="email" 
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                         required/> 
                       
                      </div>
                    </div>

                    <div class="p-2 w-1/2">
                      <div class="relative">
                        <input 
                       
                        class="shadow w-full bg-gray-100 bg-opacity-50 rounded border border-mainColorLight focus:border-mainColorLight focus:bg-white focus:ring-2 focus:ring-mainColorDark text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
                        type="password" 
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                         required/> 
                       
                      </div>
                    </div>

                    <div class="p-2 w-full">
                    <input
                    
                        class="bg-mainColorDark px-8 py-2 rounded-md text-white text-lg font-semibold"
                        type="submit" />
                        
                    </div>
         </form> */}
         {/* <SignUp/> */}
        <div class="flex justify-center  md:w-1/3 pt-20 pb-20 rounded-tl-xl rounded-br-xl shadow-xl">
        <div class="pr-8 border-r-2 pt-12">
         <h2 class="md:text-2xl pl-3 font-bold text-mainColorDark">SIGN IN</h2>
        </div>
      <div className="pl-8">
        <div className=" mb-4 hover:bg-white  p-2  rounded-lg shadow-md px-8">
          <Button  className=" bold text-lg text-darkColor" onClick={google}>Continue with 
           <i class='bx bxl-google text-green-700 text-xl pulse pl-2 underline'></i>
          </Button>
        </div>
       
        <div className="hover:bg-white p-2 rounded-lg shadow-md px-8">
          <Button className="bold text-lg text-darkColor"onClick={facebook}>Continue with
          <i class='bx bxl-facebook text-blue-900 text-xl pulse pl-2 underline'></i>
          </Button>
        </div>
       </div>
        </div>
      </div>
    
  );
};

export default Login;
