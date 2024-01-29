export interface Spot {
  name: string;
  location: [number, number];
  description: string;
  code: number;
  status: boolean;
}

export function generateSpotObjects(): readonly Spot[] {
  const spotObjects: Spot[] = Array(10000);

  for (let i = 0; i < 10000; i++) {
    const id = i + 1;
    const spot: Spot = {
      name: `Spot ${id}`,
      location: [
        getRandomCoordinate(51.505, 56),
        getRandomCoordinate(-0.09, 5),
      ],
      description: `This is spot ${id}`,
      code: id,
      status: Math.random() < 0.5,
    };
    spotObjects[i] = spot;
  }
  return spotObjects;
}

function getRandomCoordinate(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}