import firebase from 'firebase';
import 'firebase/firestore';

if(!firebase.apps.length){
    firebase.initializeApp({
        apiKey: "IzaSyCm_Wyvn9Ul1YVZh1_uM84ouDUWTID16gk",
        authDomain: "next-crud-bd0e1.firebaseapp.com",
        projectId: "next-crud-bd0e1",
    })
}

export default firebase