const container = document.querySelector(".container");
const signUpBtn = document.querySelector(".sign-up-btns");
const signInBtn = document.querySelector(".sign-in-btns");

signUpBtn.addEventListener('click', () => {
    container.classList.add('active');
});

signInBtn.addEventListener('click', () => {
    container.classList.remove('active');
});