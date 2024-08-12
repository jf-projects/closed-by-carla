// MapComponent.jsx
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';


// Fix the default marker icon issue with Leaflet in React
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapComponent = ({ locationName }) => {
  const [position, setPosition] = useState([51.505, -0.09]); // Default to London
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchCoordinates = async () => {
      setLoading(true);
      try {
        // Nominatim API endpoint for geocoding
        const response = await axios.get(`https://nominatim.openstreetmap.org/search`, {
          params: {
            q: locationName,
            format: 'json',
            limit: 1
          }
        });
        const result = response.data[0];
        if (result) {
          setPosition([parseFloat(result.lat), parseFloat(result.lon)]);
        } else {
          setError('Location not available on Map.');
        }
      } catch (err) {
        setError('Unable to fetch location data.');
      } finally {
        setLoading(false);
      }
    };

    fetchCoordinates();
  }, [locationName]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <MapContainer center={position} zoom={17} style={{ height: '700px', width: '100%' }}>
          {/* <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          /> */}

          <TileLayer
            attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          />

          <Marker position={position}>
            <Popup>
              {locationName}
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
};

export default MapComponent;
