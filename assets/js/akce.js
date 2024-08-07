const events = [
    {
        name: "Hudební Festival",
        date: "2023-06-15",
        location: "Praha",
        description: "Nejlepší hudební festival v Praze.",
        poster: "path/to/poster1.jpg"
    },
    {
        name: "Divadelní Představení",
        date: "2023-07-20",
        location: "Brno",
        description: "Úžasné divadelní představení.",
        poster: "path/to/poster2.jpg"
    },
    {
        name: "Konference",
        date: "2023-08-10",
        location: "Ostrava",
        description: "Inspirativní konference o technologiích.",
        poster: "path/to/poster3.jpg"
    }
];

let currentIndex = 0;

function displayEvent(index) {
    const eventContainer = document.getElementById('event-container');
    eventContainer.innerHTML = `
        <div class="event">
            <h2>${events[index].name}</h2>
            <p><strong>Datum:</strong> ${events[index].date}</p>
            <p><strong>Místo:</strong> ${events[index].location}</p>
            <p>${events[index].description}</p>
            <img src="${events[index].poster}" alt="Plakát akce">
        </div>
    `;
}

document.getElementById('prev-button').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        displayEvent(currentIndex);
    }
});

document.getElementById('next-button').addEventListener('click', () => {
    if (currentIndex < events.length - 1) {
        currentIndex++;
        displayEvent(currentIndex);
    }
});

// Inicializace s první akcí
displayEvent(currentIndex);
