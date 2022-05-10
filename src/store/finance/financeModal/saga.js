import { toast } from 'react-toastify';
import { put, all, takeLatest } from 'redux-saga/effects';

import history from '../../../lib/history-lib';

import { CREATE_WALLET } from './actionTypes';
import { createWalletSuccess } from './actions.js';

export function* createWallet({ payload }) {
  try {
    const { data } = payload;

    yield put(createWalletSuccess(data));
    history.push('/labs');
  } catch (error) {
    toast.error('Error. Check the request!');
  }
}

export default all([takeLatest(CREATE_WALLET, createWallet)]);
