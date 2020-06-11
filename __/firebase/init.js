if (typeof firebase === 'undefined') throw new Error('hosting/init-error: Firebase SDK not detected. You must include it before /__/firebase/init.js');
firebase.initializeApp({
  "apiKey": "AIzaSyAvLEAgCJNymIXE7irynEVBcyBi6fzSeWo",
  "appId": "1:804227135440:web:3965c00382b4788b",
  "databaseURL": "https://enactus-thapar.firebaseio.com",
  "storageBucket": "enactus-thapar.appspot.com",
  "authDomain": "enactus-thapar.firebaseapp.com",
  "messagingSenderId": "804227135440",
  "projectId": "enactus-thapar"
});