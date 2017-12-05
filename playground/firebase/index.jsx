import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyC6ByurHGUUGMQTicAGA-W7jIfOF-0TnDY",
    authDomain: "arturo-todo-app.firebaseapp.com",
    databaseURL: "https://arturo-todo-app.firebaseio.com",
    projectId: "arturo-todo-app",
    storageBucket: "arturo-todo-app.appspot.com",
    messagingSenderId: "456235371118"
  };
  firebase.initializeApp(config);

  var firebaseRef = firebase.database().ref();

  firebaseRef.set({
      app: {
          name: 'TodoApp',
          version: '1.0.0'
      },
      isRunning: true,
      user: {
          name: 'Andrew',
          age: 25
      }
  })

  var todosRef = firebaseRef.child('todos');

  todosRef.on('child_added', (snapshot) => {
      console.log('New todo added', snapshot.key, snapshot.val());
  });

  todosRef.push({
      text: 'todo 1'
  });

  todosRef.push({
      text: 'todo 1'
  });
  