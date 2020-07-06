import {takeLatest, all, call, put} from 'redux-saga/effects';

import ShopActionTypes from './actionTypes';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebaseUtil';
import {fetchCollectionsFailure, fetchCollectionSuccess} from "./actions";


export function* fetchCollectionsAsync() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionSuccess(collectionMap));

    } catch (error) {
        yield put(fetchCollectionsFailure(error.message));
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    );
}

export function* shopSagas() {
    yield all([
        call(fetchCollectionsStart)
    ])
}