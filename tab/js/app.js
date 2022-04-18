$(document).ready(function () {
  $('.tab').click(function () {
    var tabContent = $(this).data('tab');
    $(".content").removeClass("active");
    $("." + tabContent).addClass("active");
  });
});