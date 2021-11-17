import React from 'react';
import Sample from '../components/Sample';
import { getPost, getUsers } from '../modules/sample';
import { useSelector, useDispatch } from 'react-redux';

const { useEffect } = React;
const SampleContainer = () => {
  const state = useSelector((state) => state.sample);
  const dispatch = useDispatch();
  useEffect(() => {
    //아마 dispatch를 array내부로 안넣어줘서 의존성 미싱이라며 난리칠텐데 상관없다.
    dispatch(getPost(1));
    dispatch(getUsers(1));
    // eslint-disable-next-line
  }, [getPost, getUsers]);
  return (
    <Sample
      post={state.post}
      users={state.users}
      loadingPost={state.loading.GET_POST}
      loadingUsers={state.loading.GET_USERS}
    />
  );
};

export default React.memo(SampleContainer);