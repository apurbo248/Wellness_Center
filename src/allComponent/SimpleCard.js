
import React, { useContext, useEffect, useState } from 'react';
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
import { useHistory, useParams } from 'react-router';
import Swal from 'sweetalert2';
import { userContext } from '../App';

const SimpleCard = () => {
  const{_id} = useParams();
  const history = useHistory();
  const[courseInfo, setCourseInfo] = useState([]);
  const stripe = useStripe();
  const elements = useElements();
  const [loogedInUser, setLoggedInUser] = useContext(userContext);
  useEffect(()=>{
    fetch(`https://localhost:3000//get_a_course/${_id}`)
    .then(res=>res.json())
    .then(data=>{
      setCourseInfo(data); 
      console.log(data)                    
    })
    .catch(err=>
        { console.log(err);})
},[_id])


  const handleSubmit = async (event) => {
    
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
     
    });

    if (error) {
      elements.getElement("card").focus();
      return;
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }
    const makeOrder = {
      userName :loogedInUser.name,
      email:loogedInUser.email,
      phone :loogedInUser.phone,
      courseName:courseInfo.name,
      image:`data:image/png;base64,${courseInfo.image.img}`,
      cardType:paymentMethod.card.brand
    }

    fetch('https://localhost:3000//order',{
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(makeOrder)
        },[])
        .then(success=>{
            if(success){
              Swal.fire(
                'Payment done successfully !',
                '',
                'success'
              );
             

            }
            history.push("/Explore")
        })
    console.log(makeOrder)
  };

  return (
    <form onSubmit={handleSubmit}>
                   <div class="pb-4 w-2/2">
                      <div class="relative">
                        <input                       
                        class="p-1 shadow w-full bg-gray-100 bg-opacity-50 rounded border border-mainColorLight focus:bg-white focus:ring-2 focus:ring-mainColorDark  outline-none text-gray3 py-1  leading-8 transition-colors duration-200 ease-in-out"
                        type="text" 
                        name="name" 
                        placeholder="Name"
                        value={loogedInUser.name}
                        required/> 
                       
                      </div>
                    </div>       
                    <div class="pb- w-2/2  mb-4">
                      <div class="relative">
                        <input                       
                        class="p-1 shadow w-full bg-gray-100 bg-opacity-50 rounded border border-mainColorLight focus:bg-white focus:ring-2 focus:ring-mainColorDark  outline-none text-gray3 py-1  leading-8 transition-colors duration-200 ease-in-out"
                        type="text" 
                        name="iemail" 
                        placeholder="Email"
                        value={loogedInUser.email}/> 
                       
                      </div>
                    </div>  
                    <span class="text-red-700 text-sm pb-4">*4242 4242 4242 4242</span>                 
      <CardElement  />

     <div class="flex justify-center">
     <button class="mt-6 bg-mainColorDark md:px-28 px-16 py-2 font-semibold md:text-xl text-white rounded-lg " type="submit" disabled={!stripe}>
      Pay ${courseInfo.price}
      </button>
     </div>
    </form>
  );
};
 export default SimpleCard;