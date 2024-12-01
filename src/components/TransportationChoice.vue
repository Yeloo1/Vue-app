<template>
    <div class="transportation-choice">
      <h2>Select Your Transportation</h2>
      <div class="choices">
        <button @click="selectTransportation('BUS')" class="transport-button">
          <img src="@/assets/bus-icon.png" alt="Bus" class="transport-icon" />
          <span class="transport-text">BUS</span>
        </button>
        <button @click="selectTransportation('MOTORCYCLE')" class="transport-button">
          <img src="@/assets/motorcycle-icon.png" alt="Motorcycle" class="transport-icon" />
          <span class="transport-text">MOTORCYCLE</span>
        </button>
        <button @click="selectTransportation('TAXI')" class="transport-button">
          <img src="@/assets/taxi-icon.png" alt="Taxi" class="transport-icon" />
          <span class="transport-text">TAXI</span>
        </button>
      </div>
  
      <p v-if="selectedTransportation">
        You selected: <strong>{{ selectedTransportation }}</strong>
      </p>
  
      <div v-if="selectedTransportation">
        <div>
          <h3>Select your route</h3>
          <p>Click on the map to select your start and end points.</p>
          <div id="map" style="height: 400px;"></div>
          <p v-if="fromCityName && toCityName">From: {{ fromCityName }} to: {{ toCityName }}</p>
          <p v-if="fromCityName && toCityName">Distance: {{ distance }} km</p>
          <button @click="calculateCosts">Calculate Costs</button>
  
          <!-- Reset button -->
          <button @click="resetMap" style="background-color: #dc3545; margin-top: 20px;">
            Reset Map
          </button>
  
          <div v-if="calculatedCosts">
            <h3>Estimated Costs:</h3>
            <p>Fuel Cost: ₱{{ calculatedCosts.fuelCost }}</p>
            <p>Transport Fee: ₱{{ calculatedCosts.transportFee }}</p>
            <p>Toll Gate Fee: ₱{{ calculatedCosts.tollGateFee }}</p>
            <p>Total Cost: ₱{{ calculatedCosts.totalCost }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import L from 'leaflet';
  import { nextTick } from 'vue';
  
  export default {
    data() {
      return {
        selectedTransportation: null,
        fromCity: null, 
        toCity: null,  
        fuelPrice: 65, 
        fuelEfficiency: 4,  // Default fuel efficiency for buses
        transportFeePerKm: 10,  // Default transport fee for buses
        tollGateFee: 100,  // Default toll fee for buses
        motorcycleFuelEfficiency: 25, // Motorcycle fuel efficiency
        motorcycleTransportFeePerKm: 5, // Motorcycle transport fee per km
        taxiFuelEfficiency: 8, // Taxi fuel efficiency (8 km/l)
        taxiTransportFeePerKm: 20, // Taxi transport fee per km
        taxiTollGateFee: 150, // Taxi toll gate fee
        calculatedCosts: null,
        distance: 0,
        map: null,
        markers: [],
        startIcon: null,
        endIcon: null,
        fromCityName: '',
        toCityName: '',
      };
    },
    methods: {
      selectTransportation(type) {
        this.selectedTransportation = type;
        this.calculatedCosts = null;
        this.distance = 0;
        this.fromCity = null;
        this.toCity = null;
        this.markers = [];
  
        // Adjust parameters for MOTORCYCLE, BUS, or TAXI
        if (this.selectedTransportation === 'MOTORCYCLE') {
          this.fuelEfficiency = this.motorcycleFuelEfficiency;
          this.transportFeePerKm = this.motorcycleTransportFeePerKm;
          this.tollGateFee = 50; // Adjust toll fee for motorcycles
        } else if (this.selectedTransportation === 'BUS') {
          this.fuelEfficiency = 4;
          this.transportFeePerKm = 10;
          this.tollGateFee = 100;
        } else if (this.selectedTransportation === 'TAXI') {
          this.fuelEfficiency = this.taxiFuelEfficiency;
          this.transportFeePerKm = this.taxiTransportFeePerKm;
          this.tollGateFee = this.taxiTollGateFee;
        }
  
        nextTick(() => {
          // Clear existing map if one exists
          if (this.map) {
            this.clearMarkers();
          }
  
          // Initialize map only if it doesn't exist already
          if (!this.map) {
            this.initMap();
          }
        });
      },
  
      initMap() {
        const mapContainer = document.getElementById('map');
        if (!mapContainer) {
          console.error('Map container not found!');
          return;
        }
  
        // Initialize map with default view
        this.map = L.map(mapContainer).setView([12.8797, 121.7740], 6);
  
        // Set map tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(this.map);
  
        // Set map bounds
        this.map.setMaxBounds([
          [4.5, 116.5],
          [21.5, 130.5],
        ]);
  
        // Register click event to add markers
        this.map.on('click', this.onMapClick);
  
        // Initialize custom icons for start and end points
        this.startIcon = L.icon({
          iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',  // Start point pin icon
          iconSize: [40, 40],  
          iconAnchor: [20, 40],  
          popupAnchor: [0, -40]  
        });
  
        this.endIcon = L.icon({
          iconUrl: require('@/assets/location-pin.png'),  // End point (drop-off) icon
          iconSize: [40, 40],  
          iconAnchor: [20, 40],  
          popupAnchor: [0, -40]  
        });
      },
  
      onMapClick(event) {
        if (this.markers.length >= 2) return;
  
        const lat = event.latlng.lat;
        const lng = event.latlng.lng;
  
        let marker;
        if (this.markers.length === 0) {
          // First marker: Starting point
          marker = L.marker([lat, lng], { icon: this.startIcon }).addTo(this.map);
          this.fromCity = { lat, lng };
          this.getAddress(lat, lng, 'from');
        } else {
          // Second marker: Drop-off point
          marker = L.marker([lat, lng], { icon: this.endIcon }).addTo(this.map);
          this.toCity = { lat, lng };
          this.getAddress(lat, lng, 'to');
          this.calculateDistance();
        }
  
        this.markers.push({ lat, lng, marker });
      },
  
      async getAddress(lat, lng, type) {
        const apiUrl = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`;
        try {
          const response = await fetch(apiUrl);
          const data = await response.json();
          const address = data.address;
  
          if (type === 'from') {
            this.fromCityName = address.city || address.town || address.village || 'Unknown Location';
          } else {
            this.toCityName = address.city || address.town || address.village || 'Unknown Location';
          }
        } catch (error) {
          console.error('Error fetching address:', error);
        }
      },
  
      clearMarkers() {
        this.markers.forEach(m => {
          this.map.removeLayer(m.marker);
        });
        this.markers = [];
      },
  
      resetMap() {
        this.clearMarkers();
        this.fromCity = null;
        this.toCity = null;
        this.fromCityName = '';
        this.toCityName = '';
        this.distance = 0;
        this.calculatedCosts = null;
      },
  
      calculateDistance() {
        if (this.fromCity && this.toCity) {
          const lat1 = this.fromCity.lat;
          const lon1 = this.fromCity.lng;
          const lat2 = this.toCity.lat;
          const lon2 = this.toCity.lng;
  
          // Using Haversine formula to calculate distance
          const R = 6371; // Radius of the Earth in km
          const dLat = this.degreesToRadians(lat2 - lat1);
          const dLon = this.degreesToRadians(lon2 - lon1);
  
          const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.degreesToRadians(lat1)) * Math.cos(this.degreesToRadians(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
  
          const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
          this.distance = R * c; // Distance in km
        }
      },
  
      degreesToRadians(degrees) {
        return degrees * (Math.PI / 180);
      },
  
      calculateCosts() {
        if (!this.fromCity || !this.toCity || this.distance === 0) {
          alert("Please select both the start and end locations.");
          return;
        }
  
        // Define a minimum distance threshold (e.g., 10 km)
        const distanceThreshold = 10;  // Kilometers
  
        // If the distance is less than the threshold, do not apply the toll fee
        const tollGateFee = this.distance >= distanceThreshold ? this.tollGateFee : 0;
  
        const fuelCost = (this.distance * (this.fuelEfficiency / 100)) * this.fuelPrice;
        const transportFee = this.distance * this.transportFeePerKm;
        const totalCost = fuelCost + transportFee + tollGateFee;
  
        this.calculatedCosts = {
          fuelCost: fuelCost.toFixed(2),
          transportFee: transportFee.toFixed(2),
          tollGateFee: tollGateFee.toFixed(2), // Will be 0 if the distance is less than the threshold
          totalCost: totalCost.toFixed(2),
        };
      },
    },
  };
  </script>
  
  
  
  <style scoped>

.transportation-choice {
  text-align: center;
  padding: 20px;
}

.choices {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.transport-button {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  padding: 10px;
  background-color: #f8f9fa;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  flex-direction: column;
}

.transport-icon {
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
}

.transport-text {
  color: black;
  font-size: 16px;
  font-weight: bold;
}

.transport-button:hover {
  background-color: #e9ecef;
}

button {
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
}

button:hover {
  background-color: #0056b3;
}

h3 {
  margin-top: 20px;
  font-weight: bold;
}

button[style="background-color: #dc3545;"] {
  background-color: #dc3545;
}

button[style="background-color: #dc3545;"]:hover {
  background-color: #c82333;
}
  </style>
  