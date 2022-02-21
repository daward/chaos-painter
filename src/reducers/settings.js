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
  alpha: 0.1,
  mode: "centered",
  blur: 0,
  recording: false,
  algorithm: "logistic"
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
  
    case "SET_SETTINGS": {
      const newState = {
        ...state,
        ...action.settings,
      }
      const url = new URL(window.location);
      Object.keys(newState).forEach(key => {
        url.searchParams.set(key, newState[key]);
      });
      window.history.pushState({}, '', url);

      return {
        ...state,
        ...action.settings,
      };
    }

    case "SET_SETTINGS_FROM_URL": {
      const newState = {};
      const params = new URLSearchParams(action.querystring);
      params.forEach((value, key) => {
        if(key !== "mode") {
          newState[key] = parseFloat(value);
        } else {
          newState[key] = value;
        }
      })

      return {
        ...state,
        ...newState
      }
    }

    default:
      return state;
  }
};


export default reducer;
