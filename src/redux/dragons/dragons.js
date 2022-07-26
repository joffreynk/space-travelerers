// Initial dragon
// const initialDragon = [];

// create action contants - This are calleds action types
const GET_DRAGON = 'dragons/GET_DRAGONS';

// Action Creators for the action constant

// ########## Action to get dragon ###############/
const Dragons = (dragon) => ({
  type: GET_DRAGON,
  payload: {
    id: dragon.id,
    name: dragon.name,
    type: dragon.type,
    flickr_images: dragon.flickr_images,
  },
});

export default Dragons;
