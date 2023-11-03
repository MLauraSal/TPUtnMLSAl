const hamburguesa = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const enlaces = document.querySelectorAll('.navegacion a');

document.addEventListener('DOMContentLoaded',()=>{
    mostrarMenu();
    cerrarMenu();
    
});

function mostrarMenu(){
    hamburguesa.addEventListener('click',()=>{
        navegacion.classList.toggle('ocultar');

    }); 
}

function cerrarMenu(){
    enlaces.forEach(enlace =>{
        enlace.addEventListener('click',(e)=>{
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.href.value);
            cambioSeccion(seccion);
            if(e.target.tagName === 'A'){
                navegacion.classList.add('ocultar');
            }
        });
    });
}

function cambioSeccion(seccion){
    seccion.scrollIntoView({
        behavior:'smooth'
    })
};


document.getElementById('tipo_seguro').addEventListener('change', function() {
    var precioSeguro = document.getElementById('precio');
    var tipoSeguro = this.value;
    
    switch (tipoSeguro) {
        case 'Basico':
            precioSeguro.innerText = '500';
            break;
        case 'Intermedio':
            precioSeguro.innerText = '1000';
            break;
        case 'Premium':
            precioSeguro.innerText = '1500';
            break;
    }
});