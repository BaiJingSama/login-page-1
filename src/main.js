const container = document.querySelector('.container')
const btn_login = document.querySelector('.btn-login')

console.log(container);
console.log(btn_login);

btn_login.addEventListener('click', function () {
    container.classList.add('success')
})