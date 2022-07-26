const url = "https://api.spacexdata.com/v3/dragons";

const initialState = [];

// Async Slice Drage Data
const fetchDragon = async () => { 
  const response = await fetch(url);
  const data = await response.json();
  const dragonData = data.map((dragon) => ({ 
    id: dragon.id,
    name: dragon.name,
    type: dragon.type,
    flickr_images: dragon.flickr_images,
  }));

  return dragonData;
}

export default fetchDragon;



