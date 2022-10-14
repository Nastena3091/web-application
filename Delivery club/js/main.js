const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener('click',toggleModal);
close.addEventListener('click',toggleModal);

function toggleModal(){
    modal.classList.toggle("is-open");
}

new WOW().init();

///day1

const buttonAuth = document.querySelector(".button-auth");
const modalAuth = document.querySelector(".modal-auth");
const closeAuth = document.querySelector(".close-auth");
const logInForm = document.querySelector("#logInForm");
const loginInput = document.querySelector("#login");
const passwordInput = document.querySelector("#password");
const userName = document.querySelector(".user-name");
const buttonOut = document.querySelector(".button-out");

let login = localStorage.getItem('gloDelivery');
function toogleModalAuth() {
    modalAuth.classList.toggle("is-open");
    if (modalAuth.classList.contains("is-open")) {
        disabledScroll();
      } else {
        enableScroll();
      }
      loginInput.style.borderColor = "";
      passwordInput.style.borderColor = "";
}


function autorized () {
    function logOut(){
        login = null;
        localStorage.removeItem('gloDelivery');
        userName.textContent = login;

        buttonAuth.style.display = '';
        userName.style.display = '';
        buttonOut.style.display = '';

        buttonOut.removeEventListener('click', logOut);

        checkAuth();
    }

    userName.textContent = login;
    cartButton.style.display = '';
    buttonAuth.style.display = "none";
    userName.style.display = "block";
    buttonOut.style.display = "block";

    buttonOut.addEventListener('click', logOut);
}
function notAutorized () {
    function logIn (event) {
        event.preventDefault();
        if (loginInput.value && passwordInput.value) {
            login = loginInput.value;
            localStorage.setItem("gloDelivery", login);
            toogleModalAuth();
            buttonAuth.removeEventListener("click", toogleModalAuth);
            closeAuth.removeEventListener("click", toogleModalAuth);
            logInForm.removeEventListener("submit", logIn);
            logInForm.reset();
            checkAuth();
        } else if (loginInput.value && !passwordInput.value) {
            loginInput.style.borderColor = "";
            passwordInput.style.borderColor = "#ff0000";
            passwordInput.value = "";
        } else if (!loginInput.value && passwordInput.value) {
            passwordInput.style.borderColor = "";
            loginInput.style.borderColor = "#ff0000";
            loginInput.value = "";
        } else {
            loginInput.style.borderColor = "#ff0000";
            loginInput.value = "";
            passwordInput.style.borderColor = "#ff0000";
            passwordInput.value = "";
        }
    }
    buttonOut.style.display = "none";
    cartButton.style.display = "none";

    buttonAuth.addEventListener('click', toogleModalAuth);
    closeAuth.addEventListener('click', toogleModalAuth);
    logInForm.addEventListener('submit', logIn);
    modalAuth.addEventListener("click", function (event) {
        if (event.target.classList.contains("is-open")) {
          toogleModalAuth();
        }
      });
}
function checkAuth() {
    if(login){
        autorized();
    } else {
        notAutorized();
    }
}
checkAuth();