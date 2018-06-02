/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

console.log("JS file is loaded!");

  // Initialize Firebase ///////////////
  var config = {
    apiKey: "AIzaSyAdicsEV3qamI6F5aXJc6WRuvAEBHeGWC8",
    authDomain: "barry-firebase-test.firebaseapp.com",
    databaseURL: "https://barry-firebase-test.firebaseio.com",
    projectId: "barry-firebase-test",
    storageBucket: "barry-firebase-test.appspot.com",
    messagingSenderId: "200692124595"
  };
  firebase.initializeApp(config);
/////////////////////////////////////////

// Get html element into JS.
let firebaseGreetElem = document.getElementById("firebase-greeting");
console.log(firebaseGreetElem);

// Reference to key-value pair of "greeting"
let dbGreetingRef = firebase.database().ref("greeting");

// Event listener for changes in value in Firebase db.
dbGreetingRef.on("value", displayFirebaseGreeting);

// Change in value will cause new value to appear. Of course, some other function may be defined to run when value changes.
function displayFirebaseGreeting(dataSnapshot) {
    firebaseGreetElem.textContent = dataSnapshot.val();
}