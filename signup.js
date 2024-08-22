import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js'
import { auth } from './firebase.js'

const signUpForm = document.querySelector("#signup-form");
const username = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

signUpForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (email.value && password.value) {
        createUserWithEmailAndPassword(auth, email.value, password.value)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user.uid);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorCode, errorMessage);
            });

        username.value = "";
        email.value = "";
        password.value = "";

        my_modal_2.showModal();
    } else {
        my_modal_1.showModal();
    }
})