const makeSelect = $('#make-select');
const yearSelect = $('#year-select');
const nextButton = $('#next-button');

fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json')
    .then(response => response.json())
    .then(data => {
        const sortedMakes = data.Results.sort((a, b) => a.MakeName.localeCompare(b.MakeName));

        sortedMakes.forEach(make => {
            const option = $('<option></option>').val(make.MakeId).text(make.MakeName);
            makeSelect.append(option);
        });

    });

const currentYear = new Date().getFullYear();
for (let year = 2015; year <= currentYear; year++) {
    const option = $('<option></option>').val(year).text(year);
    yearSelect.append(option);
}

makeSelect.on('change', validateSelection);
yearSelect.on('change', validateSelection);

function validateSelection() {
    if (makeSelect.val() && yearSelect.val()) {
        nextButton.prop('disabled', false);
    } else {
        nextButton.prop('disabled', true);
    }
}

nextButton.on('click', () => {
    const makeId = makeSelect.val();
    const year = yearSelect.val();
    window.location.href = `results.html?makeId=${makeId}&year=${year}`;
});
