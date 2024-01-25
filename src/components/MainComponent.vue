
<script setup lang="ts">
  import { useDotsStore } from '../stores/dots-store';
  const dotsStore = useDotsStore();
  import SpotList from './SpotList.vue'
  import MapComponent from './MapComponent.vue'
  
  import { ref } from 'vue';
  
  interface Spot {
    name: string;
    location: [number, number];
    description?: string;
    code?: string;
    status: boolean;
  }
  const selectedSpot = ref<Spot | null>(null);


  const handleSpotClicked = (spot: Spot) => {
    selectedSpot.value = spot;
  };
</script>
<template>
  <q-layout >
    <div class="q-gutter-md d-flex row flex-no-wrap">
      <SpotList class="col-2" :spots="dotsStore.getDots" @spotClicked="handleSpotClicked"/>
      <MapComponent class="col-10" :spots="dotsStore.getDots" :selectedSpot="selectedSpot"/>
    </div>
  </q-layout>
</template>

<style scoped>

</style>