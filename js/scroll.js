const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const branding = intro.querySelector('.branding');

const menu = document.querySelector('.menu');
const end = menu.querySelector('h1');

//SCROLL MAGIC
const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
        duration: 1500, //end point
        triggerElement: intro,
        triggerHook: 0
    }).setPin(intro)
    .addTo(controller);

let scrollpos = 0;

scene.on("update", e => {
    scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
    video.currentTime = scrollpos;
}, 33.4);