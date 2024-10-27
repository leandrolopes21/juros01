let botaoCalcular = document.getElementById('btCalcular')
let capital = document.getElementById('capital')
let taxaJuros = document.getElementById('taxa')
let tempo = document.getElementById('tempo')

let respJuroSimples = document.getElementById('juroSimples')
let respValorSimples = document.getElementById('valorSimples')
let respJuroComposto = document.getElementById('juroComposto')
let respValorComposto = document.getElementById('valorComposto')
let respDiferenca = document.getElementById('diferenca')

function calculaJuros() {

    let juroSimples
    let juroComposto
    let montanteSimples
    let montanteComposto
    let diferenca

    let valorCapital = Number(capital.value)
    let valorTaxa = Number(taxaJuros.value)
    let valorTempo = Number(tempo.value)

    // Cálculo do Juro Simples

    juroSimples = valorCapital * (valorTaxa/100) * valorTempo
    montanteSimples = valorCapital + juroSimples

    // Cálculo do Juro Composto

    montanteComposto = valorCapital * Math.pow((1 + (valorTaxa/100)), valorTempo)
    juroComposto = montanteComposto - valorCapital

    diferenca = juroComposto - juroSimples

    // Área de apresentar as respostas

    respJuroSimples.innerHTML = `Juros simples: R$ ${juroSimples.toFixed(2)}`
    respValorSimples.innerHTML = `Montante com rendimentos: R$ ${montanteSimples.toFixed(2)}`
    respJuroComposto.innerHTML = `Juros compostos: R$ ${juroComposto.toFixed(2)}`
    respValorComposto.innerHTML = `Montante com rendimentos: R$ ${montanteComposto.toFixed(2)}`
    respDiferenca.innerHTML = `Diferença de rendimento entre juros R$ ${diferenca.toFixed(2)}`

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
    respDiferenca.innerHTML = ''

    let botaoLimpar = document.getElementById('btLimpar')
    botaoLimpar.parentNode.removeChild(botaoLimpar)
}