import React, { useState } from 'react';
import firebase from 'firebase'
import firebaseConfig from './FirebaseConfig';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';

const SignUp = () => {

    const {handleSubmit} = useForm();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
    const history = useHistory();
    
        const signupForm = (e) => {
           // e.preventDefault();
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    alert('SuccessFully Create Account')
                    history.push('/login')
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorMessage)
                });
        }
    
       
        const handleBlur = (e) => {
            let value = e.target.value;
        }
    
    return (
        <div>
             <form onSubmit={handleSubmit(signupForm)} id="fromel" class=" py-10 ">  
             <div class="p-2 w-1/2">
                      <div class="relative">
                        <input 
                        onBlur={handleBlur}
                        class="shadow w-full bg-gray-100 bg-opacity-50 rounded border border-mainColorLight focus:border-mainColorLight focus:bg-white focus:ring-2 focus:ring-mainColorDark text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
                        type="text" 
                        placeholder="name"
                         required/> 
                       
                      </div>
                    </div>

                    <div class="p-2 w-1/2">
                      <div class="relative">
                        <input 
                        onBlur={handleBlur}
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
                        onBlur={handleBlur}
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
         </form>
        </div>
    );
};

export default SignUp;