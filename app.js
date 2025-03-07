'use strict'
function actualizarResultado(mensaje) {
    const resultado = document.getElementById('resultado');
    //resultado.innerHTML += `<p>${mensaje}</p>`;  // Agrega el mensaje sin borrar el contenido anterior
    resultado.insertAdjacentHTML('beforeend', `<p>${mensaje}</p>`);

}

    function botonEnviar(event) {
        event.preventDefault();
    
        const preguntaSeleccionada = document.getElementById('preguntas').value;
        document.querySelector('.contenido-select').style.display = 'none';
        actualizarResultado(`Tu eres un desarrollador "${preguntaSeleccionada}".`);

        if (preguntaSeleccionada === 'Front-End') {
            console.log('frontend');
            document.querySelector('.frontend-content').style.display = 'block';
        } else if (preguntaSeleccionada === 'Back-End') {
            console.log('backend');
            document.querySelector('.backend-content').style.display = 'block';
        }
    }
    
    function botonEnviar2(event){
        event.preventDefault();
        const frontendSeleccionado = document.getElementById('frontend').value;
        document.getElementById('frontend-content').style.display = 'none';
        actualizarResultado(`Sabes el lenguaje de programacion "${frontendSeleccionado}".`);
    
        if(frontendSeleccionado === 'REACT' || frontendSeleccionado === 'VUE'){
            console.log(frontendSeleccionado);
            document.querySelector('.fullstackContent').style.display= 'block';
        }
    }
    
    function botonEnviar3(event){
        event.preventDefault();
        const backendSeleccionado = document.getElementById('backend').value;
        document.querySelector('.backend-content').style.display= 'none';
        actualizarResultado(`Sabes el lenguaje de programación "${backendSeleccionado}"`);
    
        if(backendSeleccionado === 'C#' || backendSeleccionado === 'JAVA'){
            console.log(backendSeleccionado);
            document.querySelector('.fullstackContent').style.display= 'block';   
        }
    }
    
    function botonEnviar4(event){
        event.preventDefault();
        const fullstackContentSelect = document.getElementById('fullstack').value;
        document.querySelector('.fullstackContent').style.display = 'none';
    
        if(fullstackContentSelect === 'Seguir especializándose en el área elegida' || fullstackContentSelect === 'Desarrollarse para convertirse en Fullstack'){
           document.querySelector('.prenguntafinal').style.display= 'block';
            console.log(fullstackContentSelect);
            actualizarResultado(`Prefieres "${fullstackContentSelect}".`);
        }
    }
    function botonEnviar5(event){
        event.preventDefault();

        const botonEnviar5Select = document.getElementById('preguntaFinal').value;
        const resultado = document.querySelector('.mostrarMensaje');
        // resultado.style.color = 'red';
       

        if(botonEnviar5Select.trim() ===''){
            const error = document.getElementById('error');
            error.style.color = 'red';
            console.log('Debes ingresar algo.');
            error.innerHTML= 'Debes ingresar algo. El campo no puede estar vacio.';
            document.querySelector('.error').style.display= 'block';
        }else{
            document.querySelector('.prenguntafinal').style.display= 'none';
            actualizarResultado(`!WAW! Que bueno que tienes en tu mente aprender más tecñología. "${botonEnviar5Select}" es una buena seleccion`);
            console.log(`!WAW! Que bueno que tienes en tu mente aprender más tecñología. "${botonEnviar5Select}" es una buena seleccion`);
            // resultado.innerHTML= botonEnviar5Select;
            document.getElementById('resultado').style.display= 'block';
        }
    }
