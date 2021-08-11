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

/* date ago snippet */
function ago(date) {
    function render(n, unit) {
        return n + " " + unit + ((n == 1) ? "" : "") + " আগে";
    }

    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = Math.floor(seconds / (60 * 60 * 24 * 365));
    if (Math.floor(seconds / (60 * 60 * 24 * 30 * 365)) >= 1) {
        return render(interval.toLocaleString('ben-BD'), "বছর");
    }
    interval = Math.floor(seconds / (60 * 60 * 24 * 30));
    if (interval >= 1) {
        return render(interval.toLocaleString('ben-BD'), "মাস");
    }
    interval = Math.floor(seconds / (60 * 60 * 24));
    if (interval >= 1) {
        return render(interval.toLocaleString('ben-BD'), "দিন");
    }
    interval = Math.floor(seconds / (60 * 60));
    if (interval >= 1) {
        return render(interval.toLocaleString('ben-BD'), "ঘন্টা");
    }
    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
        return render(interval.toLocaleString('ben-BD'), "মিনিট");
    }
    interval = Math.floor(seconds);
    return render(interval.toLocaleString('ben-BD'), "সেকেন্ড");
}
var count = 0;
var date = [];
document.querySelectorAll('.postedon').forEach(function(elem) {
	var d = elem.getAttribute('datetime'); 
	date[count] = Date.parse(d);
	count++;
	});
	
var posted = document.querySelectorAll(".postedago");
for(i=0;i<date.length;i++)
{
	posted[i].innerHTML = ago(date[i]);
}
	var footerH = document.querySelector("footer").offsetHeight;
	document.getElementById("not-footer").style.marginBottom= footerH+"px";

/* fix nav on non homrpagw */
function fixnav(){
	mainNav.style.top = "40px";
}


