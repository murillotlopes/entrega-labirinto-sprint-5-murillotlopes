
let tabuleiro = document.createElement('div')
tabuleiro.id = 'tabuleiro'

document.addEventListener('keydown', (e) =>{
    jogada(e)
})



const body = document.querySelector('body')

body.appendChild(tabuleiro)

let l = 9
let c = 0

function criacaoTabuleiro(l,c){


    for(let i=0; i<15; i++){

        for(let j=0; j<21; j++){

            quadrasTabuleiro(i, j, map[i][j], l, c)

        }
    }
}

criacaoTabuleiro(l,c)

function quadrasTabuleiro(i, j, mapQ, l, c){
    const parede = document.createElement('div')
    let trilha = document.createElement('div')
    let jogador = document.createElement('div')

    parede.style.backgroundColor = 'blue'
    jogador.style.backgroundColor = 'red'
    trilha.style.backgroundColor = 'white'
    parede.id = 'wall'
    trilha.id = 'trilha'
    jogador.id = 'jogador'

    if(map[i][j] === 'W'){

        return tabuleiro.appendChild(parede)

    }else if(i === l && j === c){
        if(map[i][j] === 'S'){
            jogador.innerText = 'start'
        }
        if(map[i][j] === 'F'){
            jogador.innerText = 'end'
        }

        return tabuleiro.appendChild(jogador)

    }else if (map[i][j] === ' ' || map[i][j] === 'S' || map[i][j] === 'F'){
        if(map[i][j] === 'S'){
            trilha.innerText = 'start'
        }
        if(map[i][j] === 'F'){

            trilha.innerText = 'end'
        }
        return tabuleiro.appendChild(trilha)

    }

}



const venceu = document.createElement('div')
let msg = '<p>Parabéns!!!<br>Você venceu</p>'
let restart = document.createElement('button')

restart.id = restart
venceu.id = 'venceu'
venceu.innerHTML = msg
restart.innerText = 'Jogar de novo'
venceu.appendChild(restart)


function ganhou(l,c){

    if(l === 8 && c === 20){
        venceu.style.display = 'flex'
        body.appendChild(venceu)

        restart.addEventListener('click', recomecar)
    }

}

function recomecar(){
    venceu.style.display = 'none'

    tabuleiro.innerHTML = ''
    criacaoTabuleiro(9,0)
    l = 9
    c = 0
}

function jogada(e){
    const direcao = e.key
    //console.log(direcao)

    if(direcao === 'ArrowRight'){
        
        if(map[l][c+1] === ' ' || map[l][c+1] === 'S' || map[l][c+1] === 'F'){
            
            tabuleiro.innerHTML = ''

            c++
            
            criacaoTabuleiro(l, c)
            ganhou(l,c)
        }
    }else if(direcao === 'ArrowLeft'){
        
        if(map[l][c-1] === ' ' || map[l][c-1] === 'S' || map[l][c-1] === 'F'){
            
            tabuleiro.innerHTML = ''

            c--
            
            criacaoTabuleiro(l, c)
        }
    }else if(direcao === 'ArrowUp'){
        
        if(map[l-1][c] === ' ' || map[l-1][c] === 'S' || map[l-1][c] === 'F'){
            
            tabuleiro.innerHTML = ''

            l--
            
            criacaoTabuleiro(l, c)
        }
    }else if(direcao === 'ArrowDown'){
        
        if(map[l+1][c] === ' ' || map[l+1][c] === 'S' || map[l+1][c] === 'F'){
            
            tabuleiro.innerHTML = ''

            l++

            criacaoTabuleiro(l, c)
            
        }
    }
}

const regras = document.createElement('div')
regras.id = 'regras'
const listRegras = document.createElement('p')
listRegras.id = 'listRegras'
const start = document.createElement('button')
start.id = 'start'
start.innerText = 'Iniciar jogo'


listRegras.innerHTML = '<p>Regras do Jogo<br>Com as setas do teclado, mova o bloco vermelho do "start" até "end" passando apenas pelos espaços em branco</p>'
regras.appendChild(listRegras)
regras.appendChild(start)
body.appendChild(regras)

start.addEventListener('click', ()=>{
    regras.style.display = 'none'
})

