import firebase from 'firebase'
import firebaseConfig from './FirebaseConfig';
import jwt_decode from "jwt-decode";
import { useState } from 'react';
 
export  const initiateLoginFramework = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
}


// export const createUserWithEmailAndPassword = (name, email, password) => {
//   return firebase
//       .auth()
//       .createUserWithEmailAndPassword(email, password)
//       .then(res => {
//           updateUserName(name);
//           return handleResponse(res);
//       })
// }



// const updateUserName = name => {
//   const user = firebase.auth().currentUser;
//   user.updateProfile({
//       displayName: name
//   })
// }



// export const setJWTToken = () => {
//   return firebase
//       .auth().currentUser
//       .getIdToken(true)
//       .then(idToken => {
//           localStorage.setItem('token', idToken)
//       })
// }



// export const getDecodedUser = () => {
//   const token = localStorage.getItem('token');
//   if (!token) {
//       return {};
//   }
//   const { name, picture, email } = jwt_decode(token);
  
//   const decodedUser = {
//       isSignedIn: true,
//       name: name,
//       email: email,
//       photo: picture || "https://i.ibb.co/7CzR0Dg/users.jpg"
//   }
//   return decodedUser;
// }


// const handleResponse = (res) => {
//   const { displayName, photoURL, email } = res.user;
//   const signedInUser = {
//       isSignedIn: true,
//       name: displayName,
//       email: email,
//       photo: photoURL
//   } 
//   return signedInUser;
// }



// export const signInWithEmailAndPassword = (email, password) => {
//   return firebase
//       .auth()
//       .signInWithEmailAndPassword(email, password)
//       .then(res => {
//         const {displayName, photoURL, email } = res.user;
//         const signedInUser = {
//           isSignedIn: true,
//           name: displayName,
//           email: email,
//           photo: photoURL,
          
//         };
//         return signedInUser;
//       })
// }



export const googleSIgnInHandler= ()=> {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then(res =>{
      const {displayName, photoURL, email } = res.user;
      const signedInUser = {
        isSignedIn: true,
        name: displayName,
        email: email,
        photo: photoURL,
        
      };
      return signedInUser;
    })
        .catch((error) => {
            console.log(error);
            console.log(error.message);
          });
}



export const facebookSignInHandler = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    return firebase
    .auth()
    .signInWithPopup(fbProvider)
    .then((res) => {
      const {displayName, photoURL, email } = res.user;
      const signedInUser = {
        isSignedIn: true,
        name: displayName,
        email: email,
        photo: photoURL,
        
      };
      return signedInUser;
    })
    .catch((error) => {
      console.log(error.message);
    });
  };
