var firebaseConfig = {
      apiKey: "AIzaSyDccOfFEu_0Gzg-1JK2rkl5_VGxrDX14R8",
      authDomain: "kwitterpage-a6f1e.firebaseapp.com",
      databaseURL: "https://kwitterpage-a6f1e-default-rtdb.firebaseio.com",
      projectId: "kwitterpage-a6f1e",
      storageBucket: "kwitterpage-a6f1e.appspot.com",
      messagingSenderId: "549140752493",
      appId: "1:549140752493:web:7a39ddda59ce028298f764"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();


