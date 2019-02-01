import firebase from "firebase";

const config = {
	apiKey: "AIzaSyDLk-VpYA8hEbR8RpkP4yGIm6FEdJSjxHA",
	authDomain: "novatics-quotes.firebaseapp.com",
	databaseURL: "https://novatics-quotes.firebaseio.com",
	projectId: "novatics-quotes",
	storageBucket: "novatics-quotes.appspot.com",
	messagingSenderId: "43394834730"
};

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
