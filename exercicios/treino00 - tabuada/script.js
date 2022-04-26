function calcular() {
let ntxt = document.querySelector('input#ntxt')
let n = Number(ntxt.value)
let lista = document.querySelector('select#lista')

    if (ntxt.value.length == 0) {
        lista.innerHTML = ""
        alert('Insira algum número!')
    }
    else if (n > 1000000) {
        lista.innerHTML = ""
        alert('Número muito grande!')
    }
    else { 
        lista.innerHTML = ""
        for (i = 0; i <= 10; i++){
            
            var opt = document.createElement('option')
            opt.setAttribute('id', 'numero')
            opt.innerHTML = `${n}*${i}= ${n*i}`
            lista.appendChild(opt)
        }
    }
}
function limpar() { 
    lista.innerHTML = ""
}