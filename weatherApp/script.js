const apikey = "de80ea110da8d437a6de2ecdf764df80";

function getWeather(city) {
		fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid="+apikey)
			.then((response) => response.json())
			.then((data) => this.display(data));
};

function display(data) {
	const degs = " °C"
	const city = data.name;
	const desc = data.weather[0].main;
	const temp = data.main.temp;
	const humidity = data.main.humidity;
	const windSpeed = data.wind.speed;
	//console.log(data.weather[0].main);
	//return;
	document.getElementById("city").innerText = "Weather in " + city;
	document.getElementById("temp").innerText = Math.round(temp) + degs;
	document.getElementById("description").innerText = desc;
	document.getElementById("humidity").innerText = humidity + " % Humidity";
	document.getElementById("wind").innerText = windSpeed + " km/h";
	document.getElementById("cityame").innerText = "";
}

document.getElementById("searchBtn").addEventListener("click", function() {
	cityName = document.getElementById("cityName").value;
	
	if (value="") {alert("Enter valid city!");}
	else {
		getWeather(cityName);
	}
});