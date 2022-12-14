import * as functions from "./modules/functions.js";

functions.isWebp();

// import Swiper, { Navigation, Pagination } from 'swiper';

// const swiper = new Swiper();

const madeBtn = document.querySelectorAll('.made__button');
const madeWrapper = document.querySelectorAll('.made__wrapper');

madeBtn.forEach(btn=>{
    btn.addEventListener('click', (e)=>{
        madeWrapper.forEach(wrapper=>{
            wrapper.classList.remove('active')
        })
        madeBtn.forEach(button=>{
            button.classList.remove('active')
        })
        const target = btn.getAttribute("data-target")
        btn.classList.add('active')
        madeWrapper.forEach(maderapper=>{
            const answer = document.querySelector(`#${target}`)
            answer.classList.add('active')
        })
    })
})