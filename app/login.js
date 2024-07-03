import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

// Firebase configuration for admin
const adminFirebaseConfig = {
    apiKey: "AIzaSyA-9_37Pd3IJR7MaqCFctG79sQlWfQMSHI",
    authDomain: "data-5d61a.firebaseapp.com",
    projectId: "data-5d61a",
    storageBucket: "data-5d61a.appspot.com",
    messagingSenderId: "462325403183",
    appId: "1:462325403183:web:c38d878accddab628cc0da"
};

// Firebase configuration for student
const studentFirebaseConfig = {
    apiKey: "AIzaSyBMnCS7-zIQz_9xK83dL_6oUd0I1Ws02a4",
    authDomain: "students-a7ada.firebaseapp.com",
    databaseURL: "https://students-a7ada-default-rtdb.firebaseio.com",
    projectId: "students-a7ada",
    storageBucket: "students-a7ada.appspot.com",
    messagingSenderId: "753595620059",
    appId: "1:753595620059:web:85b3923f0102162e708afe"
};

const adminApp = initializeApp(adminFirebaseConfig);
const studentApp = initializeApp(studentFirebaseConfig, "student");

const submit = document.getElementById('submit');
submit.addEventListener("click", function(e) {
    e.preventDefault();

    const email = document.getElementById('Email').value;
    const password = document.getElementById('Password').value;
    const userType = document.getElementById('UserType').value; // Get selected user type

    let auth;
    if (userType === 'admin') {
        auth = getAuth(adminApp);
    } else if (userType === 'student') {
        auth = getAuth(studentApp);
    }

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            if (userType === 'admin') {
                alert("Admin login successful");
                window.location.href = "home_main.html"; // Redirect to admin page
            } else if (userType === 'student') {
                alert("Student login successful");
                window.location.href = "st_home.html"; // Redirect to student page
            }
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
        });
});