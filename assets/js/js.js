$(".open-menu-sections").click(function(){
    $(".menu-sections").css('display', 'block');
    $(".open-color-sections").css('display', 'none');
    $(".menu-sections").animate({
        height: "60px"
    }, 'fast', 'linear');
    $(".open-menu-sections").animate({
        opacity: "0"
    }, 'fast', 'linear');
});

$(".close-menu-sections").click(function(){
    $(".menu-sections").css('display', 'none');
    $(".open-color-sections").css('display', 'block');
    $(".menu-sections").animate({
        height: "0px"
    }, 'fast', 'linear');
    $(".open-menu-sections").animate({
        opacity: "1"
    }, 'fast', 'linear');
});

$(".open-color-sections").click(function(){
    $(".color-sections").css('display', 'block');
    $(".open-menu-sections").css('display', 'none');
    $(".open-color-sections").css('display', 'none');
    $(".color-sections").animate({
        height: "60px"
    }, 'fast', 'linear');
    $(".open-color-sections").animate({
        opacity: "0"
    }, 'fast', 'linear');
});

$(".close-color-sections").click(function(){
    $(".color-sections").css('display', 'none');
    $(".open-menu-sections").css('display', 'block');
    $(".open-color-sections").css('display', 'block');
    $(".color-sections").animate({
        height: "0px"
    }, 'fast', 'linear');
    $(".open-color-sections").animate({
        opacity: "1"
    }, 'fast', 'linear');
});

var defaultColor = "#01BAEF";
colorWell = document.querySelector("#colorpicker");
colorWell.value = defaultColor;
colorWell.addEventListener("input", updateFirst, false);
colorWell.select();
function updateFirst(event) {
    defaultColor = event.target.value;
    $(".border-nome-site").css('background-color', event.target.value);
    $(".title-section i").css('color', event.target.value);
    $(".variable-color").css('color', event.target.value);
    $(".dado-pessoal").css('border-bottom', '5px solid '+event.target.value);
}

$(".top-anchor").mouseout(function(){
    $(".top-anchor").animate({
        color: 'white'
    }, 'fast', 'linear');
});

$(".top-anchor").mouseover(function(){
    $(".top-anchor").animate({
        color: defaultColor
    }, 'fast', 'linear');
});

$(".link-sobre-mim").mouseover(function(){
    console.log('slatt');
    $(".link-sobre-mim").attr('style', 'color: '+defaultColor+' !important');
});

$(".link-sobre-mim").mouseout(function(){
    console.log('slatt');
    $(".link-sobre-mim").attr('style', 'color: white !important');
});

$(".link-curriculo").mouseover(function(){
    console.log('slatt');
    $(".link-curriculo").attr('style', 'color: '+defaultColor+' !important');
});

$(".link-curriculo").mouseout(function(){
    console.log('slatt');
    $(".link-curriculo").attr('style', 'color: white !important');
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
        color: defaultColor
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

var $doc = $('html, body');
$('.menu-sections a').click(function() {
    var windowWidth = window.innerWidth;
    $(".open-color-sections").css('display', 'block');

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