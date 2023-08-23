const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
  });
  
  var timeout;
  
  function firstPageAnim() {
    var tl = gsap.timeline();
  
    tl.from("#nav", {
      y: "-10",
      opacity: 0,
      duration: 1.5,
      ease: Expo.easeInOut
    })
      .to(".boundingelem", {
        y: 0,
        ease: Expo.easeInOut,
        duration: 1.5,
        delay: -1,
        stagger: .2
      })
      .from("#herofooter", {
        y: -10,
        opacity: 0,
        duration: 1.2,
        delay: -1,
        ease: Expo.easeInOut
      })
  }
  
  function circleChaptaKaro() {
    var xscale = 1;
    var yscale = 1;
  
    var xprev = 0;
    var yprev = 0;
  
    window.addEventListener("mousemove", function (dets) {
  
      clearTimeout(timeout);
  
      var xdiff = Math.abs(dets.clientX - xprev);
      var ydiff = Math.abs(dets.clientY - yprev);
  
      xprev = dets.clientX;
      yprev = dets.clientY;
  
      xscale = gsap.utils.clamp(0.8, 1.4, xdiff);
      yscale = gsap.utils.clamp(0.8, 1.4, ydiff);
  
      circleMouseFollower(xscale, yscale);
  
      timeout = setTimeout(function () {
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px ,${dets.clientY}px) scale(1, 1)`;
      }, 100)
  
    })
  }
  function circleMouseFollower(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
      document.querySelector("#minicircle").style.invert = 'filter(100%)'
      document.querySelector("#minicircle").style.display = "block"
      document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px ,${dets.clientY}px) scale(${xscale}, ${yscale})`;
      gsap.to(document.querySelector("#minicircle"), {
        opacity: 1,
        ease: Power3,
      })
    })
    window.addEventListener("mouseout", function (dets) {
      // c=0;
      document.querySelector("#minicircle").style.display = "none"
  
      gsap.to(document.querySelector("#minicircle"), {
        opacity: 0,
        delay: 0
      })
    })
    // window.addEventListener("mouseout", function(dets){
    //  document.querySelector("#minicircle").style.opacity = 0;
    // })
  }
  // window.addEventListener("mouseout", function(dets){
  //   document.querySelector("#minicircle").style.opacity = 0;
  //  })
  
  // window.addEventListener("mouseout", function(dets){
  //   gsap.to(document.querySelector("#minicircle"),{
  //     opacity: 0,
  //     delay: 0
  //   })
  // })
  
  circleMouseFollower();
  firstPageAnim();
  circleChaptaKaro();
  
  
  document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
  
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
  });
  
  