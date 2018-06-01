//var url = 'https://restcountries.eu/rest/v2/name/';
var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = document.getElementById('countries');

document.getElementById('search').addEventListener('click', searchCountries);

function searchCountries() {
    var countryName = document.getElementById('country-name').value;
    if(!countryName.length) countryName = 'Poland';
    fetch(url + countryName)
        .then(function(resp) {
            return resp.json();
        })
        .then(showCountriesList);
}

function showCountriesList(resp) {
    //countriesList.innerHTML = '';
    resp.forEach(function(item){
//		var liEl = document.createElement('li');
//		liEl.innerText = item.name;
//		countriesList.appendChild(liEl);
		
		var tbody = document.getElementById('table-body');
		var tableRow = document.createElement("tr");
		tbody.appendChild(tableRow);
		
		var colCountry = document.createElement("td");
            tableRow.appendChild(colCountry);
			colCountry.innerText = item.name;
		var colCapital = document.createElement("td");
            tableRow.appendChild(colCapital);
			colCapital.innerText = item.capital
		var colCurrency = document.createElement("td");
            tableRow.appendChild(colCurrency);
			colCurrency.innerText = item.currencies;
		var colTimeZone = document.createElement("td");
            tableRow.appendChild(colTimeZone);
			colTimeZone.innerText = item.timezones;
		var colRegion = document.createElement("td");
            tableRow.appendChild(colRegion);
			colRegion.innerText = item.region;
		var colPopulation = document.createElement("td");
            tableRow.appendChild(colPopulation);
			colPopulation.innerText = item.population;
	});
}