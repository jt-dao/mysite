const svgg = document.getElementById("svgg");
const names = document.getElementById("names");
const h = document.getElementById("h");
svgg.addEventListener(
    "mouseover",
    (event) => {
        document.getElementById("xx").style.animationDuration = "0.7s";
        document.getElementById("yy").style.animationDuration = "2s";
        document.getElementById("zz").style.animationDuration = "0.2s";
        document.getElementById("xx").style.animationDelay = "0.5s";
        document.getElementById("yy").style.animationDelay = "1.3s";
        document.getElementById("zz").style.animationDelay = "3.5s";
    }
  );

  svgg.addEventListener(
    "mouseout",
    (event) => {
        document.getElementById("xx").style.animationDuration = "0s";
        document.getElementById("yy").style.animationDuration = "0s";
        document.getElementById("zz").style.animationDuration = "0s";
        document.getElementById("xx").style.animationDelay = "0s";
        document.getElementById("yy").style.animationDelay = "0s";
        document.getElementById("zz").style.animationDelay = "0s";
    }
  );


addEventListener("resize", (event) => {names.style.transition = "0s";});

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");


function opentab(tabname) {
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}

function over() {
    this.timeout = window.setTimeout(function () {
        document.getElementById("names").style.color = "#0FFF50"
        document.getElementById("names").innerHTML = "Jaythan Dao"
    }, 4000)
  }
  
function left() {
    if (this.timeout) window.clearTimeout(this.timeout)
  }
  
names.addEventListener('mouseenter', over);
names.addEventListener('mouseleave', left);
names.addEventListener(
    "mouseout",
    (event) => {
        document.getElementById("names").innerHTML = "Jaythan Dao."
        document.getElementById("names").style.color = "white"
    }
  );

/*
window.addEventListener("scroll", setScrollVar)
window.addEventListener("resize", setScrollVar)

function setScrollVar() {
    const htmlElement = document.documentElement
    const percentOfScreenHeightScrolled = htmlElement.scrollTop/htmlElement.clientHeight
    console.log(Math.min(percentOfScreenHeightScrolled * 100, 100))
    htmlElement.style.setProperty("--scroll", Math.min(percentOfScreenHeightScrolled * 100, 100))
}

setScrollVar()
*/
const timeElement = document.querySelector(".time");
const dateElement = document.querySelector(".date");

/**
 * @param {Date} date
 */
function formatTime(date) {
  const hours12 = date.getHours() % 12 || 12;
  const minutes = date.getMinutes();
  const isAm = date.getHours() < 12;

  return `${hours12.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")} ${isAm ? "AM" : "PM"}`;
}

/**
 * @param {Date} date
 */

setInterval(() => {
  const now = new Date();

  timeElement.textContent = formatTime(now);
},);

