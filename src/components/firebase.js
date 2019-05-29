import firebase from 'firebase'

var firebaseConfig = {
    apiKey: `${process.env.REACT_APP_apiKey}`,
    authDomain: "know-your-yoga.firebaseapp.com",
    databaseURL: "https://know-your-yoga.firebaseio.com",
    projectId: "know-your-yoga",
    storageBucket: "know-your-yoga.appspot.com",
    messagingSenderId: "486022085251",
    appId: "1:486022085251:web:50d00f21694e95a1"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;