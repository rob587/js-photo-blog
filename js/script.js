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

// recupero l'id container
const cardContainer = document.getElementById('cardContainer')

// dichiarazione della funzione arrow per creare l'html della card

const cardGenerate = ({ title, date, url }) => {
    return `
        <div class="col-md-6 col-lg-4 d-flex justify-content-center mb-4">
            <div class="card w-75">
                <img src="${url}" class="card-img-top" alt="${title}">
                <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <p class="card-text">${date}</p>
                </div>
            </div>
        </div>
    `;
};

// chiamata ajax all'api


axios.get('https://lanciweb.github.io/demo/api/pictures/').then(response => {
    const pictures = response.data;
    let htmlContent = "";

    pictures.forEach(picture => {
      htmlContent += cardGenerate(picture);
    });

    cardContainer.innerHTML = htmlContent;
  });




