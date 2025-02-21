// Import the functions you need from the SDKs you need
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

// Firebase configuration
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
const auth = getAuth(app);

// document.addEventListener("DOMContentLoaded", () => {
    const submit = document.getElementById("submit");

    submit.addEventListener("click", function(event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // User successfully logged in
                alert("Login successful! Redirecting...");
                window.location.href = "succes.html"; // ✅ Redirect to succes.html
            })
            .catch((error) => {
                // Handle login errors
                alert(error.message);
            });
    }); 
