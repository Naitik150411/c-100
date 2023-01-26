// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyB8lljaxw5waw0NdLlI6i7qwksBIaZe4-c",
    authDomain: "project-test-67a4b.firebaseapp.com",
    databaseURL: "https://project-test-67a4b-default-rtdb.firebaseio.com",
    projectId: "project-test-67a4b",
    storageBucket: "project-test-67a4b.appspot.com",
    messagingSenderId: "899745919667",
    appId: "1:899745919667:web:275612d28cef47c20276c6"
  };
  

  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



