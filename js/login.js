console.log('JS Cargado');
document.addEventListener('DOMContentLoaded',function(){
    console.log('Documento Cargado');
    
    var botonCerrar = document.getElementById('cerrarLogin');

    botonCerrar.addEventListener('click',function(){
        //Cierro / oculto caja de Login
        var cajaLogin = document.getElementById('cajaLogin');
        cajaLogin.style.display = 'none';
    
        //Cierro / oculto overlay
        var overlay = document.getElementsByClassName('overlay')[0];
        overlay.style.display = 'none';
    });
    
    var mostrarLogin = document.getElementById('doLogin');
    mostrarLogin.addEventListener('click',function(){
        //Muestro caja de Login
        var cajaLogin = document.getElementById('cajaLogin');
        cajaLogin.style.display = 'block';
    
        //Muestro overlay
        var overlay = document.getElementsByClassName('overlay')[0];
        overlay.style.display = 'block';
    });
});