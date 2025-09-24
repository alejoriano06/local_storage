const titulo2 = document.getElementById('usuarioCreado');



document.addEventListener('DOMContentLoaded', ()=>{
    const tituloo2=localStorage.getItem("usuario");
    titulo2.textContent="hola " + tituloo2 + " este es tu perfil";
    
})