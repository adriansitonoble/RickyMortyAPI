const characterUrl = "https://rickandmortyapi.com/api/character/152";

fetch(characterUrl)
    .then(response => response.json())
    .then(data => {
        const characterInfo = document.getElementById('characterInfo');
        characterInfo.innerHTML = `
            <h2>${data.name}</h2>
            <img src="${data.image}" alt="${data.name}">
            <p><strong>Estado:</strong> ${data.status}</p>
            <p><strong>Especie:</strong> ${data.species}</p>
            <p><strong>Tipo:</strong> ${data.type}</p>
            <p><strong>Género:</strong> ${data.gender}</p>
            <p><strong>Ubicación:</strong> <a href="${data.location.url}">${data.location.name}</a></p>
        `;
    })
    .catch(error => {
        console.error("Error:", error);
    });
