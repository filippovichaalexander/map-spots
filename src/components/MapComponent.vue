<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface Spot {
  name: string;
  location: [number, number];
  description?: string;
  code?: string;
  status: boolean;
}

interface Props {
  spots: Spot[];
  selectedSpot: Spot | null;
}

const props = defineProps<Props>();

const map: any = ref(null);

onMounted(() => {
  map.value = L.map('map').setView([51.505, -0.09], 13); 

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
  }).addTo(map.value);
 
  watch(() => props.spots, (newSpots) => {
    newSpots.forEach((spot) => {
      L.marker(spot.location).addTo(map.value).bindTooltip(spot.name);
    });
  });

  watch(() => props.selectedSpot, (newSpot) => {
    if (newSpot) {
    const selectedSpot = newSpot as Spot;

    // Clear previously added markers
    map.value.eachLayer((layer: any) => {
      if (layer instanceof L.Marker) {
        map.value.removeLayer(layer);
      }
    });

    map.value.setView(selectedSpot.location, 13); 
    const marker = L.marker(selectedSpot.location).addTo(map.value);
    marker.bindTooltip(selectedSpot.name).openTooltip(); 
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