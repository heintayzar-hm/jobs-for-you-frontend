import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    alert: null,
    notice: null,
  },
  reducers: {
    setNotice: (state, action) => ({ ...state, notice: action.payload, alert: null }),
    setAlert: (state, action) => ({ ...state, alert: action.payload, notice: null }),
    clearAll: (state) => ({ ...state, alert: null, notice: null }),
  },
});

export const { setNotice, setAlert, clearAll } = appSlice.actions;
export default appSlice.reducer;
