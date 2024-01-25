import { defineStore } from 'pinia';
import {spots} from '../spots.js';

interface Spot {
  name: string;
  location: [number, number];
  description?: string;
  code?: string;
  status: boolean;
}

export const useDotsStore = defineStore('dots', {
  state: () => ({
    // dots: [
    // {
    // "name": "Spot 3",
    // "location": [
    //     51.49,
    //     0.1
    // ],
    // "description": "This is spot 3",
    // "code": "1",
    // "status": true
    // },
    // {
    //     "name": "Spot 4",
    //     "location": [
    //         51.49,
    //         0.1
    //     ],
    //     "description": "This is spot 4",
    //     "code": "2",
    //     "status": false
    // },
    // {
    //     "name": "Spot 5",
    //     "location": [
    //         51.49,
    //         0.1
    //     ],
    //     "description": "This is spot 5",
    //     "code": "3",
    //     "status": true
    // },
    // ] as Spot[],
    dots: spots as Spot[]
  }),
  getters: {
    getDots: (state) => state.dots
  },
});