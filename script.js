
let latitude1 =document.getElementById("lat");
let longitude1 =document.getElementById("long");
let btnclick=document.getElementById("btn");


// btnclick.addEventListener("click",myfunction);



 

$.getJSON("https://api.ipgeolocation.io/ipgeo?apiKey=2f690a01d87d47f7b8ed362a048656e3",function(data){
    console.log(data)
    $(latitude1).html(data.latitude)
    $(longitude1).html(data.longitude)
})
$.getJSON("https://api.openweathermap.org/data/2.5/weather?lat=16.83137&lon=75.71512&appid=3dda6989b5f217c0a7c6d1cf50fb8d20",function(data1){
    console.log(data1)
    $("#location").html(data1.name)
    $("#longit").html(data1.coord.lon)
    $("#latit").html(data1.coord.lat)
    $("#tm").html(data1.timezone)
    $("#wp").html(data1.wind.speed)
    $("#pr").html(data1.main.pressure)
    $("#hu").html(data1.main.humidity)
    $("#sea").html(data1.main.sea_level)
    $("#fl").html(data1.main.feels_like)
})
