

/**
 * ACTION TYPES
 */
export const GET_NAME = 'GET_NAME';
// const GET_PREDICTIONS = 'GET_PREDICTIONS';

/**
 * INITIAL STATE
 */
const defaultGame = {
  name: 'learn',
};

/**
 * ACTION CREATORS
 */
export const getName = name => ({type: GET_NAME, name})

/**
 * THUNK CREATORS
 */
export const gotName = name => async dispatch => {
  try {
    dispatch(getName(name))
  } catch (err) {
    console.error(err)
  }
};


/**
 * REDUCER
 */
export default function(state = defaultGame, action) {
  switch (action.type) {
    case GET_NAME:
      return {...state, name: action.name}
      default:
      return state
  }
}
