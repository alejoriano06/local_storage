const formulario = document.getElementById('formulario');
const input = document.getElementById('nombre');
const saludo = document.getElementById('saludo');
const btnEliminar = document.getElementById('borrar');
const titulo2 = document.getElementById('usuarioCreado');



document.addEventListener('DOMContentLoaded', ()=>{
    const tituloo2=localStorage.getItem("usuario");
    titulo2.textContent="hola " + tituloo2 + " este es tu perfil";
    
})

formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    const nombre = input.value.trim();

    if(nombre===""){
        alert("julian es gay, vulelva a ingresar")
        return;
    }

    localStorage.setItem("usuario", nombre);
    
    saludo.textContent="bienvenido " + nombre;
    input.value = "";

})

document.addEventListener("DOMContentLoaded", ()=>{

    const usuarioGuardado = localStorage.getItem("usuario");
    if(usuarioGuardado){
        saludo.textContent="bienvenido usuario indefinido"
    }
    
})

btnEliminar.addEventListener('click', ()=>{

    localStorage.removeItem("usaurio");
    saludo.textContent="bienvenido usuario indefinido"
});

document.addEventListener('DOMContentLoaded', ()=>{
    
    const titulo2=localStorage.getItem("usurio");
    titulo2.textContent="hola" + titulo2 + "este es tu perfil"
    
})

