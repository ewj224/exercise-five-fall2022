const express = require("express");
// const { appendFileSync } = require("fs");
const firebase = require("firebase/app");
const app = express();
// Setting port
const port = process.env.PORT || 4000;

// Your web app's Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDppdg-rDlqB-F1IaBk7ZAHX_9HN-F_3j4",
  authDomain: "exercise-five-22.firebaseapp.com",
  projectId: "exercise-five-22",
  storageBucket: "exercise-five-22.appspot.com",
  messagingSenderId: "337824676584",
  appId: "1:337824676584:web:c45f050214a6ea3286a75d"
};

firebase.initializeApp(firebaseConfig);

const indexRoute = require('./routes/index.js');
const singlePostRoute = require('./routes/singlePost');
const createPostRoute = require('./routes/createPost');

app.use('/', indexRoute);
app.use('/post/', singlePostRoute);
app.use('/create', createPostRoute);

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })