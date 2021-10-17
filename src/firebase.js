import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyBVi0pMS1IntNLMFHO5q4iXRSYIo9Qhnbg',
	authDomain: 'linkedin-clone-5fd63.firebaseapp.com',
	projectId: 'linkedin-clone-5fd63',
	storageBucket: 'linkedin-clone-5fd63.appspot.com',
	messagingSenderId: '1049745741086',
	appId: '1:1049745741086:web:15f304c5e9e416bb70650f',
	measurementId: 'G-4RJHQCCRW7'
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
