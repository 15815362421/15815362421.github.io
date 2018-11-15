$(document).ready(function () {
    console.log("轮播图距离顶部位置+" +$('#myCarousel').offset().top);
    console.log("简介距离顶部位置+" +$('.jumbotron').offset().top);
    console.log("服务介绍距离顶部位置+" +$('.service-introduction').offset().top);
    console.log("宣言距离顶部位置+" +$('.brand-box').offset().top);
    console.log("团队介绍距离顶部位置+" +$('.team-introduction').offset().top);
    console.log("了解更多距离顶部位置+" +$('.brand-box2').offset().top);
    $('#myCarousel').css({animation:"slideInDown 2s"})
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop()
        console.log("当前距离顶部位置+" + scrollTop);
        if(scrollTop >= $('.jumbotron').offset().top - $(window).innerHeight()*0.7){
            $('.jumbotron h2').css({animation:"fadeInLeft 1s forwards"});
            $('.jumbotron a').css({animation:"fadeInRight 1s forwards"});
        }
        if(scrollTop >= $('.service-introduction').offset().top - $(window).innerHeight()*0.7){
            $('.sec-title').css({animation:"fadeInUp 1s forwards"});
            $('.introduction').eq(0).css({animation:"fadeInUp 2s forwards"});
            $('.introduction').eq(1).css({animation:"fadeInUp 2s 0.1s forwards"});
            $('.introduction').eq(2).css({animation:"fadeInUp 2s 0.2s forwards"});
        }
        if(scrollTop >= $('.brand-box').offset().top - $(window).innerHeight()*0.7){
            $('.box').css({animation:"fadeInUp 2s forwards"});
        }
        if(scrollTop >= $('.team-introduction').offset().top - $(window).innerHeight()*0.7){
            $('.sec-title1').css({animation:"fadeInLeft 1s forwards"});
            $('.thumbnail:eq(0)').css({animation:"fadeInUp 2s forwards"});
            $('.thumbnail:eq(1)').css({animation:"fadeInUp 2s 0.1s forwards"});
            $('.thumbnail:eq(2)').css({animation:"fadeInUp 2s 0.2s forwards"});
            $('.thumbnail:eq(3)').css({animation:"fadeInUp 2s 0.3s forwards"});
        }
        if(scrollTop >= $('.brand-box2').offset().top - $(window).innerHeight()*0.7){
            $('.box2').css({animation:"fadeInRight 2s forwards"});
        }
    });
});