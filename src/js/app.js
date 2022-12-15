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

const introButtons = document.querySelectorAll('.intro__a');
const introContainer = document.querySelector('.intro__list');
const introContent = document.querySelector('.intro__content');
introButtons.forEach(el => {
    el.addEventListener('click', () => {
        introButtons.forEach(el => {
            el.classList.remove('active')
        })
        el.classList.add('active')
        const containerLeft = introContainer.getBoundingClientRect().left
        const elLeft = el.getBoundingClientRect().left
        let contentex1 = introContent.style.transform
        let contentex2 = contentex1.replace('translateX(', '')
        let contentX = contentex2.replace('px)', '')
        const contentLeft = introContent.getBoundingClientRect().left
        let distance = (elLeft - containerLeft) - contentX
        introContent.style.transform = `translateX(-${distance}px)`
    })
})