const formulario = document.getElementById('formulario-curso');
const inputCurso = document.getElementById('curso');
const inputProfesor = document.getElementById('profesor');
const inputPrecio = document.getElementById('precio');
const inputCiudad = document.getElementById('ciudad');
const inputCupo = document.getElementById('cupo');
const mensajeCurso = document.getElementById('mensaje-curso')
const btnEliminar = document.getElementById('borrar');


formulario.addEventListener('submit', (e)=>{
    e.preventDefault();

    const curso = inputCurso.value.trim();
    const profesor = inputProfesor.value.trim();
    const precio = inputPrecio.value.trim();
    const ciudad = inputCiudad.value.trim();
    const cupo = inputCupo.value.trim();

    if(curso===""||profesor===""||precio===""||ciudad===""||cupo===""){
        alert("por favor completa todos los campos");
        return;
    }
    // en el ejercicio anterior era un solo valor, ahora estamos alimentando un objeto con sus diferentes claves y valor
    const nuevoCurso = {

        curso: curso,
        profesor: profesor,
        precio: precio,
        ciudad: ciudad,
        cupo: cupo


    }

    // Capturamos el arreglo existente en el local storage o lo creamos vacio si no existe previamente

    const cursosGuardados = JSON.parse(localStorage.getItem('cursos')) || [];

    // agregamos al arreglo [] el curso {} 
    // agregamos el arreglo nuevoCurso en cursos guardados

    cursosGuardados.push(nuevoCurso);

    localStorage.setItem('cursos', JSON.stringify(cursosGuardados));

    localStorage.setItem("curso", JSON.stringify(nuevoCurso));
    formulario.reset();

})

document.addEventListener('DOMContentLoaded', () => {
    const cursoCreado = localStorage.getItem('curso');

    if (cursoCreado) {
        const objetoCurso = JSON.parse(cursoCreado);
        mensajeCurso.innerHTML = 
            "Curso: " + objetoCurso.curso + "<br>" +
            "Profesor: " + objetoCurso.profesor + "<br>" +
            "Precio: " + objetoCurso.precio + "<br>" +
            "Ciudad: " + objetoCurso.ciudad + "<br>" +
            "Cupo: " + objetoCurso.cupo;
    }
});

btnEliminar.addEventListener('click', ()=>{
    localStorage.removeItem('curso');
    mensajeCurso.innerHTML="no hay cursos";
})




