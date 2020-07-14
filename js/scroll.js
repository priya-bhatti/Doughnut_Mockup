const intro = document.querySelector('.intro');
//const video = intro.querySelector('video');
const branding = intro.querySelector('.branding');

const menu = document.querySelector('.menu');
const end = menu.querySelector('h1');

//SCROLL MAGIC VIDEO
// const controller = new ScrollMagic.Controller();
// const scene = new ScrollMagic.Scene({
//         duration: 1500, //end point
//         triggerElement: intro,
//         triggerHook: 0
//     }).setPin(intro)
//     .addTo(controller);

// let scrollpos = 0;

// scene.on("update", e => {
//     scrollpos = e.scrollPos / 1000;
// });

// setInterval(() => {
//     video.currentTime = scrollpos;
// }, 33.4);

//SCROLL MAGIC IMG SEQ
const images = [
    "images/0001.png",
    "images/0002.png",
    "images/0003.png",
    "images/0004.png",
    "images/0005.png",
    "images/0006.png",
    "images/0007.png",
    "images/0008.png",
    "images/0009.png",
    "images/0010.png",
    "images/0011.png",
    "images/0012.png",
    "images/0013.png",
    "images/0014.png",
    "images/0015.png",
    "images/0016.png",
    "images/0017.png",
    "images/0018.png",
    "images/0019.png",
    "images/0020.png",
    "images/0021.png",
    "images/0022.png",
    "images/0023.png",
    "images/0024.png",
    "images/0025.png",
    "images/0026.png",
    "images/0027.png",
    "images/0028.png",
    "images/0029.png",
    "images/0030.png",
];

const obj = { curImg: 0 };
const tween = TweenMax.to(obj, 0.5, {
    curImg: images.length - 1,
    roundProps: "curImg",
    repeat: 0,
    immediateRender: true,
    ease: Linear.easeNone,
    onUpdate: function() {
        $("#donut").attr("src", images[obj.curImg]);
    }
});


var controller = new ScrollMagic.Controller();


var scene = new ScrollMagic.Scene({
        duration: 1000,
        triggerElement: "intro",
        triggerHook: 0
    }).setPin(intro)
    .setTween(tween)
    .addTo(controller);


$("form.move input[name=duration]:radio").change(function() {
    scene.duration($(this).val());
});