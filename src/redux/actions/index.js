import { all } from 'redux-saga/effects';
import common_saga from './commonActions';

export default function* () {
  yield all([common_saga()]);
}
