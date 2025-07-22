// informazione della chiamata dell'api

[
    {
        "id": 1,
        "title": "Skate Park",
        "date": "01-07-2024",
        "url": "https://marcolanci.it/boolean/assets/pictures/1.png"
    },
    {
        "id": 2,
        "title": "Passeggiata",
        "date": "16-07-2024",
        "url": "https://marcolanci.it/boolean/assets/pictures/2.png"
    },
    {
        "id": 3,
        "title": "Alpi",
        "date": "01-07-2024",
        "url": "https://marcolanci.it/boolean/assets/pictures/3.png"
    },
    {
        "id": 4,
        "title": "Sagra",
        "date": "21-08-2024",
        "url": "https://marcolanci.it/boolean/assets/pictures/4.png"
    },
    {
        "id": 5,
        "title": "Watergun",
        "date": "23-08-2024",
        "url": "https://marcolanci.it/boolean/assets/pictures/5.png"
    },
    {
        "id": 6,
        "title": "Riviera",
        "date": "30-08-2024",
        "url": "https://marcolanci.it/boolean/assets/pictures/6.png"
    }
]

// attendo che il dom sia completamente caricato

document.addEventListener('DOMContentLoaded', function () {

    // recupero gli elementi
    const overlay = document.getElementById('pageOverlay');
    const button = document.getElementById('closeOverlayBtn');
    const cardContainer = document.getElementById('cardContainer');
    const overlayImage = overlay.querySelector('img'); // seleziono solo l'immagine dell'overlay

    // Chiudi overlay
    button.addEventListener('click', function () {
        overlay.classList.add('d-none');
    });

    // Funzione per generare la card con data-img
    const cardGenerate = ({ title, date, url }) => {
        return `
            <div class="col-md-6 col-lg-4 d-flex justify-content-center mb-4">
                <div class="card w-75" data-img="${url}">
                    <img src="${url}" class="card-img-top" alt="${title}">
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text">${date}</p>
                    </div>
                </div>
            </div>
        `;
    };

    // Chiamata dell'api
    axios.get('https://lanciweb.github.io/demo/api/pictures/')

    // dati salvati in picture
        .then(response => {
            const pictures = response.data;
            let htmlContent = "";

            pictures.forEach(picture => {
                htmlContent += cardGenerate(picture);
            });

            cardContainer.innerHTML = htmlContent;

            // Aggiungo l'evento dopo che le card sono state aggiunte
            cardContainer.addEventListener('click', function (e) {
                const clickedCard = e.target.closest('.card');
                if (clickedCard) {
                    const imageUrl = clickedCard.getAttribute('data-img');
                    overlayImage.src = imageUrl;
                    overlay.classList.remove('d-none');
                }
            });
        })
});