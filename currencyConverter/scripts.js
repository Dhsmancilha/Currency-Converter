console.log("HTML and JavaScript comunication: OK")

/*Mapeia o botão para uso na variável "convertButton"*/
const convertButton = document.querySelector(".convert-button")

/*Mapeia a escolha da moeda de entrada na variável "currencyInputSelect*/
const currencyInputSelect = document.querySelector(".currency-Input")

/*Mapeia a escolha da moeda de saída na variável "currencyOutputSelect*/
const currencyOutputSelect = document.querySelector(".currency-Output")

/*
    Futuramente estas variáveis receberão os valores monetários atualizados
    no momento do uso da página de conversão.
*/
let dolar = 5.56
let euro = 6.54
let libra = 7.53
let bitcoin = 654139.18
let real = 1

/*Esta variável será utilizada para mostrar o valor a ser convertido no HTML*/
const valueToConvert = document.querySelector(".value-to-convert")

/*Essa variável atualiza e mostra o valor corvertido no HTML*/
const ConvertedValue = document.querySelector(".converted-value")

/*
    Quando houver troca na moeda de entrada, chama função "changeInpuFlag
    para trocar a imagem da bandeira.
*/
currencyInputSelect.addEventListener("change", changeInputFlag)

/*
    Quando houver troca na moeda de saída, chama a função "changeOutputFlag"
    para trocar a imagem da bandeira.
*/
currencyOutputSelect.addEventListener("change", changeOutputFlag)

/*
    Quando houver troca de moeda de entrada, a função "valueToConvert"
    é chamada para mudar o valor da variável de conversão "currency"
*/
currencyInputSelect.addEventListener("change", valuesToConvert)

/*
    Quando houver troca de moeda de saída, a função "convertValues"
    é chamada para formatar as unidades das respectivas moedas escolhidas,
    de entrada e saída, mostrando o valor digitado pelo usuário e também
    o resultado da conversão. 
*/
currencyInputSelect.addEventListener("change",convertValues)

/*
    Quando usuário clicar no botão "convert", a função "convertValues"
    é chamada para executar todos os cálculos.
*/
convertButton.addEventListener("click", convertValues)

/*
    Se o usuário não preencher nada e clicar, a função "showMessege"
    é chamada para exibir uma mensagem de alerta ao usuário.
*/
convertButton.addEventListener("click", showMessege)

/*
    Estas variáveis foram declaradas globalmente para não precisar
    declarar dentro das funções e de maneira repetitiva. O site 
    inicia-se por default na conversão de Real para Dólar.
*/
let currency = 1 // Valor do Real
let fromInputCurrencyValue = 5.56 //Valor de 1 Dolar

function showMessege()
{
    fromInputCurrencyValue = document.querySelector(".inputData").value
    if(fromInputCurrencyValue==0)
    {
        alert("The value to convert is empty")
    }
}

function valuesToConvert()
{
    /* "fromInputCurrencyValve recebe os valores digitados pelo usuário*/
    fromInputCurrencyValue = document.querySelector(".inputData").value
    
    /**/
    if(currencyInputSelect.value=="dolar")
    {
        currency = 5.56
    }

    if(currencyInputSelect.value=="euro")
    {
        currency = 6.54
    }

    if(currencyInputSelect.value=="libra")
    {
        currency = 7.53
    }

    if(currencyInputSelect.value=="bitcoin")
    {
        currency = 654139.18
    }

    if(currencyInputSelect.value=="real")
    {
        currency = 1
    }
}

