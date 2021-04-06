// site entrance animation
const t1 = gsap.timeline({defaults:{duration: 2.5}});

t1.to('.welcome', {opacity:1, duration: 2.5})
.to('.welcome', {opacity:0}, "+=1")
.to('.loading', {y: '-100%', duration: 1})
.fromTo('.navbar-container', 1.5, {opacity: 0}, {opacity: 1, ease: Power2.ease})
.fromTo('#navlink1', 1, {y: '-150%'}, {y: '0%', ease: Power2.ease}, "-=1.5")
.fromTo('#navlink2', 1, {y: '-150%'}, {y: '0%', ease: Power2.ease}, "-=1.25")
.fromTo('#navlink3', 1, {y: '-150%'}, {y: '0%', ease: Power2.ease}, "-=1.0")
.fromTo('#navlink4', 1, {y: '-150%'}, {y: '0%', ease: Power2.ease}, "-=0.75")
.fromTo('#navlink5', 1, {y: '-150%'}, {y: '0%', ease: Power2.ease}, "-=0.6")
.fromTo('#intro3', 2.5, {x: '-150%'}, {x: '0%', ease:Power2.ease}, "-=1.5")
.fromTo('#intro2', 2.5, {x: '-150%'}, {x: '0%', ease:Power2.ease}, "-=2.5")
.fromTo('#intro1', 2, {x: '-150%'}, {x: '0%', ease:Power2.ease}, "-=2")
.fromTo('.fas.fa-file', 1.25, {x:'300%'}, {x:'0%', ease:Power2.ease}, "-=1.0")
.fromTo('.fab.fa-linkedin.top', 1.25, {x:'250%'}, {x:'0%', ease:Power2.ease}, "-=1.2")
.to('body',{overflowY: 'scroll', duration: 0})

// resume animation (slide from right)
const resume_btn = document.getElementById("resume-btn");
const resume = document.getElementById("resume");
let resume_opened = false;
resume_btn.addEventListener("click", () => {
    if(resume_opened === false) {
        resume.style.right = "6%";
        resume.style.opacity = "100%";
        resume_btn.style.textShadow="0px 0px 6px red";
    }
    else {
        resume.style.right = "-100%";
        resume.style.opacity = "0%";
        resume_btn.style.textShadow="none";
    }
    resume_opened = !resume_opened;
})

//sticky nav bar
window.onscroll = () => {
    let navbar = document.getElementById("navbar");
    let sticky = navbar.offsetTop;
    let top_btn = document.getElementById("top-btn");

    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        top_btn.classList.add("toppage-sticky")
    }
    else {
        navbar.classList.remove("sticky");
        top_btn.classList.remove("toppage-sticky");
    }

    if(window.scrollY === 0) {
        top_btn.classList.remove("toppage-sticky");
    }
}
// email container at the bottom of page
let econtainer = document.getElementById("email-container");
let ebtn = document.getElementById("email-btn");
let email_opened = false;
ebtn.addEventListener("click", ()=> {
    if(!email_opened) {
        econtainer.style.opacity = "100%";
        ebtn.classList.add("contact-link-pressed");
    }
    else {
        econtainer.style.opacity="0%";
        ebtn.classList.remove("contact-link-pressed");;
    }
    email_opened=!email_opened;
})
