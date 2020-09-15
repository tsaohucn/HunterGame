import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDxGNM6oNelELdNusP5IYUelyQbRzIly_g",
  authDomain: "huntergame-tsaohucn.firebaseapp.com",
  databaseURL: "https://huntergame-tsaohucn.firebaseio.com",
  projectId: "huntergame-tsaohucn",
  storageBucket: "huntergame-tsaohucn.appspot.com",
  messagingSenderId: "971164212948",
  appId: "1:971164212948:web:f3a03efdaccc1ed4"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
