function smoothScrolling(duration) {
  $("#mobile-nav-1").click(function (event) {
    var topAbout = $(".info-box").height();
    $(".main-container").animate({ scrollTop: topAbout + 20 }, duration);
    event.preventDefault();
  });

  $("#mobile-nav-2").click(function (event) {
    var topAbout = $("#sec1").height() + $(".info-box").height();
    $(".main-container").animate({ scrollTop: topAbout + 41 }, duration);
    event.preventDefault();
  });

  $("#mobile-nav-3").click(function (event) {
    var topAbout =
      $("#sec2").height() + $("#sec1").height() + $(".info-box").height();
    $(".main-container").animate({ scrollTop: topAbout + 61 }, duration);
    event.preventDefault();
  });

  $("#mobile-nav-4").click(function (event) {
    var topAbout =
      $("#sec3").height() +
      $("#sec2").height() +
      $("#sec1").height() +
      $(".info-box").height();
    $(".main-container").animate({ scrollTop: topAbout + 81 }, duration);
    event.preventDefault();
  });

  $("#mobile-nav-5").click(function (event) {
    var topAbout =
      $("#sec4").height() +
      $("#sec3").height() +
      $("#sec2").height() +
      $("#sec1").height() +
      $(".info-box").height();
    $(".main-container").animate({ scrollTop: topAbout + 101 }, duration);
    event.preventDefault();
  });

  $("#mobile-nav-6").click(function (event) {
    var topAbout =
      $("#sec5").height() +
      $("#sec4").height() +
      $("#sec3").height() +
      $("#sec2").height() +
      $("#sec1").height() +
      $(".info-box").height();
    $(".main-container").animate({ scrollTop: topAbout + 121 }, duration);
    event.preventDefault();
  });
}

function smoothScrollingTwo(duration) {
  $("#phone-nav-1").click(function (event) {
    var topAbout = $(".info-box").height();
    $(".main-container").animate({ scrollTop: topAbout + 20 }, duration);
    event.preventDefault();

    $(".nav-bar-phone").animate(
      {
        left: "-100%",
      },
      400
    );
  });

  $("#phone-nav-2").click(function (event) {
    var topAbout = $("#sec1").height() + $(".info-box").height();
    $(".main-container").animate({ scrollTop: topAbout + 41 }, duration);
    event.preventDefault();
    $(".nav-bar-phone").animate(
      {
        left: "-100%",
      },
      400
    );
  });

  $("#phone-nav-3").click(function (event) {
    var topAbout =
      $("#sec2").height() + $("#sec1").height() + $(".info-box").height();
    $(".main-container").animate({ scrollTop: topAbout + 61 }, duration);
    event.preventDefault();
    $(".nav-bar-phone").animate(
      {
        left: "-100%",
      },
      400
    );
  });

  $("#phone-nav-4").click(function (event) {
    var topAbout =
      $("#sec3").height() +
      $("#sec2").height() +
      $("#sec1").height() +
      $(".info-box").height();
    $(".main-container").animate({ scrollTop: topAbout + 81 }, duration);
    event.preventDefault();
    $(".nav-bar-phone").animate(
      {
        left: "-100%",
      },
      400
    );
  });

  $("#phone-nav-5").click(function (event) {
    var topAbout =
      $("#sec4").height() +
      $("#sec3").height() +
      $("#sec2").height() +
      $("#sec1").height() +
      $(".info-box").height();
    $(".main-container").animate({ scrollTop: topAbout + 101 }, duration);
    event.preventDefault();
    $(".nav-bar-phone").animate(
      {
        left: "-100%",
      },
      400
    );
  });

  $("#phone-nav-6").click(function (event) {
    var topAbout =
      $("#sec5").height() +
      $("#sec4").height() +
      $("#sec3").height() +
      $("#sec2").height() +
      $("#sec1").height() +
      $(".info-box").height();
    $(".main-container").animate({ scrollTop: topAbout + 121 }, duration);
    event.preventDefault();
    $(".nav-bar-phone").animate(
      {
        left: "-100%",
      },
      400
    );
  });
}
$(document).ready(function () {
  smoothScrolling(800);
  smoothScrollingTwo(800);

  $(".nav-bar-toggle .fa-bars").click(function () {
    $(".nav-bar-phone").animate(
      {
        left: "0",
      },
      400
    );
  });

  $(".nav-bar-phone .exit-menu a").click(function () {
    $(".nav-bar-phone").animate(
      {
        left: "-100%",
      },
      400
    );
  });
});
