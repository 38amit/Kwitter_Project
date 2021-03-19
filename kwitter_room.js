
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAHwP30qURQ_aOyAZnXJHXaxmIyfxks0G4",
      authDomain: "kwitter-project-de6e0.firebaseapp.com",
      databaseURL: "https://kwitter-project-de6e0-default-rtdb.firebaseio.com",
      projectId: "kwitter-project-de6e0",
      storageBucket: "kwitter-project-de6e0.appspot.com",
      messagingSenderId: "964563638584",
      appId: "1:964563638584:web:0175147829ef993ffc89cd"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
