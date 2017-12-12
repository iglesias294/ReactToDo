import firebase from 'firebase';

try {
    var config = {
        apiKey: process.env.API_KEY,
        authDomain: process.env.AUTH_DOMAIN,
        databaseURL: process.env.DATABASE_URL,
        //projectId: "arturo-todo-app",
        storageBucket: process.env.STORAGE_BUCKET,
        //messagingSenderId: "456235371118"
      };

      firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
