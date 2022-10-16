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

const cardsRestaurants = document.querySelector(".cards");
const containerPromo = document.querySelector(".container-promo");
const restaraunts = document.querySelector(".restaraunt");
const menu = document.querySelector(".menu");
const logo = document.querySelector(".logo");
const cardsMenu = document.querySelector(".cards-menu");

let login = localStorage.getItem("gloDelivery");

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

function autorized() {
  function logOut() {
    login = null;
    localStorage.removeItem("gloDelivery");
    userName.textContent = login;

    buttonAuth.style.display = "";
    userName.style.display = "";
    buttonOut.style.display = "";

    buttonOut.removeEventListener("click", logOut);

    checkAuth();
  }

  userName.textContent = login;
  cartButton.style.display = "";
  buttonAuth.style.display = "none";
  userName.style.display = "block";
  buttonOut.style.display = "block";

  buttonOut.addEventListener("click", logOut);
}
function notAutorized() {
  function logIn(event) {
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

  buttonAuth.addEventListener("click", toogleModalAuth);
  closeAuth.addEventListener("click", toogleModalAuth);
  logInForm.addEventListener("submit", logIn);
  modalAuth.addEventListener("click", function (event) {
    if (event.target.classList.contains("is-open")) {
      toogleModalAuth();
    }
  });
}
function checkAuth() {
  if (login) {
    autorized();
  } else {
    notAutorized();
  }
}

function createCardRestaurant() {
  const card = `
  <a
    class="card wow animate__animated animate__fadeInUp"
    data-wow-delay="0.6s"
  >
    <img src="img/card3.png" alt="card" class="card-image" />
    <div class="card-text">
      <div class="card-heading">
        <h3 class="card-title">Prosto Pizza</h3>
        <span class="card-tag tag">35 хв</span>
      </div>
      <div class="card-info">
        <div class="rating">
          <img src="img/star.svg" alt="rating" class="rating-star" />
          4.7
        </div>
        <div class="price">від 110 грн</div>
        <div class="category">Піцца</div>
      </div>
    </div>
  </a>
  `;

  cardsRestaurants.insertAdjacentHTML("beforeend", card);
}

function createCardGood() {
  const card = document.createElement("div");
  card.className = "card wow animate__animated animate__fadeInUp";
  card.setAttribute("data-wow-delay", "0.2s");

  card.addParametr;

  card.insertAdjacentHTML(
    "beforeend",
    `
  <img src="img/card1.jpg" alt="card" class="card-image" />
  <div class="card-text">
    <div class="card-heading">
      <h3 class="card-title card-title-reg">Байрактар</h3>
    </div>
    <div class="card-info">
      <div class="ingredietns">
        Баварські ковбаски, томати, соевий соус, сир мацарелла, базилік
      </div>
    </div>
    <div class="card-buttons">
      <button class="button button-primary">
        <span class="button-card-text">В кошик</span>
        <img
          src="img/store.svg"
          alt="shopping-cart"
          class="card-button-image"
        />
      </button>
      <strong class="card-price-bold">110 грн</strong>
    </div>
  </div>
  `
  );
  cardsMenu.insertAdjacentElement("beforeend", card);
}

function openGoods(event) {
  const target = event.target;

  const restaraunt = target.closest(".card");
  if (restaraunt) {
    cardsMenu.textContent = "";

    containerPromo.classList.add("hide");
    restaraunts.classList.add("hide");
    menu.classList.remove("hide");

    createCardGood();
    createCardGood();
    createCardGood();
    createCardGood();
    createCardGood();
    createCardGood();
  }
}

cardsRestaurants.addEventListener("click", function (event) {
  if (!login) {
    toogleModalAuth();
  } else {
    openGoods(event);
  }
});

logo.addEventListener("click", function () {
  containerPromo.classList.remove("hide");
  restaraunts.classList.remove("hide");
  menu.classList.add("hide");
});

cartButton.addEventListener("click", toggleModal);

close.addEventListener("click", toggleModal);

checkAuth();

createCardRestaurant();
createCardRestaurant();
createCardRestaurant();
createCardRestaurant();
createCardRestaurant();
createCardRestaurant();
