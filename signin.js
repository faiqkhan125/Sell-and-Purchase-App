import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js'
import { auth } from './firebase.js'

const signIn = document.querySelector("#sign-in");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

signIn.addEventListener("submit", (event) => {
    event.preventDefault();
    if (email.value && password.value) {
        signInWithEmailAndPassword(auth, email.value, password.value)
            .then((userCredential) => {
                window.open("home.html");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorCode, errorMessage);
            });

        email.value = "";
        password.value = "";
    } else {
        my_modal_1.showModal();
    }
})