function convertValues()
{
    /*A variável "fromInputCurrencyValue" recebe o valor digitado pelo usuário*/
    fromInputCurrencyValue = document.querySelector(".inputData").value
        
    /*
        Condicional para escrever o número digitado pelo usuário de maneira
        já formatada logo abaixo do ícone da bandeira da moeda escolhida.
    */
    if(currencyInputSelect.value=="dolar")
    {        
        valueToConvert.innerHTML = 
        new Intl.NumberFormat("en-US",{style:"currency", currency:"USD"}).
        format(fromInputCurrencyValue)
    }

    if(currencyInputSelect.value=="euro")
    {        
        valueToConvert.innerHTML = 
        new Intl.NumberFormat("de-DE",{style:"currency", currency:"EUR"}).
        format(fromInputCurrencyValue)
    }

    if(currencyInputSelect.value=="libra")
    {        
        valueToConvert.innerHTML = 
        new Intl.NumberFormat("en-GB",{style:"currency", currency:"GBD"}).
        format(fromInputCurrencyValue)
    }

    if(currencyInputSelect.value=="bitcoin")
    {        
        valueToConvert.innerHTML = 
        new Intl.NumberFormat("en-US",{style:"currency", currency:"XBT"}).
        format(fromInputCurrencyValue)
    }

    if(currencyInputSelect.value=="real")
    {        
        valueToConvert.innerHTML = 
        new Intl.NumberFormat("pt-BR",{style:"currency", currency:"BRL"}).
        format(fromInputCurrencyValue)
    }
        
    /*
        Condicional para escrever o resultado da conversão de maneira
        já formatada logo abaixo do ícone da bandeira da moeda escolhida.
    */
    if(currencyOutputSelect.value=="dolar")
    {
        ConvertedValue.innerHTML = 
        new Intl.NumberFormat("en-US",{style:"currency", currency:"USD"}).
        format(fromInputCurrencyValue*(currency/dolar))
    }

    if(currencyOutputSelect.value=="euro")
    {
        ConvertedValue.innerHTML = 
        new Intl.NumberFormat("de-DE",{style:"currency", currency:"EUR"}).
        format(fromInputCurrencyValue*(currency/euro))
    }

    if(currencyOutputSelect.value=="libra")
    {
        ConvertedValue.innerHTML = 
        new Intl.NumberFormat("en-GB",{style:"currency", currency:"GBD"}).
        format(fromInputCurrencyValue*(currency/libra))
    }

    if(currencyOutputSelect.value=="bitcoin")
    {
        ConvertedValue.innerHTML = 
        new Intl.NumberFormat("en-US",{style:"currency", currency:"XBT"}).
        format(fromInputCurrencyValue*(currency/bitcoin))
    }

    if(currencyOutputSelect.value=="real")
    {
        ConvertedValue.innerHTML = 
        new Intl.NumberFormat("pt-BR",{style:"currency", currency:"BRL"}).
        format(fromInputCurrencyValue*(currency/real))
    }
}

/* 
    Essa função (changeInputFlag()) é chamada para trocar 
    a bandeira do país da moeda de entrada e o nome dela.
*/
function changeInputFlag()
{
    const currencyName = document.querySelector(".currency-Name-In")
    const imgFlagIn = document.querySelector(".img-Flag-In")
        
    console.log(currencyInputSelect.value)

    if(currencyInputSelect.value=="dolar")
    {
        currencyName.innerHTML = "US Dolar"
        imgFlagIn.src = './assets/dolar.png'
    }

    if(currencyInputSelect.value=="euro")
    {
        currencyName.innerHTML = "Euro"
        imgFlagIn.src = './assets/euro.png'
        console.log("Entrou no EURO")
    }

    if(currencyInputSelect.value=="libra")
    {
        currencyName.innerHTML = "Pound Sterling"
        imgFlagIn.src = './assets/libra.png'
    }

    if(currencyInputSelect.value=="bitcoin")
    {
        currencyName.innerHTML = "Bitcoin"
        imgFlagIn.src = './assets/bitcoin.png'
    }

    if(currencyInputSelect.value=="real")
    {
        currencyName.innerHTML = "Real"
        imgFlagIn.src = "./assets/real.png"
    }
    
    /*
        Caso o usuário mude a moeda  e já tenha algum valor no
        input, a função convertValues é chamada novamente para
        atualizar.
    */
    convertValues() 
}

/* 
    Essa função (changeOutputFlag()) é chamada para trocar 
    a bandeira do país da moeda de saída e o nome dela.
*/
function changeOutputFlag()
{
    const currencyName = document.querySelector(".currency-Name")
    const imgFlag = document.querySelector(".img-Flag")
    
    console.log("Currency changed")

    if(currencyOutputSelect.value=="dolar")
    {
        currencyName.innerHTML = "US Dolar"
        imgFlag.src = './assets/dolar.png'
    }

    if(currencyOutputSelect.value=="euro")
    {
        currencyName.innerHTML = "Euro"
        imgFlag.src = './assets/euro.png'
    }

    if(currencyOutputSelect.value=="libra")
    {
        currencyName.innerHTML = "Pound Sterling"
        imgFlag.src = './assets/libra.png'
    }

    if(currencyOutputSelect.value=="bitcoin")
    {
        currencyName.innerHTML = "Bitcoin"
        imgFlag.src = './assets/bitcoin.png'
    }

    if(currencyOutputSelect.value=="real")
    {
        currencyName.innerHTML = "Real"
        imgFlag.src = "./assets/real.png"
    }
    
    /*
        Caso o usuário mude a moeda  e já tenha algum valor no
        input, a função convertValues é chamada novamente para
        atualizar.
    */
    convertValues() 
}




