//Menu mobile.
$(function(){
    $('.menu-mobile').click(function(){
        $('.menu-mobile ul').toggle();
        console.log('funcionando')
    });
       
});

//Button Entre em contato.
let irContato = document.querySelector(".contato");
document.getElementById("btn1").addEventListener("click", ()=>{
    irContato.scrollIntoView({behavior:"smooth", block:"center"});
});

//slides.
$(document).ready(function(){
    $('#next').click(function(){
      if ($('.active').next('.imagem').length) {
          $('.active').removeClass('active')
                      .next('.imagem')
                      .addClass('active');
      }
    });
    $('#prev').click(function(){
      if ($('.active').prev('.imagem').length) {
          $('.active').removeClass('active')
                      .prev('.imagem')
                      .addClass('active');
      }
    });
});

//bordas das imagems.
$(document).ready(function(){
    $('#next').click(function(){
      if ($('.imageAtual').next('.border').length) {
          $('.imageAtual').removeClass('imageAtual')
                      .next('.border')
                      .addClass('imageAtual');
      }
    });
    $('#prev').click(function(){
      if ($('.imageAtual').prev('.border').length) {
          $('.imageAtual').removeClass('imageAtual')
                      .prev('.border')
                      .addClass('imageAtual');
      }
    });
});