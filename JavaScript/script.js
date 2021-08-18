const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");
console.log(cursorSpan);
const textArray = [
  "Chemical Engineer",
  "Data Analytics",
  "Web Developer",
  "Technology Enthusiast",
  "Leader",
];
const typingDelay = 60;
const erasingDelay = 50;
const newTextDelay = 1000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

$(document).ready(function () {
  $(".show-section").click(function () {
    $(".content-container")
      .not("#sec" + $(this).attr("target"))
      .css({ zIndex: "1" })
      .animate(
        {
          right: "400px",
          opacity: "0",
        },
        450
      );
    $("#sec" + $(this).attr("target"))
      .css({ zIndex: "10" })
      .animate(
        {
          right: "0px",
          opacity: "1",
        },
        300
      );
  });

  $(window).resize(function () {
    if ($(window).width() <= 1200) {
      $(".content-container").css("opacity", "1").css("right", "0");
    }
  });

  $(".code-percentage").easyPieChart({
    barColor: "rgb(214, 57, 175)",
    trackColor: "rgba(211, 211, 211, 0.75)",
    lineCap: "butt",
    animate: false,
    size: 80,
    lineWidth: 12,
    scaleColor: false,
  });

  $(".show-works").click(function () {
    $(".works-container")
      .not("#workcon" + $(this).attr("worksnum"))
      .css({ zIndex: "2" })
      .hide()
      .animate(
        {
          opacity: "0",
        },
        300
      );
    $("#workcon" + $(this).attr("worksnum"))
      .css({ zIndex: "3" })
      .show()
      .animate(
        {
          opacity: "1",
        },
        300
      );
  });

  // Show resume content
  $(".display-hidden").click(function () {
    $("#extra" + $(this).attr("target")).show();
  });

  $(".added-information .fa-times").click(function () {
    $("#extra" + $(this).attr("target")).hide();
  });

  $(".ng-background").click(function () {
    $("#extra" + $(this).attr("target")).hide();
  });

  $(".tech-bar-inner").each(function () {
    $(this).css("width", $(this).attr("data-width"));
  });

  // Display art content
  $(".display-art").click(function () {
    $("#extra-art" + $(this).attr("target")).show();
  });

  $(".added-image .fa-times").click(function () {
    $("#extra-art" + $(this).attr("target")).hide();
  });

  $(".ng-background-works").click(function () {
    $("#extra-art" + $(this).attr("target")).hide();
  });

  // Display report content
  $(".display-report").click(function () {
    $("#extra-report" + $(this).attr("target")).show();
  });
  $(".added-report .fa-times").click(function () {
    $("#extra-report" + $(this).attr("target")).hide();
  });

  $(".ng-background-report").click(function () {
    $("#extra-report" + $(this).attr("target")).hide();
  });

  // CONTACT FORM FOCUS
  $(".highlight-zone").focus(function () {
    $("#contfield" + $(this).attr("target")).css(
      "border",
      "2px solid rgb(155, 0, 155)"
    );
    $(".highlight-area")
      .not("#contfield" + $(this).attr("target"))
      .css("border", "none");
  });
});
