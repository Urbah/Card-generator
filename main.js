const tipoCarta      = document.getElementsByClassName('tipoCarta'),
      numero         = document.getElementById('numero'),
      numeroRandom   = num => total = Math.floor(Math.random()*num)+1,
      cantidadTipos  = numeroRandom(4),
      cantidadSuites = numeroRandom(13);
const determinarTipo = (Tipos) =>{
    switch (Tipos){
        case 1:
            cambiarTipoCarta(tipoCarta,'&spades;');
            break;
        case 2:
            cambiarTipoCarta(tipoCarta,'&clubs;');
            break;
        case 3:
            cambiarTipoCarta(tipoCarta,'&hearts;','red' );
            break;
        case 4:
            cambiarTipoCarta(tipoCarta,'&diams;','red' );
            break;
    }
}
const cambiarTipoCarta = (arr,nuevoContenido,color) => {
    for(let i = 0; i < arr.length; i++){
        arr[i].innerHTML= nuevoContenido;
        color ? arr[i].classList.toggle(color): false;
    }
}
const determinarSuite = (Suites) =>{
    if(Suites===1){
        numero.innerHTML= 'A';
    }
    else if(Suites <= 10 && Suites > 1){
        numero.innerHTML= Suites;
    }
    else if(Suites === 11){
        numero.innerHTML= 'J';
    }
    else if(Suites === 12){
        numero.innerHTML= 'Q';
    }
    else if(Suites === 13){
        numero.innerHTML= 'K';
    }
}
window.onload = determinarTipo(cantidadTipos), determinarSuite(cantidadSuites);