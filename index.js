
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
  import {getFirestore, collection, getDocs, getDoc, doc, addDoc, updateDoc, deleteDoc} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAnYB-yj2fnizdYkNt96y6qatMgxFd2LQ0",
    authDomain: "authontication-3c70f.firebaseapp.com",
    projectId: "authontication-3c70f",
    storageBucket: "authontication-3c70f.appspot.com",
    messagingSenderId: "881253601159",
    appId: "1:881253601159:web:500e23c5e4cdf7e9d84d22"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);

  const db = getFirestore();

  const commentRef = collection(db, 'comments');

  //get comment
  const read_comment = () => {
      const comment = []
      getDocs(commentRef)
        .then((snapshot) => {
            snapshot.docs.forEach((doc) => {
                comment.push({id:doc.id, ...doc.data()})
            })
        })
        .catch((err) =>{
            console.log('====================================');
            console.log(err.message);
            console.log('====================================');
        })
        console.log('====================================');
        console.log(comment);
        console.log('====================================');
  }

  const readOne = (id) => {
      const docRef = doc(db, 'comments', id);
      const comment = {}
      getDoc(docRef)
        .then((doc => {
            console.log('====================================');
            console.log({doc:id, ...doc.data()});
            console.log('====================================');
        }))
  }

  //readOne('jvKx9x4RMukON4d887ld');

  const createOne = ({name, email, body}) => {
    //const comment = {name, email, body};
    addDoc(commentRef, {name, email, body})
        .then(() => {
            console.log('====================================');
            console.log('successfully insertion');
            console.log('====================================');
        })
  }

//  createOne()

const updateOne = (obj) => {
    const docRef = doc(db, 'comments', obj.id);
    delete obj['id'];
  
    updateDoc(docRef, obj)
        .then(() => {
            console.log('====================================');
            console.log("successfully insertion");
            console.log('====================================');
        })
}



// updateOne({
//     "id" : 'AyAPnwEKrlpzryDHYEfR',
//     'body': 'changed'
// })

const deleteOne = (id) => {
    const docRef  = doc(db, 'comments', id);
    deleteDoc(docRef, id)
        .then(() => {
            console.log('====================================');
            console.log('sucessfully deleted');
            console.log('====================================');
        })
}

//deleteOne('yqjApHibONJcldtNQAvI');

// const getMap = async() => {
//     const response = await fetch()
//     const posts = await response.json('https://jsonplaceholder.typicode.com/posts?userId=1 '); //array

//     // for loop
//     for(post of posts){
//         for (let[key, value] of Object.entries(post)){
//             console.log('====================================');
//             console.log(key,value);
//             console.log('====================================');
//         }
//     }

//     //forEach
//     posts.forEach(post => {
//         console.log('====================================');
//         console.log(post);
//         Object.values(post);
//         Object.keys(post);
//         console.log('====================================');
//     })

// }