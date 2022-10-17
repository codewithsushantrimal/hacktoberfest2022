const apiKey = "vvUY9m5AYrX4RZI2bT7GIXQXuWHul75crZctcal8";

function main(data) {
    const title = data[0].title;
    const info = data[0].explanation;
    const date = data[0].date;
    const link = data[0].url;

    document.getElementById("title").innerText = title;
    document.getElementById("date").innerText = date;
    document.getElementById("info").innerText = info;
    document.getElementById("image").src = link;
    console.log(data);
}

function getData() {
    fetch("https://api.nasa.gov/planetary/apod?api_key="+apiKey+"&count=1")
    .then((response) => response.json())
    .then((data) => this.main(data));
}

getData();