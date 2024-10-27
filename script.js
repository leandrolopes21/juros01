let botaoCalcular = document.getElementById('btCalcular')
let capital = document.getElementById('capital')
let taxaJuros = document.getElementById('taxa')
let tempo = document.getElementById('tempo')

let respJuroSimples = document.getElementById('juroSimples')
let respValorSimples = document.getElementById('valorSimples')
let respJuroComposto = document.getElementById('juroComposto')
let respValorComposto = document.getElementById('valorComposto')

function calculaJuros() {

    let juroSimples
    let juroComposto
    let montanteSimples
    let montanteComposto

    let valorCapital = Number(capital.value)
    let valorTaxa = Number(taxaJuros.value)
    let valorTempo = Number(tempo.value)

    // Cálculo do Juro Simples

    juroSimples = valorCapital * (valorTaxa/100) * valorTempo
    montanteSimples = valorCapital + juroSimples

    // Cálculo do Juro Composto

    montanteComposto = valorCapital * Math.pow((1 + (valorTaxa/100)), valorTempo)
    juroComposto = montanteComposto - valorCapital

    // Área de apresentar as respostas

    respJuroSimples.innerHTML = `Rendimento calculado a juros simples R$ ${juroSimples}`
    respValorSimples.innerHTML = `Valor total com rendimentos R$ ${montanteSimples}`
    respJuroComposto.innerHTML = `Rendimento calculado a juros compostos R$ ${juroComposto}`
    respValorComposto.innerHTML = `Valor total com rendimentos R$ ${montanteComposto}`

    criaBotaoLimpar()
    
}

function criaBotaoLimpar () {

    botaoCalcular.disabled = true
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

    botaoCalcular.disabled = false
    capital.disabled = false
    taxaJuros.disabled = false
    tempo.disabled = false

    capital.value = ''
    taxaJuros.value = ''
    tempo.value = ''

    respJuroSimples.innerHTML = ''
    respValorSimples.innerHTML = ''
    respJuroComposto.innerHTML = ''
    respValorComposto.innerHTML = ''

    let botaoLimpar = document.getElementById('btLimpar')
    botaoLimpar.parentNode.removeChild(botaoLimpar)
}