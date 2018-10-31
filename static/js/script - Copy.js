//  var position = [6.6577124, 6.3185216];
//  function startmap(position){
//     // clearInterval(monitorcustomers)
//     function initialize(position) { 
//         var latlng = new google.maps.LatLng(position[0], position[1]);
//         var myOptions = {
//             zoom: 16,
//             center: latlng,
//             mapTypeId: google.maps.MapTypeId.ROADMAP
//         };
//         map = new google.maps.Map(document.getElementById("mapCanvas"), myOptions);
    
//         marker = new google.maps.Marker({
//             position: latlng,
//             map: map,
//             title: "Latitude:"+position[0]+" | Longitude:"+position[1]
//         });
    
//         console.log("hello=====")

//     // setInterval(() => {
//     //     position[0] = position[0] + 0.01;
//     //     position[1] = position[1] + 0.01;
//     //         transition(position);
//     // }, 1000);

    
//         $.ajax({
            
//             type: "GET",
//             url: host + "check",
//                   async: true,
//             success: function(res) {
//                 result = JSON.parse(res)
//                 pos = [result.lat,  result.lng]
//                 console.log("checking")
//                 transition(pos);
//                 console.log("hello ooooo=====")
//             },
//             error: function(){
//                alert("connection probs")
//             }
//         })
        
    

//        google.maps.event.addListener(map, 'click', function(event) {
//             // position[0] = position[0] + 0.0001;
//             // position[1] = position[1] + 0.0001;
//             // transition(position);
//             x=1
//         });
//     }
    
//     //Load google map
//     google.maps.event.addDomListener(window, 'load', initialize);
    
    
//     var numDeltas = 100;
//     var delay = 10; //milliseconds
//     var i = 0;
//     var deltaLat;
//     var deltaLng;
    
//     function transition(result){

//         i = 0;
//         deltaLat = (result[0] - position[0])/numDeltas;
//         deltaLng = (result[1] - position[1])/numDeltas;
//         moveMarker();
//     }
    
//     function moveMarker(){
//         position[0] += deltaLat;
//         position[1] += deltaLng;
//         var latlng = new google.maps.LatLng(position[0], position[1]);
//         marker.setTitle("Latitude:"+position[0]+" | Longitude:"+position[1]);
//         marker.setPosition(latlng);
//         if(i!=numDeltas){
//             i++;
//             setTimeout(moveMarker, delay);
//         }
//     }

// }















// host = 'http://localhost:8000/'
//  var position = [6.6577124, 6.3185216];
//  var x = 0;
//  function startmap(position){
//     // clearInterval(monitorcustomers)
//     function initialize() { 
//         var latlng = new google.maps.LatLng(position[0], position[1]);
//         var myOptions = {
//             zoom: 16,
//             center: latlng,
//             mapTypeId: google.maps.MapTypeId.ROADMAP
//         };
//         map = new google.maps.Map(document.getElementById("mapCanvas"), myOptions);
    
//         marker = new google.maps.Marker({
//             position: latlng,
//             map: map,
//             title: "Latitude:"+position[0]+" | Longitude:"+position[1]
//         });
//         marker2 = new google.maps.Marker({
//             position: latlng,
//             map: map,
//             title: "Second Marker"
//         });
//         marker3 = new google.maps.Marker({
//             position: latlng,
//             map: map,
//             title: "Third Marker"
//         });
    

//     // setInterval(() => {
//     //     position[0] = position[0] + 0.01;
//     //     position[1] = position[1] + 0.01;
//     //         transition(position);
//     // }, 1000);

//    setInterval(() => {
//        $.ajax({
            
//             type: "GET",
//             url: host + "check",
//                   async: true,
//             success: function(res) {
//                 result = JSON.parse(res)
//                 pos = [result.lat,  result.lng]
//                 console.log("checking", result)
//                 transition(pos);
                
//                 if (result.action == "ok"){
//                     alert("Panic Resolved");
//                     window.location.replace("http://localhost:8000/");
//                 }
//             },
//             error: function(){
//                alert("connection probs")
//             }
//         })
//    }, 3000); 
        
        
    

//        google.maps.event.addListener(map, 'click', function(event) {
//             // position[0] = position[0] + 0.0001;
//             // position[1] = position[1] + 0.0001;
//             // transition(position);
//             x=1
//         });
//     }
    
//     //Load google map
//     google.maps.event.addDomListener(window, 'load', initialize);
    
    
//     var numDeltas = 100;
//     var delay = 10; //milliseconds
//     var i = 0;
//     var deltaLat;
//     var deltaLng;
    
