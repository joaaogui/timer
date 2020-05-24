const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
const admin = require('firebase-admin');
admin.initializeApp();

const timerRef = admin.firestore().collection('timer');

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

exports.resetTimer = functions.https.onCall((data, context) => {
  console.log("################################################################################")

  const snap = timerRef.doc('0pIjI4F5JUT6Hqqxy1VZ').update({time: 5155})

//
//  setTimeout(function(){
//    console.log("Boom!");
//  }, 2000);

  return 'bora bora'
})
