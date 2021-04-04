const t1 = gsap.timeline({defaults:{duration: 2.5}});

t1.to('.welcome', {opacity:1, duration: 2.5})
.to('.welcome', {opacity:0}, "+=1")
.to('.loading', {y: '-100%', duration: 1})
.fromTo('.nav-btn-list', 1.5, {y: '-150%'}, {y: '0%', ease: Power2.ease})
.fromTo('#intro3', 2.5, {x: '-150%'}, {x: '0%', ease:Power2.ease}, "-=1.5")
.fromTo('#intro2', 2.5, {x: '-150%'}, {x: '0%', ease:Power2.ease}, "-=2.5")
.fromTo('#intro1', 2, {x: '-150%'}, {x: '0%', ease:Power2.ease}, "-=2")
.fromTo('.fas.fa-music', 1.25, {x:'300%'}, {x:'0%', ease:Power2.ease}, "-=1.3")
.fromTo('.fas.fa-file', 1.25, {x:'300%'}, {x:'0%', ease:Power2.ease}, "-=1.0")
.fromTo('.fab.fa-linkedin', 1.25, {x:'250%'}, {x:'0%', ease:Power2.ease}, "-=1.2")
.to('body',{overflowY: 'scroll', duration: 0})

const resume_btn = document.getElementById("resume-btn");
const resume = document.getElementById("resume");
let resume_opened = false;
resume_btn.addEventListener("click", () => {
    if(resume_opened === false) {
        resume.style.right = "6%";
        resume_btn.style.textShadow="0px 0px 6px red";
    }
    else {
        resume.style.right = "-100%";
        resume_btn.style.textShadow="none";
    }
    resume_opened = !resume_opened;
})