const callBtn = document.querySelector(".contacts-call");
const exitBtn = document.querySelector(".popup-close");
const popupBtn = document.querySelector(".popup-btn");

const popup = document.querySelector(".popup");

const popupShow = () => {
    popup.classList.toggle("show");
    document.html.style.position = "relative";
};
const popupHidden = () => {
    popup.classList.toggle("show");
    document.html.style.position = "";
};

const checkbox = document.querySelector("#check");
const textbox = document.querySelector("#number");

const alert = document.querySelector(".alert");

const checkValied = () => {
    const number = textbox.value;
    if (number == "") {
        textbox.value = "+7 ( _ _ _) _ _ - _ _ - _ _"
    }
    if (checkbox.checked && number != "" && number != "+7 ( _ _ _) _ _ - _ _ - _ _") {
        alert.classList.toggle("show");
        alert.classList.toggle("showAlert");
    }

    alert.onanimationend = () => {
        alert.classList.toggle("showAlert");
        alert.classList.toggle("show");
    };
}

callBtn.addEventListener('click', popupShow);
exitBtn.addEventListener('click', popupHidden);
popupBtn.addEventListener('click', checkValied);


const bullets = document.querySelector(".bullets-mobile");
const slickBtn = document.querySelector(".slick-btn");
const slickText = document.querySelector(".slick-text");

const bulletsShow = () => {
    if (!(bullets.classList.contains("show"))) {
        slickText.style.display = "none";
        slickBtn.classList.toggle("pulse")
        bullets.classList.toggle("showBullets");

        bullets.onanimationend = () => {
            bullets.classList.toggle("show");
            bullets.classList.toggle("showBullets");
        };
    } else {
        bullets.classList.toggle("hideBullets");

        bullets.onanimationend = () => {
            bullets.classList.toggle("show");
            bullets.classList.toggle("hideBullets");
            slickText.style.display = "block";
        };
        slickBtn.classList.toggle("pulse")
    }
}

slickBtn.addEventListener('click', bulletsShow);


const navToggle = document.querySelector("#navToggle");
const navToggleHide = document.querySelector("#navToggle-hide");
const burgerMenu = document.querySelector(".burger-menu");

const burgerMenuShow = () => {
    burgerMenu.style.display = "block";
    burgerMenu.classList.toggle("showBurger");
    navToggleHide.removeEventListener("click", burgerMenuHide);

    burgerMenu.onanimationend = () => {
        burgerMenu.classList.toggle("show")
        burgerMenu.classList.toggle("showBurger");
        navToggleHide.addEventListener('click', burgerMenuHide);
    };
}
const burgerMenuHide = () => {
    burgerMenu.classList.toggle("hideBurger");
    navToggle.removeEventListener("click", burgerMenuShow);

    burgerMenu.onanimationend = () => {
        burgerMenu.classList.toggle("show")
        burgerMenu.classList.toggle("hideBurger");
        navToggle.addEventListener('click', burgerMenuShow);
        burgerMenu.style.display = "none";
    };
}

navToggle.addEventListener('click', burgerMenuShow);
navToggleHide.addEventListener('click', burgerMenuHide);