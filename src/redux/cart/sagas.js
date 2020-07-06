import {all, call, takeLatest, put} from 'redux-saga/effects';

import {UserActionTypes} from "../user/actionTypes";
import {clearCart} from "./actions";


export function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* clearCartOnSignOut() {
    yield put(clearCart());
}

export function* cartSagas() {
    yield all([
        call(onSignOutSuccess)
    ])
}