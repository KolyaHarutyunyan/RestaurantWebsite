import { fork } from 'redux-saga/effects'
import { watchAuth } from '../auth'
import { watchProfile } from '../profile'

export const appSaga = function* startForman() {
    yield fork(watchAuth);
    yield fork(watchProfile);
};
