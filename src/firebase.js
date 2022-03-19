import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD6BPU1rEV2mxBLJZhd1HDOjDjGIuDp-Kw",
    authDomain: "you-are-here-podcast.firebaseapp.com",
    projectId: "you-are-here-podcast",
    storageBucket: "you-are-here-podcast.appspot.com",
    messagingSenderId: "457830222568",
    appId: "1:457830222568:web:de2b4cf2ec4f2fb7b0175d",
    measurementId: "G-54P46YT2M8"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };