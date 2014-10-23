$(document).ready(function(){
    $('.list-faq li').on('click', function(){
        if(!$(this).hasClass('active')) {
            $(this).children('p').addClass('show-block').slideToggle('.show-block');
        }
        else {
            $(this).children('p').removeClass('show-block').slideToggle('.show-block');
        }
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
        }
        else {
            $(this).addClass('active');
        }
    });
});