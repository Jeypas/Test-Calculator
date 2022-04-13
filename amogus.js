const btn = document.querySelector('#HERE');
const amogusFoto = document.querySelector('.amogus-foto');
const titulo = document.querySelector('.titulo');
let isAlive = true

function mudarVida() {

    if (isAlive) {

        titulo.innerText = 'REVIVE HIM!'
        amogusFoto.innerHTML = '<img src="img/morto.png"></img>'
        isAlive = false
        return
    }


    if (isAlive === false){
        titulo.innerText = 'KILL HIM!'
            amogusFoto.innerHTML = '<img src="img/ciano.png"></div>'
            isAlive = true
          
    }

}


btn.addEventListener('click', mudarVida);