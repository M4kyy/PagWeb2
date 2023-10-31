document.addEventListener("DOMContentLoaded", () => {

    window.onload = function () {
    
        const IMAGENES = [
            'sources2/tls-2-1.jpg',
            'sources2/tls-2-2.jpg',
            'sources2/tls-2-3.jpg'
        ];
        let posicionActual = 0;
        let $botonRetroceder = document.querySelector('#retroceder2');
        let $botonAvanzar = document.querySelector('#avanzar2');
        let $imagen = document.querySelector('#imagen2');
    
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
    
        function renderizarImagen () {
            $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
        }
    
    
        $botonAvanzar.addEventListener('click', pasarFoto);
        $botonRetroceder.addEventListener('click', retrocederFoto);
    
        renderizarImagen();
        } 
    
    });