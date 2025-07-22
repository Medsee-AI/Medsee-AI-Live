window.addEventListener('load', function () {
    gsap.registerPlugin(ScrollTrigger);


    let body = document.querySelector('body');
    body.style.opacity = 1;


  if (window.innerWidth <= 768) {  // 768px or less considered mobile/tablet
    let lineBreakElements = document.querySelectorAll('.noLineBreak');

    lineBreakElements.forEach(el => {
      if (el.classList.contains('noLineBreak')) {
        if (el.innerHTML.includes('<br')) {
          el.innerHTML = el.innerHTML.replace(/<br\s*\/?>/gi, '');
          console.log('Line break removed from:', el);
        } else {
          console.log('No line break found in:', el);
        }
      }
    });
  }






    // !mobile nav 


    let menuBtn = document.querySelector('.menuBtn');
    let header = document.querySelector('.header');
    let closeBtn = document.querySelector('.header .close');



    menuBtn?.addEventListener('click', () => {
        header.classList.add('active');

    })

    closeBtn?.addEventListener('click', () => {
        header.classList.remove('active');

    })




    let gsapAnimation = () => {





        // Fade-in text  HIGHLIGHT
        gsap.utils.toArray(".fade-in").forEach((item, index) => {
            gsap.set(item, { opacity: 0, y: 60 });

            gsap.to(item, {
                opacity: 1,
                y: 0,
                duration: 2,
                ease: "power3.out",
                delay: index * 0.01,
                scrollTrigger: {
                    trigger: item,
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
            });
        });

        gsap.utils.toArray(".op").forEach((item, index) => {
            gsap.set(item, { opacity: 0 });

            gsap.to(item, {
                opacity: 1,
                duration: 1.5,
                ease: "power3.out",
                delay: index * 0.01,
                scrollTrigger: {
                    trigger: item,
                    start: "top 90%",
                    toggleActions: "play none none none",
                },
            });
        });

        // Image animations with directional clip path effect HIGHLIGHT
        gsap.utils
            .toArray(".img-left, .img-right, .img-center, .img-door")
            .forEach((img, index) => {
                let clipPathValue = "polygon(0% 110%, 100% 110%, 100% 210%, 0% 210%)";

                if (img.classList.contains("img-left")) {
                    clipPathValue = "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)";
                } else if (img.classList.contains("img-right")) {
                    clipPathValue = "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)";
                } else if (img.classList.contains("img-center")) {
                    clipPathValue = "polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%)";
                } else if (img.classList.contains("img-door")) {
                    clipPathValue = "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)";
                }

                gsap.set(img, {
                    opacity: 0,
                    clipPath: clipPathValue,
                });

                let finalClipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
                if (img.classList.contains("img-left")) {
                    finalClipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
                } else if (img.classList.contains("img-right")) {
                    finalClipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
                } else if (img.classList.contains("img-center")) {
                    finalClipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
                } else if (img.classList.contains("img-door")) {
                    finalClipPath = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
                }

                gsap.to(img, {
                    opacity: 1,
                    clipPath: finalClipPath,
                    duration: 2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: img,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                    onComplete: () => {
                        gsap.set(img, { clearProps: "opacity,clipPath" });
                    },
                });
            });

        // console.log('animation run');


    }

    gsapAnimation()







    console.log('hello world');


})