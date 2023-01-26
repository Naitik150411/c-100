var firebaseConfig = {
    apiKey: "AIzaSyB8lljaxw5waw0NdLlI6i7qwksBIaZe4-c",
    authDomain: "project-test-67a4b.firebaseapp.com",
    databaseURL: "https://project-test-67a4b-default-rtdb.firebaseio.com",
    projectId: "project-test-67a4b",
    storageBucket: "project-test-67a4b.appspot.com",
    messagingSenderId: "899745919667",
    appId: "1:899745919667:web:275612d28cef47c20276c6"
};
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();