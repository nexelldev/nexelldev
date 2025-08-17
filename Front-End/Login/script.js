const signInBtnLink = document.querySelector('.signInBtn-link');
const signUpBtnLink = document.querySelector('.signUpBtn-link');
const wrapper = document.querySelector('.wrapper');

signUpBtnLink.addEventListener('click', (e) => {
    e.preventDefault();
    wrapper.classList.add('active');
});

signInBtnLink.addEventListener('click', (e) => {
    e.preventDefault();
    wrapper.classList.remove('active');
});
