let createAccBtn = document.getElementById("signup-btn");
let signupDisplay = document.querySelector(".signup-hide");
createAccBtn.addEventListener("click",
    () => {
        if (signupDisplay.style.display === "block") {
            signupDisplay.style.display = "none";
        } else {
            signupDisplay.style.display = "block";
        }
    });