const gridOutput = document.getElementById('grid');
const cards = document.getElementsByClassName('col');
const overlay = document.getElementById('overlay');
const button = document.getElementById('button');

axios.get('https://lanciweb.github.io/demo/api/pictures/')
        .then(element => {
            console.log(element.data);
            console.log('prima del for');
            for (i = 0; i < element.data.length; i++) {
                gridOutput.innerHTML += `<div class="col">
                                            <img id="pin" src="img/pin.svg" alt="pin">
                                            <img src=${element.data[i].url} alt="">
                                            <p class="data">${element.data[i].date}</p>
                                            <p class="title">${element.data[i].title.toUpperCase()}</p>
                                        </div>`;
                console.log('elemento aggiunto');
            };
            console.log('dopo il for');
            for (i = 0; i < cards.length; i++) {
                cards[i].addEventListener('click', function() {
                    overlay.classList.add('container');
                    overlay.classList.remove('none');
                });
                console.log('evento aggiunto');
            };
            button.addEventListener('click', function() {
                overlay.classList.add('none');
                overlay.classList.remove('container');     
            });
        })
        .catch(error => {
            console.error('Errore nella richiesta:', error);
            gridOutput.innerHTML = `<li>errore nel caricamento dei dati</li>`;
        });