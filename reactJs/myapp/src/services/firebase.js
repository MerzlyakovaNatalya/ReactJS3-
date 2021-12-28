import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDTBA7hv9c064cc7JIKJWJxnaJoO-EdaKo",
  authDomain: "iron-burner-265712.firebaseapp.com",
  databaseURL: "https://iron-burner-265712-default-rtdb.firebaseio.com",
  projectId: "iron-burner-265712",
  storageBucket: "iron-burner-265712.appspot.com",
  messagingSenderId: "481179213014",
  appId: "1:481179213014:web:7ed45c7601e26c37c9fd77",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const db = firebase.database();

export const rootRef = db.ref("root");

export const chatsRef = rootRef.child("chats");

export const messagesRef = rootRef.child("messages");