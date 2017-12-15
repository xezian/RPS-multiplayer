// Initialize Firebase
var config = {
apiKey: "AIzaSyDpDOV-903isNON5RTg2IGeJ7dGNOXEGo4",
authDomain: "rps-multiplayer-cf4a9.firebaseapp.com",
databaseURL: "https://rps-multiplayer-cf4a9.firebaseio.com",
projectId: "rps-multiplayer-cf4a9",
storageBucket: "",
messagingSenderId: "879126783477"
};
firebase.initializeApp(config);
var database = firebase.database();



database.ref().on("value", function(snapshot) {
    console.log(snapshot.val());
});