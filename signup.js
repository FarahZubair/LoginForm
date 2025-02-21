  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCPXurkhEAxABHDHmq1oWkWqbgj9aKZD7U",
    authDomain: "hareeeeeeem-f0dfc.firebaseapp.com",
    projectId: "hareeeeeeem-f0dfc",
    storageBucket: "hareeeeeeem-f0dfc.firebasestorage.app",
    messagingSenderId: "961572178730",
    appId: "1:961572178730:web:cb2ce0fd52f9d27c8dec53",
    measurementId: "G-E67F3LFKMK"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

    const submit = document.getElementById("submit")
submit.addEventListener("click",function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("signed up suscessfully")
    window.location.href="login.html"
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
})
