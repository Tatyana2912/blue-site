// var a=5;
// var b= 'Привет';
// var c= true;
// var d=5;
// if (a==5) {
//     alert ('Все верно')}


$(function () {
    $(window).scroll(function() {
        $('#future .section-title').each(function(){
            var imagePos = $(this).offset().top;
            
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("fadeInLeft");
            }
        });
    });
})