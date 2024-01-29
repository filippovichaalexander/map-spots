<script setup lang="ts">
  import { ref, onBeforeMount } from 'vue';
  import { useDotsStore } from '../stores/dots-store';
  import { Spot } from '../models/spots';

  import SpotList from './SpotList.vue';
  import MapComponent from './MapComponent.vue';

  const dotsStore = useDotsStore();
  
  const selectedSpot = ref<Spot | null>(null);

  const handleSpotClicked = (spot: Spot) => {
    selectedSpot.value = spot;
  };
  onBeforeMount(() => dotsStore.setDots())
</script>

<template>
  <q-layout>
    <div class="q-gutter-md d-flex row flex-no-wrap">
      <SpotList class="col-2" @spotClicked="handleSpotClicked"/>
      <MapComponent class="col-10" :spot="selectedSpot"/>
    </div>
  </q-layout>
</template>

<style scoped>
</style>