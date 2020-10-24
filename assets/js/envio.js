$('.form-contato').submit(function(e){
    e.preventDefault();
    var nome = $('.nome').val();
    var email = $('.email').val();
    var mensagem = $('.mensagem').val();
    
    $('.nome').val("");
    $('.email').val("");
    $('.mensagem').val("");

    $.ajax({
        url: 'assets/php/envio.php', 
        type: 'post',
        data: {
            nome: nome,
            email: email,
            mensagem: mensagem
        },
        success: function(resposta){
            if(resposta == "true"){ 
                $(".fundo").css('display', 'block');
                $(".container-aviso-email").css('display', 'block');
                $(".fundo").animate({
                    opacity: '0.8'
                });
            }else {
                console.log('n foi');
            }
        }
    });
    return false;
});