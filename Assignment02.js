//question 1
$("#wishes").text("I Hate you Bob");



//Question 2
$("#ducky").attr("src","https://i.ytimg.com/vi/oMQI0bJJOvM/hqdefault.jpg");

//question 3
var theImg = document.getElementById('imgsize');

theImg.width = 300;

//question 4
$(document).ready(function(){
    $("#red").click(function(){
        $("#redt").css("color", "red");
        $("#redt").css("fontSize", 40);

    });
});


//question 5
$(document).ready(function(){
    $("#hid").click(function(){
          $("#hi").text("Soylent Green is people!");

    });
});


//question 6

$('#hover').mouseenter(function () {
    $(this).css({border: '0 solid yellow'}).animate({
        borderWidth: 10
    }, 500);
    }).mouseleave(function () {
     $(this).animate({
        borderWidth: 0
    }, 500);
});


//question 7
var inputBox = document.getElementById('chatinput');

inputBox.onkeyup = function(){
    document.getElementById('printchatbox').innerHTML = inputBox.value;
}


//question 8
$("#haha").focus(function() {
    console.log('in');

}).blur(function() {
    console.log('out');
 
});

