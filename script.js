
const tabuleiro = document.createElement('div')
tabuleiro.id = 'tabuleiro'

document.addEventListener('keydown', (e) =>{
    jogada(e)
})

const body = document.querySelector('body')

body.appendChild(tabuleiro)

function criacaoTabuleiro(){


    for(let i=0; i<15; i++){

        for(let j=0; j<21; j++){

            quadrasTabuleiro(i, j, map[i][j])

        }
    }
}

criacaoTabuleiro()

function quadrasTabuleiro(i, j, mapQ){
    const parede = document.createElement('div')
    let trilha = document.createElement('div')

    parede.style.backgroundColor = 'blue'
    parede.id = 'wall'
    trilha.id = 'trilha'

    if(map[i][j] === 'W'){

        return tabuleiro.appendChild(parede)

    }else if (map[i][j] === ' '){

        return tabuleiro.appendChild(trilha)

    }else if(map[i][j] === 'S'){
        trilha.innerText = 'start'
        return tabuleiro.appendChild(trilha)       
        
    }else if(map[i][j] === 'F'){
        trilha.innerText = 'fim'
        return tabuleiro.appendChild(trilha)
    }

}

function posJogador(){
    for(let i=0; i<15; i++){
        for(let j=0; j<21; j++){
            if(map[i][j] === 'S'){
                return [i, j]
            }
        }
    }
}

function jogada(e){
    const direcao = e.key
    console.log(direcao)

    let posicaoJogador = posJogador()

    console.log(posicaoJogador[1]+1)

    if(direcao === 'ArrowRight'){
        
        if(map[posicaoJogador[0]][posicaoJogador[1]+1] === ' '){
            console.log('entrei')
            //map.splice([posicaoJogador[0]][posicaoJogador[1], 1, )
            //map[posicaoJogador[0]][posicaoJogador[1]] = ' '
            //map[posicaoJogador[0]][posicaoJogador[1+1]] = 'S'
            criacaoTabuleiro()
        }


        
        //map[9][0]
    }


}