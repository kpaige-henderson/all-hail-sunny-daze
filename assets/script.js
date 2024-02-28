$(document).ready(function () {
    $('.search-btn').on('click', function () {
        var cityName = $('.search-input').val(); 
        var APIKey = '45e7389af4bf4883f905bc78e2fd18ee';

        function getApi(city) {
            var apiURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + APIKey;
            fetch(apiURL)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    console.log(data);

                    var cityName = data.city.name;

                    // saveToStorage(cityName); 

                    for (var i = 0; i < data.list.length; i += 8) {
                        var date = new Date(data.list[i].dt * 1000).toLocaleDateString();
                        var temperature = Math.round((data.list[i].main.temp - 273.15) * 9/5 + 32);
                        var description = data.list[i].weather[0].description;

                        $('.five-day-forecast-container').append('<div class="day-forecast">' +
                            '<p>Date: ' + date + '</p>' +
                            '<p>Temperature: ' + temperature + '°F</p>' +
                            '<p>Description: ' + description + '</p>' +
                            '</div>');
                    }
                })
                .catch(function (error) {
                    console.log("Error:", error);
                    // Handle errors if needed
                });
        }

        getApi(cityName);
    });
});

