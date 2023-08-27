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
  const elements = document.querySelectorAll(".menu, .down, .down1, .fr1, .fr2, .fr3, .fr4, .subs, .abt, .ee");
  const mouseMoveHandler = () => {
    const minicircle = document.querySelector("#minicircle");
    minicircle.style.height = "20px";
    minicircle.style.width = "20px";
  };
      elements.forEach(element => {
        element.addEventListener("mousemove", mouseMoveHandler);
    });
    const mouseMoveHandlerout = () => {
      const minicircle = document.querySelector("#minicircle");
      minicircle.style.height = "8px";
      minicircle.style.width = "8px";
    };
    elements.forEach(element => {
      element.addEventListener("mouseout", mouseMoveHandlerout);
  });

  // elements. addEventListener("mousemove", ()=>{
  //     document.querySelector("#minicircle").style.height = "20px"
  //     document.querySelector("#minicircle").style.width = "20px"
  //   })
  
  // elements. addEventListener("mouseout", ()=>{
  //     document.querySelector("#minicircle").style.height = "8px"
  //     document.querySelector("#minicircle").style.width = "8px"
  //   })

  // document.querySelector(".menu").addEventListener("click", ()=>{
  //     gsap.timeline().from("#nav1", {
  //       y: 0,
  //       opacity: 1,
  //       duration: 1.5,
  //       ease: Expo.easeInOut,
  //     })
  // easeInOut

  //     var tl = gsap.timeline();

  //    tl.from("#nav1", {
  //     y: "-1",
  //     opacity: 1,
  //     duration: 1.5,
  //     ease: Expo.easeInOut
  // })
  // })
  
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

  elem.addEventListener("mouseout", function (dets) {
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
      // top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });
});


function updateTime() {
  const timeElement = document.getElementById('timeDisplay');
  const currentTime = new Date();
  
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const amOrPm = hours >= 12 ? 'PM' : 'AM';
  
  const formattedHours = (hours % 12 === 0) ? 12 : hours % 12;
  const formattedMinutes = minutes.toString();
  
  const formattedTime = formattedHours + ':' + formattedMinutes + ' ' + amOrPm;
  
  timeElement.textContent =formattedTime;
}

updateTime();
setInterval(updateTime, 1000);

//   document.querySelector(".elem2") = elemm
  
//   elemm.addEventListener("mousemove", function (dets) {
//     gsap.to(elemm.querySelector("h1"), {
//       opacity: .3,
//       ease: Power3,
//     });
//     gsap.to(".elem2 h1", {x: 60, duration: .3});
//   });
//   elemm.addEventListener("mouseleave", function (dets) {
//     gsap.to(elem.querySelector("h1"), {
//       opacity: .7,
//       ease: Power3,
//     });
//     gsap.to(".elem2 h1", {x: -5, duration: .3});
//   });


// document.querySelectorAll(".elem").forEach(function (elem) {
  
//   elem.addEventListener("mousemove", function (dets) {
//     gsap.to(elem.querySelector("h5"), {
//       opacity: .3,
//       ease: Power3,
//     });
//   });
//   elem.addEventListener("mouseleave", function (dets) {
//     gsap.to(elem.querySelector("h5"), {
//       opacity: .7,
//       ease: Power3,
//     });
//   });
// })
let subMenu = document.getElementById("subMenu");
document.addEventListener("click", (e)=>{
  if(e.target!==document.getElementsByClassName("menu")[0]){
    subMenu.classList.remove("open-menu") 
    gsap.to(document.querySelector(".menu"), {
      opacity: 1,
      duration:1.3,
      ease: Expo.easeInOut
    })
  //   var tl = gsap.timeline();
  //   tl.to(".pd p", {
  //    y: "-10",
  //   //  opacity: 1,
  //   // duration: 1.5,
  //   ease: Expo.easeInOut,
  //   stagger: .5
  // })
  }
})



function toggleMenu(){
  subMenu.classList.toggle("open-menu");
  gsap.to(document.querySelector(".menu"), {
    opacity: 0,
    duration:.5,
    ease: Expo.easeInOut
  })

  var tl = gsap.timeline();
  tl.from(".pd p", {
    y: "-10",
    opacity: 0,
    // duration: 1.5,
    ease: Expo.easeInOut,
    stagger: .1
  })
 
}
 
