import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";


import {
  googleSIgnInHandler,
  initiateLoginFramework,
  facebookSignInHandler
} from "./LogManager";

import { useHistory, useLocation } from "react-router";
import { userContext } from "../../App";
import { Button } from "rsuite";

const Login = () => {
  const {  handleSubmit } = useForm();
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    photo: ""
  });

  const [loogedInUser, setLoggedInUser] = useContext(userContext);

  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  initiateLoginFramework();
  handleSubmit();
  const handleResponse = (res, redirect) => {
    console.log(res)
    setUser(res);
    setLoggedInUser(res);
    if (redirect) {
      history.replace(from);
    }
  };
  const google = () => {
    googleSIgnInHandler().then((res) => {
      handleResponse(res, true);
    });
  };

  const facebook = () => {
    facebookSignInHandler().then((res) => {
      handleResponse(res, true);
    });
  };

  return (
  
      <div className="pt-56 flex justify-center ">
        
        <div class="flex justify-center  bg-mainColorLight md:w-1/3 pt-20 pb-20 rounded-tl-xl rounded-br-xl shadow-lg">
        <div class="pr-8 border-r-2 pt-12">
         <h2 class="text-2xl font-bold text-mainColorDark">SIGN IN</h2>
        </div>
      <div className="pl-8">
        <div className=" mb-4 hover:bg-white  p-2  rounded-lg shadow-lg px-8">
          <Button  className=" bold text-lg text-darkColor" onClick={google}>Continue with 
           <i class='bx bxl-google text-green-700 text-xl pulse pl-2 underline'></i>
          </Button>
        </div>
       
        <div className="hover:bg-white p-2 rounded-lg shadow-lg px-8">
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
