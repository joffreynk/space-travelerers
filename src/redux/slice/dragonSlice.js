import fetchDragon from './dragonData';

const initialState = [];

// create action contants - This are calleds action types
const DISPLAY_DRAGON = 'dragon/DISPLAY_DRAGON';

// Action Creators for the action constant

// ########## Action to to get Dragon ###############/
const getDragon = () => async (dispatch) => {
  const dragon = await fetchDragon();
  dispatch({
    type: DISPLAY_DRAGON,
    payload: dragon,
  });
};

// Reducers that recieves the actions and updates the state
const DragonReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_DRAGON:
      return action.payload;
    default:
      return state;
  }
};

export { getDragon };
export default DragonReducer;