//     function transition(result){
//         latlng = new google.maps.LatLng(result[0], result[1])
//         latlng = new google.maps.LatLng(1, 1)
//         // map.setCenter(latlng);
//         var lineCoordinates = [
//             {lat: result[0], lng: result[1]},
//             {lat: result[0]+0.0002, lng: result[1] + 0.0001},
//             {lat: result[0]+0.0003, lng: result[1]-0.001},
//             {lat: result[0]-0.0001, lng: result[1]-0.002},
//             {lat: result[0]+0.0003, lng: result[1]+0.002},
//           ];
//           console.log(lineCoordinates)
//           var linePath = new google.maps.Polyline({
//             path: lineCoordinates,
//             geodesic: false,
//             strokeColor: '#FF0000'
//           });
//         //   lineCoordinates.push({lat: result[0]-0.01 + x, lng: result[1]-0.2 + x})
//           linePath.setMap(map)
//         // console.log("hello");
//         i = 0;
//         x +=0.01;
//         deltaLat = (result[0] - position[0])/numDeltas;
//         deltaLng = (result[1] - position[1])/numDeltas;
//         moveMarker(lineCoordinates);
//     }
    
//     function moveMarker(lineCoordinates){
//         position[0] += deltaLat;
//         position[1] += deltaLng;
//         var latlng = new google.maps.LatLng(position[0], position[1]);
//         var latlng2 = new google.maps.LatLng(lineCoordinates[1].lat, lineCoordinates[1].lng);
//         var latlng3 = new google.maps.LatLng(lineCoordinates[2].lat, lineCoordinates[2].lng);
//         // marker.setTitle("Latitude:"+position[0]+" | Longitude:"+position[1]);
//         marker.setTitle(`${"October 13, 2014 11:13:00"}`);
//         marker.setPosition(latlng);
//         marker2.setPosition(latlng2);
//         marker3.setPosition(latlng3);
//         if(i!=numDeltas){
//             i++;
//             setTimeout(moveMarker, delay);
//         }
//     }

// }
// $.ajax({
            
//     type: "GET",
//     url: `${host}check`,
//           async: true,
//     success: function(res) {
//         result = JSON.parse(res)
//         pos = [result.lat,  result.lng]
//         startmap(pos);
//     },
//     error: function(){
//        alert("connection probs")
//     }
// })























host = 'http://localhost:8000/'
 var position = [6.6577124, 6.3185216];
 var x = 0;

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
        // trail_map = new google.maps.Map(document.getElementById("mapCanvas1"), myOptions);
    
        marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: "Latitude:"+position[0]+" | Longitude:"+position[1]
        });
        // marker1 = new google.maps.Marker({
        //     position: latlng,
        //     map: trail_map,
        //     title: "First Marker"
        // });
        // marker2 = new google.maps.Marker({
        //     position: latlng,
        //     map: trail_map,
        //     title: "Second Marker"
        // });
        // marker3 = new google.maps.Marker({
        //     position: latlng,
        //     map: trail_map,
        //     title: "Third Marker"
        // });
    


   setInterval(() => {
       $.ajax({
            
            type: "GET",
            url: host + "check",
                  async: true,
            success: function(res) {
                result = JSON.parse(res)
                pos = [result.lat,  result.lng]
                console.log("checking", result)
                transition(pos);
                
                if (result.action == "ok"){
                    alert("Panic Resolved");
                    window.location.replace(host);
                }
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
        latlng = new google.maps.LatLng(result[0], result[1])
        // latlng = new google.maps.LatLng(1, 1)
        // map.setCenter(latlng);
        // var lineCoordinates = [
        //     {lat: result[0], lng: result[1]},
        //     {lat: result[0]+0.0002, lng: result[1] + 0.0001},
        //     {lat: result[0]+0.0003, lng: result[1]-0.001},
        //     {lat: result[0]-0.0001, lng: result[1]-0.002},
        //     {lat: result[0]+0.0003, lng: result[1]+0.002},
        //   ];
        //   console.log(lineCoordinates)
        //   var linePath = new google.maps.Polyline({
        //     path: lineCoordinates,
        //     geodesic: false,
        //     strokeColor: '#FF0000'
        //   });
        //   lineCoordinates.push({lat: result[0]-0.01 + x, lng: result[1]-0.2 + x})
          
        // console.log("hello");
        i = 0;
        x +=0.01;
        deltaLat = (result[0] - position[0])/numDeltas;
        deltaLng = (result[1] - position[1])/numDeltas;
        moveMarker();
        // linePath.setMap(map)
    }
    
    function moveMarker(){
        position[0] += deltaLat;
        position[1] += deltaLng;
        // var latlng = new google.maps.LatLng(position[0], position[1]);
        // var latlng2 = new google.maps.LatLng(lineCoordinates[1].lat, lineCoordinates[1].lng);
        // var latlng3 = new google.maps.LatLng(lineCoordinates[2].lat, lineCoordinates[2].lng);
        marker.setTitle("Latitude:"+position[0]+" | Longitude:"+position[1]);
        // marker.setTitle(`${"October 13, 2014 11:13:00"}`);
        marker.setPosition(latlng);
        // marker2.setPosition(latlng2);
        // marker3.setPosition(latlng3);
        if(i!=numDeltas){
            i++;
            setTimeout(moveMarker, delay);
        }
    }

}
$.ajax({
            
    type: "GET",
    url: `${host}check`,
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