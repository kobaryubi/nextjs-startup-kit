import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@/app/store';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    }
  }
})

//     incrementByAmount: (state, action) => {
//       state.value += action.payload
//     }
//   }
// })

export const { increment, decrement } = counterSlice.actions;
export const selectCount = (state: RootState) => {
  return state.counter.value
}
export default counterSlice.reducer
// export const { incrementByAmount } = counterSlice.actions
