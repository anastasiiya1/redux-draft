import { createSlice } from '@reduxjs/toolkit';

// export const deposit = createAction('balance/deposit');
// export const withdraw = createAction('balance/withdraw');

// immer
// export const balanceReducer = createReducer({ value: 1000 }, builder => {
//   builder
//     .addCase(deposit, (state, action) => {
//       state.value += action.payload;
//     })
//     .addCase(withdraw, (state, action) => {
//       state.value -= action.payload;
//     });
// });

 const slice = createSlice({
  name: 'balance',
  initialState: {
    value: 1000,
  },
  reducers: {
    deposit(state, action) {
      state.value += action.payload;
    },
    withdraw(state, action) {
      state.value -= action.payload;
    },
  },
});

export const {deposit, withdraw} = slice.actions;

export default slice.reducer

// export const balanceReducer = (state = { value: 1000 }, action) => {
//   switch (action.type) {
//     case 'balance/deposit':
//       return {
//         ...state,
//         value: state.value + action.payload,
//       };
//     case 'balance/withdraw':
//       return {
//         ...state,
//         value: state.value - action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export const deposit = value => {
//   return {
//     type: 'balance/deposit',
//     payload: value,
//   };
// };

// export const withdraw = value => {
//   return {
//     type: 'balance/withdraw',
//     payload: value,
//   };
// };
