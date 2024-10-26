let botaoSimples = document.getElementById('btSimples')
let botaoComposto = document.getElementById('btComposto')
let capital = document.getElementById('capital')
let taxaJuros = document.getElementById('taxa')
let tempo = document.getElementById('tempo')

let resposta = document.getElementById('res')
let resposta1 = document.getElementById('res1')

function jurosSimples() {

    let juros
    let final

    let valorCapital = Number(capital.value)
    let valorTaxa = Number(taxaJuros.value)
    let valorTempo = Number(tempo.value)

    if (capital.value.trim() == '' || taxaJuros.value.trim() == '' || tempo.value.trim() == '') {

        resposta.innerHTML = 'Por favor, digite dados para o cálculo!'

        criaBotaoLimpar()

    } else {

        juros = valorCapital * (valorTaxa/100) * valorTempo
        final = valorCapital + juros

        resposta.innerHTML = `Montante final: R$ ${final.toFixed(2)} reais`
        resposta1.innerHTML = `Rendimento de juros: R$ ${juros.toFixed(2)} reais`

        criaBotaoLimpar()
    }    
    
}

function jurosCompostos() {

    let juros
    let montante

    let valorCapital = Number(capital.value)
    let valorTaxa = Number(taxaJuros.value)
    let valorTempo = Number(tempo.value)

    if (capital.value.trim() == '' || taxaJuros.value.trim() == '' || tempo.value.trim() == '') {

        resposta.innerHTML = 'Por favor, digite dados para o cálculo!'

        criaBotaoLimpar()

    } else {

        montante = valorCapital * Math.pow((1 + (valorTaxa/100)), valorTempo)
        juros = montante - valorCapital

        resposta.innerHTML = `Montante final: R$ ${montante.toFixed(2)} reais`
        resposta1.innerHTML = `Rendimento de juros: R$ ${juros.toFixed(2)} reais`

        criaBotaoLimpar()

    }    
}

function criaBotaoLimpar () {

    botaoSimples.disabled = true
    botaoComposto.disabled = true
    capital.disabled = true
    taxaJuros.disabled = true
    tempo.disabled = true

    let botaoLimpar = document.createElement('button')
    let div = document.getElementById('principal')
    botaoLimpar.textContent = 'Limpar'
    div.appendChild(botaoLimpar)
    botaoLimpar.setAttribute('id', 'btLimpar')
    botaoLimpar.addEventListener('click', limpar)

}

function limpar() {

    botaoSimples.disabled = false
    botaoComposto.disabled = false
    capital.disabled = false
    taxaJuros.disabled = false
    tempo.disabled = false

    capital.value = ''
    taxaJuros.value = ''
    tempo.value = ''

    resposta.innerHTML = ''
    resposta1.innerHTML = ''

    let botaoLimpar = document.getElementById('btLimpar')
    botaoLimpar.parentNode.removeChild(botaoLimpar)
}