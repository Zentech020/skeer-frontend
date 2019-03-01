const initialState = {
  list: [],
  isLoading: null,
  filteredList: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {

    case 'LIST_IS_LOADING': {
      return { ...state, isLoading: true };
    }

    case 'DATA_LIST': {
      const { data } = action.result;
      return { ...state, list: data, isLoading: false };
    }

    case 'DATA_LIST_ERROR': {
      return { ...state };
    }

    case 'LIST_FILTER_IS_LOADING': {
      return { ...state, isLoading: true };
    }

    case 'DATA_LIST_FILTER': {
      const { data } = action.result;
      return { ...state, filteredList: data, isLoading: false };
    }

    case 'DATA_LIST_FILTER_ERROR': {
      return { ...state };
    }

    default:
      return state;
  }
}

export default rootReducer;