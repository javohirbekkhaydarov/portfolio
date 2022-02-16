const navAnim = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  // toggle

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    //  Animate items
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkMove 0.5s linear forwards ${
          index / 7 + 0.45
        }s`;
      }
    });
    burger.classList.toggle("toggle");
  });
};
navAnim();

window.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", () => {
    const rights = document.querySelectorAll(".right");

    for (let i = 0; i < rights.length; i++) {
      let windowHeitgh = window.innerHeight;
      let containerRight = rights[i].getBoundingClientRect().top;
      let containerPoint = 50;

      if (containerRight < windowHeitgh - containerPoint) {
        rights[i].classList.add("Ractive");
      }
    }
    rights.forEach((right, index) => {
      if (right.style.animation) {
        right.style.animation = "";
      } else {
        right.style.animation = `right 0.5s linear forwards ${
          index / 7 + 0.7
        }s`;
      }
    });

    const lefts = document.querySelectorAll(".left");

    for (let i = 0; i < lefts.length; i++) {
      let windowHeitgh = window.innerHeight;
      let containerLeft = lefts[i].getBoundingClientRect().top;
      let containerPoint = 50;

      if (containerLeft < windowHeitgh - containerPoint) {
        lefts[i].classList.add("leftActiv");
      }
    }
    lefts.forEach((left, index) => {
      if (left.style.animation) {
        left.style.animation = "";
      } else {
        left.style.animation = `link 0.5s linear forwards ${index / 7 + 0.45}s`;
      }
    });

    const top = document.querySelectorAll(".toTop");

    for (let i = 0; i < top.length; i++) {
      let windowHeitgh = window.innerHeight;
      let containerTop = top[i].getBoundingClientRect().top;
      let containerPoint = 50;

      if (containerTop < windowHeitgh - containerPoint) {
        top[i].classList.add("active");
      }
    }
  });

  //! Smooth Scroll to sections
  //-----------------------------------------------
  // if ($(".smooth-scroll").length > 0) {
  //   $(
  //     ".smooth-scroll a[href*=#]:not([href=#]), a[href*=#]:not([href=#]).smooth-scroll"
  //   ).click(function () {
  //     if (
  //       location.pathname.replace(/^\//, "") ==
  //         this.pathname.replace(/^\//, "") &&
  //       location.hostname == this.hostname
  //     ) {
  //       var target = $(this.hash);
  //       target = target.length
  //         ? target
  //         : $("[name=" + this.hash.slice(1) + "]");
  //       if (target.length) {
  //         if ($(window).width() > 767) {
  //           $("html,body").animate(
  //             {
  //               scrollTop: target.offset().top - 151,
  //             },
  //             1000
  //           );
  //         }
  //         if ($(window).width() < 768) {
  //           $("html,body").animate(
  //             {
  //               scrollTop: target.offset().top - 40,
  //             },
  //             1000
  //           );
  //         }
  //         return false;
  //       }
  //     }
  //   });
  // }
});

// button ===========================

const modal1 = document.querySelector(".button");
const modalWindow = document.querySelector(".modal");
const container = document.querySelector(".container-fluid");
const modalshow = document.querySelector(".modal");
const exit = document.querySelector(".exit");

modal1.addEventListener("click", function () {
  modalshow.style.display = "block";
  modalshow.style.overflowY = "hidden";
  // window.style.position = "fixed"
  // container.style.filter = "blur(2px)"
});

window.addEventListener("keydown", function (i) {
  if (i.keyCode == 27) {
    modalshow.style.display = "none";
    container.style.filter = "blur(0px)";
  }
});

exit.addEventListener("click", function () {
  modalshow.style.display = "none";
  container.style.filter = "blur(0px)";
});

function externalLinks() {
  for (var c = document.getElementsByTagName("a"), a = 0; a < c.length; a++) {
    var b = c[a];
    b.getAttribute("href") &&
      b.hostname !== location.hostname &&
      (b.target = "_blank");
  }
}

externalLinks();
const loader = document.querySelector(".loader");
const loaders = document.querySelector(".loaders");

document.addEventListener("DOMContentLoaded", () => {

  const loader = document.querySelector(".loaders");
  setTimeout(function () {
    loader.style.opacity = 0;
    setTimeout(function () {
      loader.style.display = "none";
    }, 500);
  }, 1000);
});
const  rrrrr  = () => {

}



//? short example``
/* function getOnlyFirstNumbers(array) {
  return array.map(item => {
       return +String(item)[0]
  })
}
console.log(getOnlyFirstNumbers([11,22,33,44,55]));
 */



var swiper = new Swiper(".blogs-slider", {
  autoplay:true,
loop: true,
autoHeight:true,
centeredSlides: true,
spaceBetween: 20,
grabCursor: true,
pagination: {
  el: ".swiper-pagination",
  clickable: true,
},
breakpoints: {
  0: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 2,

  },
  1080: {
    slidesPerView:3,
     
  },

},
});
