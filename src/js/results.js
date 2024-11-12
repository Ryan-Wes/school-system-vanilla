const resultsContainer = document.getElementById('results-container');
const loadingMessage = document.createElement('div');
loadingMessage.classList.add('loading-message');
loadingMessage.innerText = 'Carregando...';
resultsContainer.appendChild(loadingMessage);

function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        makeId: params.get('makeId'),
        year: params.get('year')
    };
}

function renderResults(data) {
    resultsContainer.innerHTML = '';

    if (data.length === 0) {
        const noResultsMessage = document.createElement('div');
        noResultsMessage.classList.add('no-results');
        noResultsMessage.innerText = 'Não foi possível encontrar nenhum carro.';
        resultsContainer.appendChild(noResultsMessage);
        return;
    }

    data.forEach(vehicle => {
        const card = document.createElement('div');
        card.classList.add('result-card');
        
        card.innerHTML = `
            <h3>${vehicle.Model_Name}</h3><br>
            <p>Marca: ${vehicle.Make_Name}</p>
            <p>ID: ${vehicle.Make_ID}</p>
        `;
        
        resultsContainer.appendChild(card);
    });
}

const { makeId, year } = getQueryParams();
fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`)
    .then(response => response.json())
    .then(data => {
        loadingMessage.remove();
        
        if (data.Results.length > 0) {
            document.querySelector('header').innerText = `Cars from ${data.Results[0].Make_Name} of the year ${year}`;
        } else {
            document.querySelector('header').innerText = `No results found for the selected brand and year.`;
        }
        renderResults(data.Results);
    })
    .catch(error => {
        console.error('Erro ao buscar os dados:', error);
        loadingMessage.innerText = 'Erro ao carregar os dados. Tente novamente mais tarde.';
    });
