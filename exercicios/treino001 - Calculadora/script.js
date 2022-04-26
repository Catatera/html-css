var txtn1 = document.querySelector('input#txtn1')
var txtn2 = document.querySelector('input#txtn2')
var n1 = Number(txtn1.value)
var n2 = Number(txtn2.value)
var select = document.querySelector('select#res')
var res = document.createElement('h3')
var localres = document.querySelector('div#operacoes')

function adicao() {

    if (txtn1.value.length == 0 || txtn2.value.length == 0) {  
        window.alert('Erro')
        res.innerHTML = ""
    }
    else {
        res.innerHTML = ""
        res.innerHTML = Number(txtn1.value) + Number(txtn2.value)
        localres.appendChild(res)
    }
}

function subtracao() { 
    if (txtn1.value.length == 0 || txtn2.value.length == 0) {
        window.alert('Erro')
        res.innerHTML = ""
    }
    else { 
        res.innerHTML = ""
        res.innerHTML = Number(txtn1.value) - Number(txtn2.value)
        localres.appendChild(res)
    }
}

function multiplicacao() { 
    if (txtn1.value.length == 0 || txtn2.value.length == 0) {
        window.alert('Erro')
        res.innerHTML = ""
    }
    else { 
        res.innerHTML = ""
        res.innerHTML = Number(txtn1.value) * Number(txtn2.value)
        localres.appendChild(res)
    }
}

function divisao() { 
    if (txtn1.value.length == 0 || txtn2.value.length == 2) {
        window.alert('Erro')
        res.innerHTML = ""
    }
    else { 
        res.innerHTML = ""
        res.innerHTML = Number(txtn1.value) / Number(txtn2.value)
        localres.appendChild(res)
    }
}

function potencia() { 
    if (txtn1.value.length == 0 || txtn2.value.length == 2) {
        window.alert('Erro')
        res.innerHTML = ""
    }
    else { 
        res.innerHTML = ""
        res.innerHTML = Number(txtn1.value) ** Number(txtn2.value)
        localres.appendChild(res)
    }
}

function adicionar1() { 
    let num1 = document.querySelector('input#um')
    txtn1.value += num1.value
}
function adicionar2() { 
    let num2 = document.querySelector('input#dois')
    txtn1.value += num2.value
}
function adicionar3() { 
    let num3 = document.querySelector('input#tres')
    txtn1.value += num3.value
}
function adicionar4() { 
    let num4 = document.querySelector('input#quatro')
    txtn1.value += num4.value
}
function adicionar5() { 
    let num5 = document.querySelector('input#cinco')
    txtn1.value += num5.value
}
function adicionar6() { 
    MouseEvent
    let num6 = document.querySelector('input#seis')
    txtn1.value += num6.value
}
function adicionar7() { 
    let num7 = document.querySelector('input#sete')
    txtn1.value += num7.value
}
function adicionar8() { 
    let num8 = document.querySelector('input#oito')
    txtn1.value += num8.value
}
function adicionar9() { 
    let num9 = document.querySelector('input#nove')
    txtn1.value += num9.value
}
function adicionar0() { 
    let num0 = document.querySelector('input#zero')
    txtn1.value += num0.value
}

/*   com botões 

    var numero = document.querySelector('input#n') 
    var a = numero.value
    alert(a)
 */