import firebase from 'firebase';

try {
    var config = {
        apiKey: "AIzaSyC6ByurHGUUGMQTicAGA-W7jIfOF-0TnDY",
        authDomain: "arturo-todo-app.firebaseapp.com",
        databaseURL: "https://arturo-todo-app.firebaseio.com",
        projectId: "arturo-todo-app",
        storageBucket: "arturo-todo-app.appspot.com",
        messagingSenderId: "456235371118"
      };

      firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
