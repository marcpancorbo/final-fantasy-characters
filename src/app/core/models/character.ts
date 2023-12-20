export interface Character {
  id: string;
  name: string;
  japaneseName: any;
  age: string;
  gender: string;
  race: string;
  job: string;
  height: string;
  weight: string;
  origin: string;
  description: string;
  pictures: Picture[];
  stats: any[];
}

export interface Picture {
  id: string;
  url: string;
  primary: number;
  collectionId: string;
}
