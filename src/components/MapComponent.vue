<script setup lang="ts">
  import { onMounted, watch } from 'vue';
  import { Spot } from '../models/spots';
  import L from 'leaflet';
  import 'leaflet/dist/leaflet.css';

  interface Props {
    spot: Spot | null;
  }

  const props = defineProps<Props>();

  let map: any = null;

  onMounted(() => {
    map = L.map('map').setView([51.505, -0.09], 13); 

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(map); 

    watch(() => props.spot, (newSpot) => {
      if (newSpot) {
      const spot = newSpot as Spot;

      map.eachLayer((layer: any) => {
        if (layer instanceof L.Marker) {
          map.removeLayer(layer);
        }
      });

      map.setView(spot.location, 13); 
      const marker = L.marker(spot.location).addTo(map);
      marker.bindTooltip(spot.name).openTooltip(); 
    }
    });
  });
</script>

<template>
  <div id="map"></div>
</template>

<style scoped>
  #map {
    width: 75%;
    height: 95vh;
    margin-top: 35px;
  }
</style>