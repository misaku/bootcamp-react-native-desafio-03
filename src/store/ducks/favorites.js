// TYPES
export const Types = {
  STARD_MD: 'favorites/STARD_MD',
  FINISH_MD: 'favorites/FINISH_MD',
  ADD_REQUEST: 'favorites/ADD_REQUEST',
  ADD_SUCCESS: 'favorites/ADD_SUCCESS',
  ADD_FAILURE: 'favorites/ADD_FAILURE',
  RM_FAVORITE: 'favorites/RM_FAVORITE',

};

// REDUCERS
const INITIAL_STATE = {
  modal: false,
  geolocation: null,
  loading: false,
  error: null,
  data: [],
};
export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.STARD_MD:
      return {
        ...state, loading: false, modal: true, geolocation: action.payload,
      };
    case Types.FINISH_MD:
      return {
        ...state, loading: false, modal: false, geolocation: null,
      };
    case Types.ADD_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    case Types.ADD_REQUEST:
      return { ...state, loading: true, error: null };
    case Types.ADD_SUCCESS:
      return {
        ...state,
        data: [...state.data, { ...action.payload, geolocation: state.geolocation }],
        loading: false,
        error: null,
        modal: false,
        geolocation: null,
      };
    case Types.RM_FAVORITE:
      return { ...state, data: state.data.filter(s => s.id !== action.payload.id), error: false };
    default:
      return state;
  }
}

// ACTIONS
export const Creators = {
  startModal: data => ({
    type: Types.STARD_MD,
    payload: data,
  }),
  closeModal: () => ({
    type: Types.FINISH_MD,
  }),
  addFavoriteRequest: repository => ({
    type: Types.ADD_REQUEST,
    payload: repository,
  }),
  addFavoriteSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: data,
  }),
  addFavoriteFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error },
  }),
  rmFavorite: id => ({
    type: Types.RM_FAVORITE,
    payload: { id },
  }),
};
