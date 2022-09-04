$(function(){
    $('#botonConoceMas').click(function(){
      $('#imagenes').toggle();
    });
  })

  var botones = document.getElementsByTagName('button');

    function cambiarColor(color){
    document.querySelector('botonesCambioFondo').innerHTML= color;
    document.querySelector('f0ondo').style.background = color;
    }
    
    
     for(i=0; i < botones.length; i++){
        botones[i].onclick = function(){
            cambiarColor(this.innerHTML);
        }
     }