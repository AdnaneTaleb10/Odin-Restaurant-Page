import "./styles.css";
import home from "./home";
import menu from "./menu";
import about from "./about";
import footer from "./footer";


const loadHome = document.querySelector('#home');
const loadMenu = document.querySelector('#menu');
const loadAbout = document.querySelector('#about');
const main = document.querySelector('#content');
const maindiv = document.querySelector('#main-page');

loadHome.addEventListener('click', () => {
    maindiv.innerHTML = '';
    loadHome.classList.add('active');
    home();
})

loadMenu.addEventListener('click', () => {
    menu();
})

loadAbout.addEventListener('click', () => {
    about();
})

loadHome.classList.add('active');
home();
footer();