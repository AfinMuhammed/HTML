
	$(document).ready(function(){
	  $(".contentHead").click(function(){
      // alert(this);
      if($(this).hasClass("active")){
        $(this).removeClass("active").next().slideUp();
        $(this).children("i").removeClass("fa-solid fa-circle-chevron-up white").addClass("fa-solid fa-circle-chevron-down icon");
      }
      else{
        $(".contentHead").removeClass("active").next().slideUp();
        $(".contentHead").children("i").removeClass("fa-solid fa-circle-chevron-up white").addClass("fa-solid fa-circle-chevron-down icon");
        $(this).addClass("active").next().slideDown();
        $(this).children("i").removeClass("fa-solid fa-circle-chevron-down icon").addClass("fa-solid fa-circle-chevron-up white");
      }
    })
  })