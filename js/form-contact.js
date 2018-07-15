export class FormContact {
    constructor() {
        // elementos del DOM
        this.oInputName = document.querySelector('#name')
        this.oInputEmail = document.querySelector('#email')
        this.oSelectSeleccion = document.querySelector('#selection')
        this.oInputPhone = document.querySelector('#phone')
        this.oTextMessage = document.querySelector('#message')

        this.oData = {
            name: '',
            email: '',
            seleccion: '',
            phone: '',
            message: ''
        }
    }

    guardarDatos() {
        this.oData = {
            name:  this.oInputName.value,
            email: this.oInputEmail.value ,
            seleccion: this.oSelectSeleccion.options[this.oSelectSeleccion.selectedIndex].value,
            phone: this.oInputPhone.value,
            message: this.oTextMessage.value
        }
    }

    validarDatos(){
        let valor = this.oInputPhone.value
        let patt=new RegExp("^[1-9]{10}$")
        let contador = 0

        if( isNaN(valor) || valor.length == 0 || patt.test(valor) ) {
            let element = document.getElementById("phone")
            element.classList.add("validaCorrecta")
            contador++;
        }
        else{
            let element = document.getElementById("phone")
            element.classList.remove("validaCorrecta")
        }
        
        let valorSelect = this.oSelectSeleccion.options[this.oSelectSeleccion.selectedIndex].value
        
        if(valorSelect == '1') {
            let element = document.getElementById("selection")
            element.classList.add("validaCorrecta")
            contador++;
        }
        else{
            let element = document.getElementById("selection")
            element.classList.remove("validaCorrecta")
        }

        let comentario = this.oTextMessage.value
        if (comentario.split(" ").length > 150){
            contador++;
            let element = document.getElementById("message")
            element.classList.add("validaCorrecta")
        }
        else{
            let element = document.getElementById("message")
            element.classList.remove("validaCorrecta")
        }

        if (contador > 0) {
            return false;    
        }
        else{
            return true
        }
    }

}