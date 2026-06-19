$(document).ready(function () {
  // alert("welcome");
  let show = true;

  $("p").click(function () {
    $(this).hide(500); // hides visibility with animation
  });

  $("p").mouseenter(function () {
    $(this).css({
      color: "red",
      "letter-spacing": "-1px",
      "line-height": "0.9",
    });
  });

  $("p").mouseleave(function () {
    $(this).removeAttr("style");
  });
});
