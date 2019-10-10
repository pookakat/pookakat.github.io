$('#circle').click(function(){
    $('#circle').animate({top: '-300px'}, 500); 
    $('#top-bar').slideUp();
    $('#bottom-bar').animate({height: ''}, 500);
    $('#main-page').show();
});