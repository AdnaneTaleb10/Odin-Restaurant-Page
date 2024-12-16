import "./styles.css";
import home from "./home";
import menu from "./menu";
import about from "./about";


const loadHome = document.querySelector('#home');
const loadMenu = document.querySelector('#menu');
const loadAbout = document.querySelector('#about');
const main = document.querySelector('#content');
const maindiv = document.querySelector('#main-page');

loadHome.addEventListener('click', () => {
    maindiv.innerHTML = '';
    loadMenu.classList.remove('active');
    loadHome.classList.add('active');
    loadAbout.classList.add('active');
    home();
})

loadMenu.addEventListener('click', () => {
    maindiv.innerHTML = '';
    loadHome.classList.remove('active');
    loadMenu.classList.add('active');
    menu();
})

loadAbout.addEventListener('click', () => {
    maindiv.innerHTML = '';
    loadAbout.classList.add('active');
    loadMenu.classList.remove('active');
    loadHome.classList.remove('active');
    about()
})

loadHome.classList.add('active');
loadMenu.classList.remove('active');
loadAbout.classList.remove('active');
home();