//  DICHIARAZIONE DELLE VARIABILI

const body = document.body;
const gridOutput = document.getElementById('grid');
const overlay = document.getElementById('overlay');



//  UTILIZZO DI AXIOS PER ACCEDERE ALL'API

axios.get('https://lanciweb.github.io/demo/api/pictures/')


        //  UTILIZZO DI THEN PER GESTIRE INFORMAZIONI E CONTENUTI DELL'API

        .then(element => {

            // controllo che sia l'array di oggetti che mi interessa
            console.log(element.data);

            overlay.innerText = '';

            // verifico funionamento dell'iterazione
            console.log('prima del for');


            // inizio l'iterazione che mi porta a creare il layout principale della pagina tramite gli elementi presi dall'API

            for (i = 0; i < element.data.length; i++) {

                const currentElement = element.data[i];


                // aggiungo gli elementi alla griglia

                // gridOutput.innerHTML += `<div id="col${[i]}">
                //                             <img id="pin" src="img/pin.svg" alt="pin">
                //                             <img src=${currentElement.url} alt="">
                //                             <p class="data">${currentElement.date}</p>
                //                             <p class="title">${currentElement.title.toUpperCase()}</p>
                //                         </div>`;
                gridOutput.insertAdjacentHTML("beforeend", `<div id="col${i}">
                                                                <img id="pin" src="img/pin.svg" alt="pin">
                                                                <img src="${currentElement.url}" alt="">
                                                                <p class="data">${currentElement.date}</p>
                                                                <p class="title">${currentElement.title.toUpperCase()}</p>
                                                            </div>`);


                // prendo ora un elemento alla volta
                const currentHTMLElement = document.getElementById(`col${[i]}`);
                console.log(currentHTMLElement);

                // funzione che permette l'utilizzo dell'overlay
                const overlayFunction = function(url) {
                    overlay.classList.add('container');
                    overlay.classList.remove('none');
                    body.classList.add('ov-hid');
                    overlay.innerHTML = `<button id="button">Chiudi</button><img src="${url}" alt="">`;
                    const button = document.getElementById('button');
                    button.addEventListener('click', function() {
                        overlay.classList.add('none');
                        overlay.classList.remove('container');   
                        body.classList.remove('ov-hid');
                        overlay.innerHTML = '';
                    });
                };

                // aggiungo l'evento all'elemento appena aggiunto
                currentHTMLElement.addEventListener('click', () => overlayFunction(currentElement.url) );

                // verifico funionamento dell'iterazione
                console.log('elemento aggiunto');
            };

            // verifico funionamento dell'iterazione
            console.log('dopo il for');
        })



        //   UTILIZZO DI CATCH PER GESTIRE EVENTUALI ERRORI

        .catch(error => {
            console.error('Errore nella richiesta:', error);
            gridOutput.innerHTML = `<div>errore nel caricamento dei dati</div>`;
        });