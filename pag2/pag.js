/*document.addEventListener("DOMContentLoaded", () => {

    window.onload = function () {
    
        const IMAGENES = [
            '../sources2/tls1/tls-1-2.jpg',
            '../sources2/tls1/tls-1-1.jpg',
            '../sources2/tls1/tls-1-3.jpg'
        ];
        let posicionActual = 0;
        let $botonRetroceder = document.querySelector('#retroceder');
        let $botonAvanzar = document.querySelector('#avanzar');
        let $imagen = document.querySelector('#imagen');
    
        function pasarFoto() {
            if(posicionActual >= IMAGENES.length - 1) {
                posicionActual = 0;
            } else {
                posicionActual++;
            }
            renderizarImagen();
        }
    
        function retrocederFoto() {
            if(posicionActual <= 0) {
                posicionActual = IMAGENES.length - 1;
            } else {
                posicionActual--;
            }
            renderizarImagen();
        }
    
        function renderizarImagen() {
            $imagen.setAttribute('src', IMAGENES[posicionActual]);
        }
    
    
        $botonAvanzar.addEventListener('click', pasarFoto);
        $botonRetroceder.addEventListener('click', retrocederFoto);
    
        renderizarImagen();
        } 
    
    });*/