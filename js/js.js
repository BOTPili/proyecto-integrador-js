let boton = false;
$(function(){
    $('#botonConoceMas').click(function(){

      if(boton==false){
        $('.foto4').fadeOut(1100);
        $('.foto1').fadeOut(900);
        $('.foto5').fadeOut(500);
        $('.foto3').fadeOut(300);
        $('.foto2').fadeOut();
        boton = true;
      }else{
          $('.foto1').fadeIn();
          $('.foto2').fadeIn(300);
          $('.foto5').fadeIn(600);
          $('.foto3').fadeIn(900);
          $('.foto4').fadeIn(1100);
          boton = false;
          
      }
      
    });
  })

  var botones = document.getElementsByTagName('button');
  
     for(i=0; i < botones.length; i++){
        botones[i].onclick = function(){
            cambiarColor(this.innerHTML);
        }
     }

     function cambiarColor(color){
        document.querySelector('botonesCambioFondo').innerHTML = document.getElementById('fondo').style.background = color; 
    }