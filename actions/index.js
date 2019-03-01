import axios from 'axios';

export const getList = () => async dispatch => {
  try {
    dispatch({ type: 'LIST_IS_LOADING' });
    const result = await axios.get(`http://127.0.0.1:5000/list`, {});
    return dispatch({ type: 'DATA_LIST', result });
  } catch (err) {
    return dispatch({
      type: 'DATA_LIST_ERROR',
      err
    });
  }
};

export const filterList = (query) => async dispatch => {
  try {
    dispatch({ type: 'LIST_FILTER_IS_LOADING' });
    const result = await axios.get(`http://127.0.0.1:5000/list/${query}`, {});
    return dispatch({ type: 'DATA_LIST_FILTER', result });
  } catch (err) {
    return dispatch({
      type: 'DATA_LIST_FILTER_ERROR',
      err
    });
  }
};

