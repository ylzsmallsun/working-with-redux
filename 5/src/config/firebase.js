import firebase from 'firebase';
// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyC5kq1z62TiKnFJu-4Wm0akR8tLqWpiouo",
    authDomain: "notepad-4dbc2.firebaseapp.com",
    databaseURL: "https://notepad-4dbc2.firebaseio.com",
    projectId: "notepad-4dbc2",
    storageBucket: "notepad-4dbc2.appspot.com",
    messagingSenderId: "909505690107"
};
firebase.initializeApp(firebaseConfig);

const databaseRef = firebase.database().ref();
const notesRef = databaseRef.child("notes");

export default notesRef;