// This is help to design our cursor and blur cursor
// var curs = document.querySelector("#cursor")
// var blur_curs = document.querySelector("#cursor-blur")

// document.addEventListener("mousemove",function(dets){
//     curs.style.left = dets.x+"px";
//     curs.style.top = dets.y+"px";
//     blur_curs.style.left = dets.x-200+"px";
//     blur_curs.style.top = dets.y-200+"px";
// })
  
// This is header style which is perform by gsap cnd
gsap.to("header", {
    backgroundColor : "black",
    duration: 0.5,  
    height: "5rem",
    scrollTrigger: {
        trigger:"header",
        scroller:"body", 
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

// This is also gsap cnd which help to style contianer
gsap.to(".container",{
    backgroundColor: "rgba(0,0,0,0.9)",
    scrollTrigger:{
        trigger:".container",
        scroller:"body",
        // marker:true,
        start: "top -35%",
        end: "top -70%",
        scrub:2 
    }
})
gsap.registerPlugin(ScrollTrigger);

gsap.from(".article-content", {
  x: "100vw",        // Slide in from right edge
  opacity: 0,
  duration: 2,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".article-content",
    start: "top 85%",     // when top of article-content hits 85% of viewport
    toggleActions: "play none none reverse", // re-animate on scroll up
    scrub:1 
  }
});

// Animate form entrance
// gsap.from(".form-container", {
//   x: "-100vw",         // Slide in from left
//   opacity: 0,
//   duration: 3,
//   ease: "power4.out",
//   scrollTrigger: {
//     trigger: ".form-container",
//     start: "top 50%",
//     toggleActions: "play none none none"
//     // scrub:1 
//   }
// });

gsap.fromTo(
  ".form-container",
  { x: "-100vw" },
  { 
    x: "0vw",
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".form-container",
      start: "top 85%",
      // end: "top 20%",
      scrub: 1 // scroll-linked animation
    }
  }
);