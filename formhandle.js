import {app} from "./index.js";
import { getStorage, ref, uploadBytes } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-storage.js";
import {getFirestore, collection, addDoc} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js";

const storage = getStorage(app);

const firestore = getFirestore();

const call = collection(firestore, 'user');

const myform = document.getElementById('myform');

//console.log(myform);
if(myform) {
    myform.onsubmit = e => {
        e.preventDefault(); // not refresh page
        const formData = new FormData(myform);
        const data = {};
        for(let[key, value] of formData){
            data[key] = value;
        }
        const file = data['profile'];
        const file_name = `${Date.now}-${data['profile']['name']}`;
        const storageRef = ref(storage, file_name);
        uploadBytes(storageRef, file)
            .then(snapshot => {
               delete data['profile']
               data['url'] = file_name;
               addDoc(call, data)
                .then(() => {
                    console.log('Sucssessfully');
                }) 
            })
    }
}