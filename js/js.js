$(function(){
    $('#botonConoceMas').click(function(){
      $('#imagenes').toggle();
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