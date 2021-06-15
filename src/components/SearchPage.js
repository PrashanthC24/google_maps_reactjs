import React, { useState,useEffect } from 'react';

const SearchPage = () => {
    const directionsService = new window.google.maps.DirectionsService();
    const directionsRenderer = new window.google.maps.DirectionsRenderer();
    var map;
     const [pointA, setpointA] = useState();
     const [pointB, setpointB] = useState();
   

     useEffect(() => {

       map = new window.google.maps.Map(document.getElementById("map"), {
        zoom: 7,
        center: { lat: 41.85, lng: -87.65 },
        mapTypeId: window.google.maps.MapTypeId.HYBRID,
      });
       
          directionsRenderer.setMap(map);
    }, [])

    const handleFindRoutes = () => {
      console.log('go it');
      console.log(pointA)
      console.log(pointB)
      
      // PointA PointB place data has to be converted into 
      // respective latitude longitude values and shud be passed here.
      // Needs to be implemented

      let start = new window.google.maps.LatLng(37.334818, -121.884886);
   
      let end = new window.google.maps.LatLng(37.441883, -122.143019);
      let request = {
        origin: start,
        destination: end,
        travelMode: window.google.maps.TravelMode.DRIVING
      };
      directionsService.route(request, function(response, status) {
        if (status == window.google.maps.DirectionsStatus.OK) {
          directionsRenderer.setDirections(response);
          directionsRenderer.setMap(map);
        } else {
          alert("Directions Request from " + start.toUrlValue(6) + " to " + end.toUrlValue(6) + " failed: " + status);
        }
      });
    }
  
  //  window.google.maps.event.addDomListener(window, 'load', initialize);



    const handlePointA = (e) => {
      setpointA(e.target.value)
      console.log(e.target.value)
    };

    const handlePointB = (e) => {
      setpointB(e.target.value)
      console.log(e.target.value)
    };
  

     return (
         <React.Fragment>
        
        <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                   <div className="container">
                       <h2 className="text-center white-text">Wellcome to Finders.com</h2>
                   </div>
               </nav>
        <div>
        <div className="container mt-3">
        <div className="card indigo text-white">
          <div className="card-body">
            <h1 className="card-title text-center" >Source & Destination Finder using Google Maps</h1>
              <form className = "mt-3 text-center ">  
                <label for="source" >FROM:</label>
                <input type="text" id="source"  name="source" onChange={handlePointA}/>
                <label for="destination" >TO:</label>
                <input type="text" id="destination"  name="destination" onChange={handlePointB}/>
                  <button type="button" className="btn btn-light btn-rounded" onClick={handleFindRoutes}>Go</button>
              </form>
          </div>
        </div>
        </div>
       
         <div className="container">
         <div >   
           <div id="map" style={{width:"100%",height:"400px"}}></div>
         </div>
         </div>
       <br/>
       <div>
       </div>  
       <footer className="text-center text-white bg-dark">
            <div className="text-center p-3">
                    {'© 2021 Copyright:Finders.com'}
            </div>
            </footer>
       </div>
       </React.Fragment>

  
     );
};
export default SearchPage;
