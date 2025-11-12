$(document).ready(function(){
    $("#showBar").click(function(){
        $(".nav-container").slideToggle();
         $(this).toggleClass("rotated");
    });
});
