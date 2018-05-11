$(document).ready(function(){
    $('#submitWeather').click(function(){
        var city = $('#city').val();
        if(city != ''){
            $.ajax({
               url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric" + "&APPID=bd5e378503939ddaee76f12ad7a97608", 
                type: "GET",
                dataType: "jsonp",
                success: function(data){
                    var widget = show(data);
                    $("#show").html(widget);
                    $('#city').val('');
                }
            });
        }else{
            $('#error').html("<div class='alert alert-danger'> <strong>Warning! </strong> City name can not be empty.</div>");
        }
    });
});

function show(data){
    return "<div class='forecast-table'> <div class='container'> <div class='forecast-container'> <div class='today forecast'> <div class='forecast-header'> <div class='day'>Today's Weather'</div> <div class='date'>"+ data.sys.country +"</div> </div> <div class='forecast-content'> <div class='location'>" + data.name + "</div> <div class='degree'> <div class='num'>"+ data.main.temp +"</sup>C</div> <div class='forecast-icon'> <img src='http://openweathermap.org/img/w/"+ data.weather[0].icon +".png' width=90/> </div>	</div> <span><img src='images/icon-wind.png' alt=''>"+ data.wind.speed +"</span><span><img src='images/icon-compass.png' alt=''>"+ data.wind.deg +"</span></div> </div> <div class='forecast'> <div class='forecast-header'> <div class='day'>Weather</div> </div> <div class='forecast-content'> <div class='degree'>"+ data.weather[0].main +"</div></div> </div> <div class='forecast'> <div class='forecast-header'> <div class='day'>Description</div> </div> <div class='forecast-content'> <div class='degree'>"+ data.weather[0].description +"</div> </div> </div> <div class='forecast'> <div class='forecast-header'> <div class='day'>Pressure</div> </div> <div class='forecast-content'> <div class='degree'>"+ data.main.pressure +"<sup> hPa</sup>C</div> </div> </div> <div class='forecast'> <div class='forecast-header'> <div class='day'>Humidity</div> </div> <div class='forecast-content'> <div class='degree'>"+ data.main.humidity +"<sup>%</sup>C</div> </div> </div> <div class='forecast'> <div class='forecast-header'> <div class='day'>Min Temperature</div> </div> <div class='forecast-content'> <div class='degree'>"+ data.main.temp_min +"<sup>&deg;</sup>C</div> </div> </div> <div class='forecast'> <div class='forecast-header'> <div class='day'>Max Temperature</div> </div> <div class='forecast-content'> <div class='degree'>"+ data.main.temp_max +"<sup>&deg;</sup>C</div> </div> </div> </div> </div> </div>"      
}