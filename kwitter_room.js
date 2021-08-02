var firebaseConfig = {
      apiKey: "AIzaSyANh2jYtlzeLV00YkT-mwHeIHoqq4dKMFw",
      authDomain: "chat-app-77958.firebaseapp.com",
      databaseURL: "https://chat-app-77958.firebaseio.com",
      projectId: "chat-app-77958",
      storageBucket: "chat-app-77958.appspot.com",
      messagingSenderId: "724230511335",
      appId: "1:724230511335:web:03239c86edfa7f42c46042",
      measurementId: "G-QK7F914S2S"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    chat = localStorage.getItem("username");
    document.getElementById("welcome").innerHTML = "WELCOME "+ chat + " !!" ;

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function logout() {
      window.location = "index.html" ;
}