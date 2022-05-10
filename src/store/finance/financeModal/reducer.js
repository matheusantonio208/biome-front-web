import { CREATE_WALLET } from './actionTypes';

const initialState = {
  createWalletSuccessMsg: null,
  createWalletError: null,
};

const createWallet = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_WALLET:
      state = {
        ...state,
        createWalletSuccessMsg: null,
        createWalletError: null,
      };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default createWallet;
