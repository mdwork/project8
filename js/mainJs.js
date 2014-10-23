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

    /*ползунок*/
    function slider(elemId, sliderWidth, range1, range2, step, postValue, valute) {
        var knobWidth = 32;				// ширина и высота бегунка
        var knobHeight = 32;			// изменяются в зависимости от используемых изображений
        var sliderHeight = 9;			// высота slider'а

        var offsX,tmp;					// вспомагательные переменные
        var d = document;
        var isIE = d.all || window.opera;	// определяем модель DOM
        var point = (sliderWidth-knobWidth-3)/(range2-range1);
        // point - количество пикселей на единицу значения

        var slider = d.createElement('DIV'); // создаем slider
        slider.id = elemId + '_slider';
        slider.className = 'slider';
        d.getElementById(elemId).appendChild(slider);

        var knob = d.createElement('DIV');	// создаем ползунок
        knob.id = elemId + '_knob';
        knob.className = 'knob';
        slider.appendChild(knob); // добавляем его в документ

        knob.style.left = 0;			// бегунок в нулевое значение
        knob.style.width = knobWidth+'px';
        knob.style.height = knobHeight+'px';
        slider.style.width = sliderWidth+'px';
        slider.style.height = sliderHeight+'px';

        var sliderOffset = slider.offsetLeft;			// sliderOffset - абсолютное смещение slider'а
        tmp = slider.offsetParent;		// от левого края в пикселях (в IE не работает)
        while(tmp.tagName != 'BODY') {
            sliderOffset += tmp.offsetLeft;		// тут его и находим
            tmp = tmp.offsetParent;
        }

        if(isIE)						// в зависимости от модели DOM
        {								// назначаем слушателей событий
            knob.onmousedown = startCoord;
            slider.onclick = sliderClick;
            knob.onmouseup = endCoord;
            slider.onmouseup = endCoord;
        }
        else {
            knob.addEventListener("mousedown", startCoord, true);
            slider.addEventListener("click", sliderClick, true);
            knob.addEventListener("mouseup", endCoord, true);
            slider.addEventListener("mouseup", endCoord, true);
        }


// далее подробно не описываю, кто захочет - разберется
//////////////////// функции установки/получения значения //////////////////////////

        function setValue(x)	// установка по пикселям
        {
            if(x < 0) knob.style.left = 0;
            else if(x > sliderWidth-knobWidth-3) knob.style.left = (sliderWidth-3-knobWidth)+'px';
            else {
                if(step == 0) knob.style.left = x+'px';
                else knob.style.left = Math.round(x/(step*point))*step*point+'px';
            }
            d.getElementById(postValue).value = getValue() + valute;	// это вывод значения для примера
        }
        function setValue2(x)	// установка по значению
        {
            if(x < range1 || x > range2) alert('Value is not included into a slider range!');
            else setValue((x-range1)*point);

            d.getElementById(postValue).value = getValue();
        }

        function getValue()
        {return Math.round(parseInt(knob.style.left)/point)+range1;}

//////////////////////////////// слушатели событий ////////////////////////////////////

        function sliderClick(e) {
            var x;
            if(isIE) {
                if(event.srcElement != slider) return; //IE onclick bug
                x = event.offsetX - Math.round(knobWidth/2);
            }
            else x = e.pageX-sliderOffset-knobWidth/2;
            setValue(x);
        }

        function startCoord(e) {
            if(isIE) {
                offsX = event.clientX - parseInt(knob.style.left);
                slider.onmousemove = mov;
            }
            else {
                slider.addEventListener("mousemove", mov, true);
            }
        }

        function mov(e)	{
            var x;
            if(isIE) x = event.clientX-offsX;
            else x = e.pageX-sliderOffset-knobWidth/2;
            setValue(x);
        }

        function endCoord()	{
            if(isIE) slider.onmousemove = null;
            else slider.removeEventListener("mousemove", mov, true);
        }

        // объявляем функции setValue2 и getValue как методы класса
        this.setValue = setValue2;
        this.getValue = getValue;
    } // конец класса

    slider('sl', 540, 0, 1000000, 0, 'info1', ' $');
    slider('sl2', 540, 0, 20, 1, 'info2', " %");
    slider('sl3', 540, 1, 36, 1, 'info3', "");
});