export interface Spot {
  name: string;
  location: [number, number];
  description: string;
  code: number;
  status: boolean;
}

export function generateSpotObjects(): readonly Spot[] {
  const spotObjects: Spot[] = [];
    for (let i = 1; i <= 10000; i++) {
      const spot: Spot = {
        name: `Spot ${i}`,
        location: [
          getRandomCoordinate(51.505, 56),
          getRandomCoordinate(-0.09, 5),
        ],
        description: `This is spot ${i}`,
        code: i,
        status: Math.random() < 0.5,
      };
      spotObjects.push(spot);
    }
    return spotObjects;
}

function getRandomCoordinate(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}