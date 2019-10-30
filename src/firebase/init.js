import firebase from "firebase/app";
import firestore from "firebase/firestore";

const Config = {
  apiKey: "AIzaSyBSqrnH0zc8mRqqGvXFz1PeADBuSZXV8LI",
  authDomain: "ninja-smoothies-ed07a.firebaseapp.com",
  databaseURL: "https://ninja-smoothies-ed07a.firebaseio.com",
  projectId: "ninja-smoothies-ed07a",
  storageBucket: "ninja-smoothies-ed07a.appspot.com",
  messagingSenderId: "850515726773",
  appId: "1:850515726773:web:b19cd5850afac30e4e49fc",
  measurementId: "G-6XXKSZXKWG"
};

const firebaseApp = firebase.initializeApp(Config);
// firebaseApp.firestore().settings({timestampsInSnapshots : true});

//export firestore
export default firebaseApp.firestore();
