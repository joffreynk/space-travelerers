const url = 'https://api.spacexdata.com/v3/dragons';

// Async Slice Drage Data
const fetchDragon = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const dragonData = data.map((dragon) => ({
    id: dragon.id,
    name: dragon.name,
    type: dragon.type,
    description: dragon.description,
    flickrImages: dragon.flickr_images[0],
    reserved: false,
  }));

  return dragonData;
};

export default fetchDragon;
