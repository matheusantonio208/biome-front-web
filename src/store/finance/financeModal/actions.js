import { CREATE_WALLET } from './actionTypes';

export const createWalletSuccess = (wallet, history) => {
  return {
    type: CREATE_WALLET,
    payload: { wallet, history },
  };
};
