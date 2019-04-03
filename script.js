var birthYear;
var adjective;
var Noun;



$(".btn").click(function(){
     birthYear = $("#birth-year").val();
     var age= 2024-birthYear;
      $(".age").text(age);
});

$(".btn").click(function(){
    adjective = $("#adjective").val();
    var happy= adjective;
    $(".adjective").text(happy);
});

$(".btn").click(function(){
    Noun= $("#Noun"). val();
    var traveling= Noun;
    $(".verb"). text(traveling);});
