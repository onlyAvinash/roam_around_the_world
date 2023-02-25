import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

function Map() {
  const mapRef = useRef(null);

  useEffect(() => {
    // Create a Leaflet map
    const map = L.map(mapRef.current).setView([51.505, -0.09], 13);

    // Add a tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
      maxZoom: 18
    }).addTo(map);

    // Add a marker to the map
    L.marker([51.5, -0.09]).addTo(map)
      .bindPopup('A marker on the map!');

    return () => {
      // Clean up the map when the component unmounts
      map.remove();
    };
  }, []);

  return (
      <div ref={mapRef} style={{ height: '400px', width: '80%', borderRadius:'20px',marginLeft:'15vh'}}></div>
  );
}

export default Map;
