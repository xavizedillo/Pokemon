document.getElementById('pokemonForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre');
    const region = document.getElementById('region');
    const iniciales = document.getElementsByName('inicial');
    const motivacion = document.getElementById('motivacion');
    const terminos = document.getElementById('terminos');

    let formularioValido = true;

    const reglaMayuscula = /^[A-Z]/;
    if (reglaMayuscula.test(nombre.value.trim()) && nombre.value.trim().length >= 3) {
        nombre.closest('.grupo-formulario').classList.remove('invalido');
    } else {
        nombre.closest('.grupo-formulario').classList.add('invalido');
        formularioValido = false;
    }

    if (region.value !== "") {
        region.closest('.grupo-formulario').classList.remove('invalido');
    } else {
        region.closest('.grupo-formulario').classList.add('invalido');
        formularioValido = false;
    }

    let inicialSeleccionado = "";
    for (const radio of iniciales) {
        if (radio.checked) {
            inicialSeleccionado = radio.value;
            break;
        }
    }

    if (inicialSeleccionado !== "") {
        iniciales[0].closest('.grupo-formulario').classList.remove('invalido');
    } else {
        iniciales[0].closest('.grupo-formulario').classList.add('invalido');
        formularioValido = false;
    }

    if (motivacion.value.trim().length > 0) {
        motivacion.closest('.grupo-formulario').classList.remove('invalido');
    } else {
        motivacion.closest('.grupo-formulario').classList.add('invalido');
        formularioValido = false;
    }

    if (terminos.checked) {
        terminos.closest('.grupo-formulario').classList.remove('invalido');
    } else {
        terminos.closest('.grupo-formulario').classList.add('invalido');
        formularioValido = false;
    }

    if (formularioValido) {
        const tabla = document.getElementById('tablaEntrenadores');
        const cuerpoTabla = document.getElementById('cuerpoTabla');
        const mensajeVacio = document.getElementById('mensajeVacio');

        const nuevaFila = document.createElement('tr');
        nuevaFila.innerHTML = `
            <td>${nombre.value.trim()}</td>
            <td>${region.value}</td>
            <td>${inicialSeleccionado}</td>
            <td>${motivacion.value.trim()}</td>
        `;

        cuerpoTabla.appendChild(nuevaFila);

        mensajeVacio.style.display = 'none';
        tabla.style.display = 'table';

        document.getElementById('pokemonForm').reset();
    }
});