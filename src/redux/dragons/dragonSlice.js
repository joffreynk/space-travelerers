import fetchDragon from './dragonData';

const initialState = [];

// create action contants - This are calleds action types
const GET_DRAGON = 'dragons/GET_DRAGONS';
const RESERVE_DRAGON = 'dragons/RESERVE_DRAGON';
const CANCEL_DRAGON = 'dragons/CANCEL_DRAGON';

// Action Creators for the action constant
// ########## Action to to get Dragon ###############/
const getDragon = () => async (dispatch) => {
  const dragon = await fetchDragon();
  dispatch({
    type: GET_DRAGON,
    payload: dragon,
  });
};

// ########## Remove Dragon ###############/
const reserveDragon = (id) => ({
  type: RESERVE_DRAGON,
  payload: id,
});

const cancelDragon = (id) => ({
  type: CANCEL_DRAGON,
  payload: id,
});

// Reducers that recieves the actions and updates the state
const DragonReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DRAGON:
      return action.payload;
    case RESERVE_DRAGON:
      return [
        ...state.map((dragon) => {
          if (dragon.id === action.payload) {
            return { ...dragon, reserved: true };
          }
          return dragon;
        }),
      ];
    case CANCEL_DRAGON:
      return [
        ...state.map((dragon) => {
          if (dragon.id === action.payload) {
            return { ...dragon, reserved: false };
          }
          return dragon;
        }),
      ];
    default:
      return state;
  }
};

export { getDragon, reserveDragon, cancelDragon };
export default DragonReducer;
