// Our initial state we use to hydrate
const initialState = {
  r: null
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_R":
      return {
        ...state,
        r: action.r,
      };

    default:
      return state;
  }
};


export default reducer;
