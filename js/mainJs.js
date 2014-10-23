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

    /*timer*/
    function get_timer_914(string_914) {
        var date_new_914 = string_914;
        var date_t_914 = new Date(date_new_914);
        var date_914 = new Date();
        var timer_914 = date_t_914 - date_914;

        if(date_t_914 > date_914) {
            var day_914 = parseInt(timer_914/(60*60*1000*24));
            if(day_914 < 10) {
                day_914 = "0" + day_914;
            }

            day_914 = day_914.toString();
            var hour_914 = parseInt(timer_914/(60*60*1000))%24;
            if(hour_914 < 10) {
                hour_914 = "0" + hour_914;
            }

            hour_914 = hour_914.toString();
            var min_914 = parseInt(timer_914/(1000*60))%60;
            if(min_914 < 10) {
                min_914 = "0" + min_914;
            }

            min_914 = min_914.toString();
            var sec_914 = parseInt(timer_914/1000)%60;
            if(sec_914 < 10) {
                sec_914 = "0" + sec_914;
            }		sec_914 = sec_914.toString();

            timethis_914 = day_914 + " : " + hour_914 + " : " + min_914 + " : " + sec_914;
            $(".timerhello_914 p.result .result-day").text(day_914);
            $(".timerhello_914 p.result .result-hour").text(hour_914);
            $(".timerhello_914 p.result .result-minute").text(min_914);
            $(".timerhello_914 p.result .result-second").text(sec_914);
        }
        else {
            $(".timerhello_914 p.result .result-day").text("00");
            $(".timerhello_914 p.result .result-hour").text("00");
            $(".timerhello_914 p.result .result-minute").text("00");
            $(".timerhello_914 p.result .result-second").text("00");
        }
    }

    /*set timer*/
    function getfrominputs_914(){
        string_914 = "10/25/2014 12:00"; /*munth, day, year*/
        get_timer_914(string_914);
        setInterval(function(){
            get_timer_914(string_914);
        },1000);}

    getfrominputs_914();
});