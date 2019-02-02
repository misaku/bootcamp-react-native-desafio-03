import { all, takeLatest } from 'redux-saga/effects';
import { addFavorite } from './favorites';
import { Types as favoritesTypes } from '../ducks/favorites';

export default function* rootSaga() {
  yield all([
    takeLatest(favoritesTypes.ADD_REQUEST, addFavorite),
  ]);
}
