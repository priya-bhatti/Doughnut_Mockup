const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
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
    "../sequence/0001.png",
    "../sequence/0002.png",
    "../sequence/0003.png",
    "../sequence/0004.png",
    "../sequence/0005.png",
    "../sequence/0006.png",
    "../sequence/0007.png",
    "../sequence/0008.png",
    "../sequence/0009.png",
    "../sequence/0010.png",
    "../sequence/0011.png",
    "../sequence/0012.png",
    "../sequence/0013.png",
    "../sequence/0014.png",
    "../sequence/0015.png",
    "../sequence/0016.png",
    "../sequence/0017.png",
    "../sequence/0018.png",
    "../sequence/0019.png",
    "../sequence/0020.png",
    "../sequence/0021.png",
    "../sequence/0022.png",
    "../sequence/0023.png",
    "../sequence/0024.png",
    "../sequence/0025.png",
    "../sequence/0026.png",
    "../sequence/0027.png",
    "../sequence/0028.png",
    "../sequence/0029.png",
    "../sequence/0030.png",
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