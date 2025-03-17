const body = document.getElementById('body');
const gridOutput = document.getElementById('grid');
const cards = document.getElementsByClassName('col');
const overlay = document.getElementById('overlay');


axios.get('https://lanciweb.github.io/demo/api/pictures/')
        .then(element => {
            console.log(element.data);
            overlay.innerText = '';
            console.log('prima del for');
            for (i = 0; i < element.data.length; i++) {
                const currentElement = element.data[i];
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
                const currentHTMLElement = document.getElementById(`col${[i]}`);
                console.log(currentHTMLElement);
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
                }
                currentHTMLElement.addEventListener('click', () => overlayFunction(currentElement.url) );
                console.log('elemento aggiunto');
            };
            console.log('dopo il for');
            // for (i = 0; i < cards.length; i++) {
            //     cards[i].addEventListener('click', function() {
            //         overlay.classList.add('container');
            //         overlay.classList.remove('none');
            //         body.classList.add('ov-hid');
            //     });
            //     console.log('evento aggiunto');
            // };

        })
        .catch(error => {
            console.error('Errore nella richiesta:', error);
            gridOutput.innerHTML = `<li>errore nel caricamento dei dati</li>`;
        });



        // function() {
        //     overlay.classList.add('container');
        //     overlay.classList.remove('none');
        //     body.classList.add('ov-hid');
        //     overlay.innerHTML = `<button id="button">Chiudi</button><img src="${currentElement.url}" alt="">`;
        //     const button = document.getElementById('button');
        //     button.addEventListener('click', function() {
        //         overlay.classList.add('none');
        //         overlay.classList.remove('container');   
        //         body.classList.remove('ov-hid');
        //         overlay.innerHTML = '';
        //     });
        // }