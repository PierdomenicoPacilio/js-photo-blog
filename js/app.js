const gridOutput = document.getElementById('grid');
gridOutput.innerHTML = ''
axios.get('https://lanciweb.github.io/demo/api/pictures/')
        .then(element => {
            console.log(element.data);
            gridOutput.innerHTML += `<div>
                                        <img id="pin" src="img/pin.svg" alt="pin">
                                        <img src=${element.data[0].url} alt="">
                                        <p>${element.data[0].title}</p>
                                     </div>`
        })