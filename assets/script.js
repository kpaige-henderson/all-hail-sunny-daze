var APIKey = '45e7389af4bf4883f905bc78e2fd18ee';
var searchInput = $('.search-input')
var searchBtn = $('.search-btn')

function getApi(city) {
    var apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey + '&units=imperial';
    fetch(apiURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)

            var dataName = data.name;

            saveToStorage(dataName);
        
         for (var i = 0; i <date.list.length; i += 8)  
            var date = new Date(date.list[i].dt * 1000).toLocaleDateString()
            var temperature = Math.round((data.list[i].main.temp - 279.15) * 9/5 + 32);
            var description = data.list[i].weathe[0].description;

                $('.five-day-forecast-container').append('<div class="day-forecast">') +
                '<p>Date: ' + date.toLocaleDateString() + '<p>' + 
                '<p>Temperature: ' + temperature + '°F</p>' + 
                '<p>Description: ' + description + '</p>' +
                '</div>'

        });
    };





    searchBtn.on('click', function (event) {
        var city = searchInput.val();
        getApi(city);
        searchInput.val('')
    })

    searchInput.on('keyup', function (event) {
        if (event.keyCode === 13) {
            getApi()
        }
    })