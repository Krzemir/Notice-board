//selectors

export const getAllAds = state => state.ads;

// actions
const createActionName = actionName => `app/ads/${actionName}`;

const LOAD_ADS = createActionName('LOAD_ADS');

// action creators
export const loadAds = payload => ({ payload, type: LOAD_ADS });


//API requests
export const fetchAds = () => {
  return (dispatch) => {
  fetch('http://localhost:8000/api/ads')
    .then(res => res.json())
    .then(ads => dispatch(loadAds(ads)))
  };
};


//reducer
const adsReducer = (statePart = [], action) => {
  switch (action.type) {
    case LOAD_ADS: {
      return [...action.payload];
      }
    default:
      return statePart;
  };
};

export default adsReducer;