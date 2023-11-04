import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.set(".link-card", { y: 30, opacity: 0 });
gsap.to(".link-card", {
  scrollTrigger: {
    trigger: ".link-card",
    end: "top 20%",
    scrub: true,
    start: "top center",
    toggleActions: "play none none none",
  },
  y: 0,
  opacity: 1,
  duration: 1,
  stagger: 0.2,
});
gsap.fromTo(
  ".a-text",
  {
    autoAlpha: 0,
    y: 0,
  },
  {
    autoAlpha: 1,
    duration: 1,
    scrollTrigger: {
      trigger: ".a-text",
      start: "top center",
      markers: true,
      toggleActions: "restart none none none",
      scrub: true,
    },
    stagger: 0.2,
  },
);
