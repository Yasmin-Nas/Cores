'use strict'

function mudarCor (){
    const nomeCor = document.getElementById('cor').value.toUpperCase()
    const body = document.getElementById ('body')
    body.style.backgroundColor = `#${nomeCor}`

    let cor = '#ffffff'
    
    if (nomeCor == 'VERMELHO'){
        cor = '#FF0000'
    }else if (nomeCor == 'VERDE'){
        cor = '#00FF00'
    }else if (nomeCor == 'AZUL'){
        cor = '#0000FF'
    }else if (nomeCor == 'AMARELO'){
        cor = '#FFFF00'
    }
    //document.body.style.backgroundColor = '#${cor}'
    document.documentElement.style.setProperty('--bg-color',cor)
}

const botao = document.getElementById('Aplicar').addEventListener('click',mudarCor)
