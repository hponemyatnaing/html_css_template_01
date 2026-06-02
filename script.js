document.addEventListener("DOMContentLoaded", () => {

  gsap.registerPlugin(ScrollTrigger);

  const mvTimeline = gsap.timeline();

  mvTimeline.set(".main-header", { y: -60, opacity: 0 });
  mvTimeline.set(".mv-title", { y: 40, opacity: 0 });
  mvTimeline.set(".mv-subtitle", { y: 30, opacity: 0 });
  mvTimeline.set(".mv-btn", { y: 20, opacity: 0 });
  mvTimeline.set(".mv-img", { x: 50, opacity: 0 });

  mvTimeline
    .to(".main-header", { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" })
    .to(".mv-title", { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" }, "-=0.55")
    .to(".mv-subtitle", { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" }, "-=0.55")
    .to(".mv-btn", { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, "-=0.5")
    .to(".mv-img", { scale: 1, opacity: 1, duration: 0.9, ease: "power2.out" }, "-=0.6");

  ScrollTrigger.create({
    trigger: ".mv-pin-container",
    start: "top top",
    end: "bottom top",
    pin: true,
    pinSpacing: false,
    zIndex: 1
  });

  const headerElement = document.querySelector(".main-header");

  ScrollTrigger.create({
    start: "top -30px",
    onUpdate: (self) => {

      if (self.direction === 1) {
        headerElement.classList.add("nav-hidden");
      }
      else if (self.direction === -1) {
        headerElement.classList.remove("nav-hidden");
      }
    }
  });

  const animatableElements = document.querySelectorAll('[data-anim="fade-up"]');

  animatableElements.forEach((element) => {
    const rawDelay = element.getAttribute("data-delay");
    let calculatedDelay = rawDelay ? parseFloat(rawDelay) : 0;

    if (calculatedDelay > 1.2) {
      calculatedDelay = 1.2;
    }

    gsap.fromTo(element,
      {
        opacity: 0,
        y: 50
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.85,
        delay: calculatedDelay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 88%",
          toggleActions: "play none none none"
        }
      }
    );
  });

  const clientSlider = new Swiper('.client-swiper', {
    loop: true,
    loopedSlides: 2,
    slidesPerView: 1,
    spaceBetween: 30,
    // grabcursor: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30
      }
    }
  });
});