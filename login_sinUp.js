const loginBtn = document.getElementById('login-btn'),
sinupBtn = document.getElementById('sinup-btn'),
btnHoverSpam = document.getElementById('btn-hover-spam'),
createMeIn = document.getElementById('createMeIn'),
registerMeIn = document.getElementById('registerMeIn'),
loginArea = document.querySelector('.loginArea'),
sinupArea = document.querySelector('.sinupArea');

loginBtn.addEventListener('click', loginPage = () =>{
    btnHoverSpam.style.left = '0';
    loginArea.style.left = '0';
    sinupArea.style.left = '800px';
    loginBtn.style.color = 'white';
    sinupBtn.style.color = 'black';
})

sinupBtn.addEventListener('click', sinupPage = () =>{
    btnHoverSpam.style.left = '50%';
    sinupArea.style.left = '0';
    loginArea.style.left = '800px';
    loginBtn.style.color = 'black';
    sinupBtn.style.color = 'white';
})

createMeIn.addEventListener('click', () =>{
    sinupPage();
})

registerMeIn.addEventListener('click', () =>{
    loginPage();
})