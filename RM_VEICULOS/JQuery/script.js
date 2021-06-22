
//Menu mobile
$(function(){
    $('.menu-mobile').click(function(){
        $('.menu-mobile ul').toggle();
        console.log('funcionando')
    });
       
});

//Depoimento
$(document).ready(function(){
    $('#next').click(function(){
      if ($('.active').next('.depoimento').length) {
          $('.active').removeClass('active')
                      .next('.depoimento')
                      .addClass('active');
      }
    });
    $('#prev').click(function(){
      if ($('.active').prev('.depoimento').length) {
          $('.active').removeClass('active')
                      .prev('.depoimento')
                      .addClass('active');
      }
    });
});


//Button Saiba mais home
let irContato = document.querySelector(".contato");
document.getElementById("btn1").addEventListener("click", ()=>{
    irContato.scrollIntoView({behavior:"smooth", block:"center"});
});






