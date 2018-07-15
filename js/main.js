import { FormContact} from './form-contact.js'

export class Main {

    constructor () {
        this.oFormContact =  document.querySelector('#contact')
        this.oInputName = document.querySelector('#name')
        this.aMenu = document.querySelectorAll("nav#top-menu a")
        this.aSections = document.querySelectorAll("section")
        this.oOffsets = []

        this.scrollposicion()
    }

    scrollposicion() {
        this.aSections.forEach(
            (item) => {
                let cumulative =  this.cumulativeOffset(item);
                this.oOffsets['#'+item.id] = cumulative;
            }
        )
    }

    cumulativeOffset (element) {
        var top = 0;
        do {
            top += element.offsetTop || 0;
            element = element.offsetParent;
        } while(element);
        return top;
    };

    defineEventListeners() {
        this.oFormContact.addEventListener('submit', this.iniGuardarMenu)
        this.oFormContact.addEventListener('change', this.selectorDinamico)
    }

    iniGuardarMenu(oE) {
        oE.preventDefault()
        let form = new FormContact()
        if (form.validarDatos()){
            form.guardarDatos()
        }
        else{
            console.log("datos no validos")
        }
    }

    selectorDinamico(oE) {
        oE.preventDefault()
        let datos = document.querySelector('#selection')

        if (datos.options[datos.selectedIndex].value == "4"){
            let posicion
            posicion = +datos.options[datos.selectedIndex].value + 1
            let nuevoElemento = prompt('Introduce un nuevo valor','');
            let lista = document.getElementById("selection");
            lista.innerHTML += `<option value=${posicion}>${nuevoElemento}</option>`
        }
    }
}