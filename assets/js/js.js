$(".open-menu-sections").click(function(){
    $(".menu-sections").css('display', 'block');
    $(".menu-sections").animate({
        height: "60px"
    }, 'fast', 'linear');
    $(".open-menu-sections").animate({
        opacity: "0"
    }, 'fast', 'linear');
});

$(".close-menu-sections").click(function(){
    $(".menu-sections").css('display', 'none');
    $(".menu-sections").animate({
        height: "0px"
    }, 'fast', 'linear');
    $(".open-menu-sections").animate({
        opacity: "1"
    }, 'fast', 'linear');
});

$(".nome-site").mouseover(function(){
    var windowWidth = window.innerWidth;

    if(windowWidth <= "442"){
        $(".border-nome-site").animate({
            width: "80vw"
        }, 'fast', 'linear');
    }else{
        $(".border-nome-site").animate({
            width: "440px"
        }, 'fast', 'linear');
    }

    $(".nome-site").animate({
        color: "#01BAEF"
    }, 'fast', 'linear');
});

$(".nome-site").mouseout(function(){
    $(".nome-site").animate({
        color: "white"
    }, 'fast', 'linear');

    $(".border-nome-site").animate({
        width: "0px"
    }, 'fast', 'linear');
});

$(".close-aviso-email").click(function(){
    setTimeout(function(){
        $(".fundo").css('display', 'none');
        $(".container-aviso-email").css('display', 'none');
    }, 1000);
    $(".fundo").animate({
        opacity: '0'
    });
});

var $doc = $('html, body');
$('.menu-sections a').click(function() {
    var windowWidth = window.innerWidth;

    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);

    if(windowWidth > "768"){
        $(".menu-sections").animate({
            height: "0px"
        }, 'fast', 'linear');
        $(".menu-sections").css('display', 'none');
    }
    
    $(".open-menu-sections").animate({
        opacity: "1"
    }, 'fast', 'linear');
    return false;
});

$('.top-anchor i').click(function() {
    $doc.animate({
        scrollTop: $('body').offset().top
    }, 500);
    return false;
});

$(document).scroll(function(){
    var posicaoScroll = $(document).scrollTop();
    var verifyDisplay = 0;
    if(posicaoScroll >= '590' && (verifyDisplay == 0 || verifyDisplay == 2)){
        $(".top-anchor").css('display', 'block');
        verifyDisplay = 1;
        return false;
    }else if(verifyDisplay == 0 || verifyDisplay == 1){
        $(".top-anchor").css('display', 'none');
        verifyDisplay = 2;
        return false;
    }
});