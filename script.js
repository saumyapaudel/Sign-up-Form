const confirmButton = document.querySelector("button");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector('#confirm-password');
const form = document.querySelector("form");
const msg = document.querySelector(".msg");

confirmButton.addEventListener("click", (event) => {
    event.preventDefault(); 
    if (!form.checkValidity()) {
        msg.innerHTML = "Please fill out the form correctly.";
        msg.style.color = "red";
    } else if (password.value !== confirmPassword.value) {
        msg.innerHTML = "Passwords Don't Match";
        msg.style.color = "red";
    } else {
        msg.innerHTML = "Form Submitted Successfully";
        msg.style.color = "green";
    }
});
