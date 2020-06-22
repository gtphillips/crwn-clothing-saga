import { all, call } from 'redux-saga/effects';

import { fetchcollectionsStart } from './shop/shop.sagas';

export default function* rootSaga() {
	yield all([call(fetchcollectionsStart)]);
}