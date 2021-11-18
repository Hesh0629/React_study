import { handleActions } from 'redux-actions';
import * as api from '../lib/api';
import createRequestThunk from '../lib/createRequestThunk';

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';

/*export const getPost = (id) => async (dispatch) => {
  dispatch({ type: GET_POST });
  try {
    // api에서 post를 받아올 때 까지 기다려야함으로 async / await 사용
    const response = await api.getPost(id);
    dispatch({
      type: GET_POST_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: GET_POST_FAILURE,
      payload: e,
      error: true,
    });
    throw e;
  }
  // 나중에 컴포넌트단에서 에러 조회 가능
};

export const getUsers = () => async (dispatch) => {
  dispatch({ type: GET_USERS });
  try {
    // api에서 post를 받아올 때 까지 기다려야함으로 async / await 사용
    const response = await api.getUsers();
    dispatch({
      type: GET_USERS_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: GET_USERS_FAILURE,
      payload: e,
      error: true,
    });
    throw e;
  }
  // 나중에 컴포넌트단에서 에러 조회 가능
};*/

//redux-thunk를 이용하면 액션 객체가 아닌 함수를 리턴해줄 수 있다
//성공 실패에 따라 다른 액션을 디스패치
export const getPost = createRequestThunk(GET_POST, api.getPost);
export const getUsers = createRequestThunk(GET_USERS, api.getUsers);

const initialState = {
  post: null,
  users: null,
};

const sample = handleActions(
  {
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      post: action.payload,
    }),

    [GET_USERS_SUCCESS]: (state, action) => ({
      ...state,
      users: action.payload,
    }),
  },
  initialState
);

export default sample;