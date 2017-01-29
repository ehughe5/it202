/*global $*/
$(function () {
    $('#p1').mouseenter(function () {
        $(this).css("color", "blue");
    });
    
    $('#p1').mouseleave(function () {
        $(this).css("color", "black");
    });
    
    $('#p1').on("click", function () {
        $(this).css("font-size", "+=6");
    });
    
    $('#button1').on("click", function () {
        $('#p1').hide();
    });
    
    $('#button2').on("click", function () {
        $('#p1').toggle();
    });
    
    $('#button3').on("click", function () {
        $('#p1').css("font-size", "-=6");
    });
});