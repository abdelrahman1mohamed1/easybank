const liBtn = document.getElementById('menuBtn');
const liBtnChild = document.querySelector('#menuBtn i');
const ulArea = document.querySelector('.area');

liBtn.addEventListener('click', () => {
    ulArea.classList.toggle('left-0');
    ulArea.classList.toggle('shadow');
    ulArea.classList.toggle('left-[-100%]');
    liBtnChild.classList.toggle('bx-x');
});
