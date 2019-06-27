import { all, take } from 'redux-saga/effects';
import { GET_COMMON_REQUEST } from '../actionTypes';
// import { axios } from '../util';

export const getCommon = () => ({
  type: GET_COMMON_REQUEST
});

const getCommonSaga = function* () {
  while (true) {
    try {
      yield take(GET_COMMON_REQUEST);
    } catch (err) {
      console.log(err);
    }
  }
};

export default function* () {
  yield all([getCommonSaga()]);
}
