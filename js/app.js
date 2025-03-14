const gridOutput = document.getElementById('grid');
axios.get('https://lanciweb.github.io/demo/api/pictures/')
        .then(element => {
            console.log(element.data);
            console.log('prima del for');
            for (i = 0; i < element.data.length; i++) {
                gridOutput.innerHTML += `<div>
                                            <img id="pin" src="img/pin.svg" alt="pin">
                                            <img src=${element.data[i].url} alt="">
                                            <p>${element.data[i].title}</p>
                                        </div>`;
                console.log('elemento aggiunto');
            };
            console.log('dopo il for');
        })
        .catch(error => {
            console.error('Errore nella richiesta:', error);
            gridOutput.innerHTML = `<li>errore nel caricamento dei dati</li>`;
        });