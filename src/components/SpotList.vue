<script setup lang="ts" >
  import { onBeforeMount } from 'vue'
  import { useDotsStore } from '../stores/dots-store';
  import { Spot } from '../models/spots';
  
  const dotsStore = useDotsStore();

  const emits = defineEmits(['spotClicked']);

  const handleClick = (spot: Spot) => {
    emits('spotClicked', spot);
  };
  
  const heavyList: readonly Spot[] = dotsStore.getDots;

  onBeforeMount(() => {
    dotsStore.setDots();
  });
</script>
<template>
  <q-virtual-scroll
      class="wrapper"
      :items="heavyList"
      separator
      v-slot="{index, item}"
    >
      <q-item
        :key="index"
        dense
      >
        <q-item-section>
          <q-btn @click="handleClick(item)" color="primary" flat >
            <div class="row column">
              <q-item-section >{{ item.name }}</q-item-section>
              <q-item-section>
                <q-item-label class="q-block" caption lines="2">{{ item.description }}</q-item-label>
                <q-item-label class="q-block" caption lines="3">Code: {{ item.code }}</q-item-label>
              </q-item-section>
              <q-item-section class="row justify-center">
                <div v-if="item.status" class="circle bg-green q-mx-auto q-mt-sm"></div>
                <div v-else class="circle bg-red q-mx-auto q-mt-sm"></div>
              </q-item-section> 
            </div>
            </q-btn>
          </q-item-section>
      </q-item>
    </q-virtual-scroll> 
</template>
<style scoped>
.wrapper {
  max-width: 350px; 
  max-height: 95vh;
  overflow-y: scroll;
}
.item:hover {
    cursor: pointer;
  }
  .circle {
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }
</style>