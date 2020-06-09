"use strict";

function displayWeather() {
    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        "APPID": weatherKey,
        "q": "Dallas, US",
        "units": "imperial"
    }).done(function (data) {
        console.log(data);
    }).fail(function (errors) {
        console.error(errors);

        function renderHTML(weather) {
            var HTML = "";
            weather.forEach(function (ele) {
                HTML = "<tr>" +
                    "<td>" + ele.list[0].dt_txt + "</td>" +
                    "<td>" + ele.list[0].main.temp + "</td>" +
                    "<td>" + ele.list[0].main.humidity + "</td>" +
                    "<td>" + ele.list[0].wind.speed + "</td>" +
                    "<td>" + ele.list[0].main.pressure + "</td>" +
                    "</tr>";
                $("#weather-1").append(HTML);
            });
        };
    })
}