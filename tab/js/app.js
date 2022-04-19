$(document).ready(function () {
  $('.tab').click(function () {
    $('.tab').removeClass("green");
    var tab= $(this).data('tab');
    $(this).addClass("green");
    $(".content").removeClass("active");
    $("." + tab).addClass("active");
  });
});