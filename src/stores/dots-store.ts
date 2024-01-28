import { defineStore } from 'pinia';
import { Spot, generateSpotObjects } from '../models/spots';

export const useDotsStore = defineStore('dots', {
  state: () => ({
    dots: [] as readonly Spot[]
  }),
  actions: {
    setDots() {
      this.dots = generateSpotObjects();
    },
  },
  getters: {
    getDots: (state) => state.dots
  },
});