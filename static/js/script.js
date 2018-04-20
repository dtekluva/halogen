host = 'http://localhost:8000/'
 var position = [6.6577124, 6.3185216];
 function startmap(position){
    // clearInterval(monitorcustomers)
    function initialize() { 
        var latlng = new google.maps.LatLng(position[0], position[1]);
        var myOptions = {
            zoom: 16,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById("mapCanvas"), myOptions);
    
        marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: "Latitude:"+position[0]+" | Longitude:"+position[1]
        });
    
        console.log("hello=====")

    // setInterval(() => {
    //     position[0] = position[0] + 0.01;
    //     position[1] = position[1] + 0.01;
    //         transition(position);
    // }, 1000);

   setInterval(() => {
       $.ajax({
            
            type: "GET",
            url: host + "check",
                  async: true,
            success: function(res) {
                result = JSON.parse(res)
                pos = [result.lat,  result.lng]
                console.log("checking")
                transition(pos);
                console.log("hello ooooo=====")
            },
            error: function(){
               alert("connection probs")
            }
        })
   }, 3000); 
        
        
    

       google.maps.event.addListener(map, 'click', function(event) {
            // position[0] = position[0] + 0.0001;
            // position[1] = position[1] + 0.0001;
            // transition(position);
            x=1
        });
    }
    
    //Load google map
    google.maps.event.addDomListener(window, 'load', initialize);
    
    
    var numDeltas = 100;
    var delay = 10; //milliseconds
    var i = 0;
    var deltaLat;
    var deltaLng;
    
    function transition(result){
        i = 0;
        deltaLat = (result[0] - position[0])/numDeltas;
        deltaLng = (result[1] - position[1])/numDeltas;
        moveMarker();
    }
    
    function moveMarker(){
        position[0] += deltaLat;
        position[1] += deltaLng;
        var latlng = new google.maps.LatLng(position[0], position[1]);
        marker.setTitle("Latitude:"+position[0]+" | Longitude:"+position[1]);
        marker.setPosition(latlng);
        if(i!=numDeltas){
            i++;
            setTimeout(moveMarker, delay);
        }
    }

}
$.ajax({
            
    type: "GET",
    url: host + "check",
          async: true,
    success: function(res) {
        result = JSON.parse(res)
        pos = [result.lat,  result.lng]
        startmap(pos);
    },
    error: function(){
       alert("connection probs")
    }
})