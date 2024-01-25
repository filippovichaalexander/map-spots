<script setup lang="ts" >
  import { useDotsStore } from '../stores/dots-store';
  const dotsStore = useDotsStore();

  import { defineEmits } from 'vue';
  
  interface Spot {
    name: string;
    location: [number, number];
    description?: string;
    code?: String;
    status: boolean;
  }
  const emits = defineEmits(['spotClicked']);

  const handleClick = (spot: Spot) => {
    emits('spotClicked', spot);
  };
</script>

<template>
  <div class="q-gutter-md wrapper" >
    <q-list>
      <q-item class="item " v-for="spot in dotsStore.getDots" :key="spot.name" @click="handleClick(spot)">
        <q-item-section>
          <q-btn @click="handleClick(spot)" color="primary" flat >{{ spot.name }}
            <q-item-label caption lines="2">{{ spot.description }}</q-item-label>
            <q-item-label caption lines="3">Code: {{ spot.code }}</q-item-label>
            <div class="row q-items-center q-pa-sm">
              <div lines="4" v-if="spot.status" class="circle circle--green col-4"></div>
              <div lines="4" v-else="!spot.status" class="circle circle--red col-8"></div>
            </div>
          </q-btn>
          <q-separator spaced inset color="primary"/>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<style scoped>
.wrapper {
  max-width: 350px; 
  max-height: 95vh;
  overflow-y: scroll;
}
.item {
  background-color: rgb(199, 199, 199);
}
.item:hover {
    cursor: pointer;
  }
  .circle {
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }
  .circle--green {
    background-color: green;
  }
  .circle--red {
    background-color: red;
  }
</style>