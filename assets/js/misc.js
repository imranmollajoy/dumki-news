const el = document.querySelector(".navigation-clean-search")
const observer = new IntersectionObserver( 
  ([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
  { threshold: [1] }
);

observer.observe(el);

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
var socialNavHeight = document.getElementById("social-top").offsetHeight;
var mainNav = document.querySelector(".navigation-clean-search");
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("social-top").style.top = "0";
	mainNav.style.top = "40px";
  } else {
    document.getElementById("social-top").style.top = "-50px";
	mainNav.style.top = "-1px";
  }
  prevScrollpos = currentScrollPos;
}