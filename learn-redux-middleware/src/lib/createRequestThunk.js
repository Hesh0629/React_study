import { startLoading, finishLoading } from '../modules/loading';

// Thunk를 이용하면 액션객체가 아닌 함수를 반환할 수 있게 된다.
// Usage: createRequestThunk(GET_USERS OR GET_POST, api.getUsers or api.getPost);
export default function createRequestThunk(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return params => async dispatch => {
    dispatch({type});
    dispatch(startLoading(type));
    try{
      const response = await request(params);
      dispatch({
        type:SUCCESS,
        payload: response.data,
      });
      dispatch(finishLoading(type));
    } catch(e){
      dispatch({
        type:FAILURE,
        payload:e,
        error:true,
      });
      dispatch(startLoading(type));
      throw e;
    }
  };
}