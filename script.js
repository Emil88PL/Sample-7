
$(function(){

    $("#myCarousel").hide(20).slideDown(400);

});


// Good way

$(function(){

    $(".panel-button").on("click", function(){
       var panelId = $(this).attr("data-panelid");
       $("#"+panelId).toggle();
    });

});

