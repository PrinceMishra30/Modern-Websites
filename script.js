const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var timeout;

function firstPageAnim() {
    var tl = gsap.timeline();

    tl.from("#nav",{
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
      .from("#herofooter",{
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

    window.addEventListener("mousemove", function(dets){
        
       clearTimeout(timeout);
        
        var xdiff = dets.clientX - xprev;
        var ydiff = dets.clientY - yprev;

        xprev = dets.clientX;
        yprev = dets.clientY;

        xscale = gsap.utils.clamp(0.6, 2, xdiff);
        yscale = gsap.utils.clamp(0.6, 2, ydiff);

        circleMouseFollower(xscale, yscale);
        
        timeout = setTimeout(function() {
            document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px ,${dets.clientY}px) scale(1, 1)`;
        }, 100)

    })
}

function circleMouseFollower(xscale, yscale) {
    window.addEventListener("mousemove", function(dets){
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px ,${dets.clientY}px) scale(${xscale}, ${yscale})`;
    })
}


circleMouseFollower();
firstPageAnim();
circleChaptaKaro();


document.querySelectorAll(".elem").forEach(function (elem) {
    elem.addEventListener("mousemove", function (dets) {
     var diff = dets.clientY - elem.getBoundingClientRect().top;

     gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        
           });
        });
    });

