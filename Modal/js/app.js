$(document).ready(function () {
  $(".btn").click(function () {
      $(".content").addClass("view");
  })
  
  $(".bt1").click(function () {
    $(".content").removeClass("view");
})
// $(window).click(function(e) {
// if($(".content").hasClass("view")){
//   $(".content").removeClass("view");
// }
// })
window.onclick = function(event) {
  if (event.target == $(".content")) {
    $(".content").removeClass("view");
  }
  // if (event.target == modalCompanies) {
  //     modalCompanies.style.display = "none";
  // }
}
})