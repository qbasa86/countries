var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');
$("#search").click(function() {
    searchCountries();
});

function searchCountries() {
    var countryName = $('#country-name').val();
    if (!countryName.length) countryName = 'Poland';
    $.ajax({
        url: url + countryName,
        method: 'GET',
        success: showCountriesList
    });
}

function showCountriesList(resp) {
    countriesList.empty();
}

function showCountriesList(resp) {
    countriesList.empty();
    resp.forEach(function(item) {
        $('<li style="color: #1b0aff;">').text("Country: " + item.name).appendTo(countriesList);
        $('<li style="color: #a75656;">').text("Capital: " + item.capital).appendTo(countriesList);
        $('<li style="color: #14a921;">').text("Region: " + item.region).appendTo(countriesList);
    });
}