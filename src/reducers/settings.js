// Our initial state we use to hydrate
const initialState = {
  lowerBound: 3.7,
  upperBound: 3.9,
  numRuns: 3000,
  zoom: 30,
  angle: 540,
  startSeed: .5,
  growth: .1,
  strandSize: 300,
  alpha: 0.1
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SETTINGS":
      return {
        ...state,
        ...action.settings,
      };

    default:
      return state;
  }
};


export default reducer;
