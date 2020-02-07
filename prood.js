
   

 $("#headerButton").click(function(){
    $("#header").hide();
    $("#block").show();
});

$(".block__no").click(function(){
    $("#block").hide();
    $(".no").show();
});

$(".no__out").click(function(){
    $(".no").hide();
    $("#header").show();
});

$(".block__yes").click(function(){
    $("#block").hide();
    $(".yes").show();
});

$(".yes__form-button").click(function(){
    $(".yes").hide();
    $("#header").show();
});
