import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
export interface transactionsState {
  recipient: object;
  amount_sent: string;
  currency_from: string;
  phone_number: string;
  country: object;
  bank: object;
  send_amount: object;
  exchangeRate: object;
}
export interface AuthState {
  sendTransactionsState: transactionsState;
}
export const initialState: AuthState = {
  sendTransactionsState: {
    recipient: {},
    amount_sent: "",
    currency_from: "",
    phone_number: "",
    country: {},
    bank: {},
    send_amount: {},
    exchangeRate: {},
  },
};
const authSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    setTransactionCountry: (state, { payload }: PayloadAction<any>) => {
      state.sendTransactionsState.country = payload;
    },

    setTransactionRecipient: (state, { payload }: PayloadAction<any>) => {
      state.sendTransactionsState.recipient = payload;
    },
    setTransactionBank: (state, { payload }: PayloadAction<any>) => {
      state.sendTransactionsState.bank = payload;
    },
    setTransactionAmount: (state, { payload }: PayloadAction<any>) => {
      state.sendTransactionsState.send_amount = payload;
    },

    setExchangeRate: (state, { payload }: PayloadAction<any>) => {
      state.sendTransactionsState.exchangeRate = payload;
    },
     setUpdateTransaction: (state, { payload }: PayloadAction<any>) => {
      state.sendTransactionsState = payload;
    },
  },
});

export const {
  setTransactionCountry,
  setTransactionRecipient,
  setTransactionBank,
  setTransactionAmount,
  setExchangeRate,
  setUpdateTransaction
} = authSlice.actions;
export default authSlice.reducer;

export const getTransactions = (state: RootState) => state?.transaction;
