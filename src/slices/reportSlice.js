import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { basicUrl, token } from '../config/js/variables';

const initialState = {
  symbols: [],
  error: false,
  page: 1,
  loading: false,
  activeItem: '',
  selectCompany: [],
  showWindow: false,
}

export const reportSlice = createSlice({
  name: 'report',
  initialState,
  reducers: {
    SetSymbols: (state, action) => {
        state.symbols = action.payload;
    },
    SetError: (state, action) => {
      state.error = action.payload;
    },
    SetLoading: (state, action) => {
      state.loading = action.payload;
    },
    SetPage: (state, action) => {
      state.page = action.payload;
    },
    SetActiveItem: (state, action) => {
      state.activeItem = action.payload;
    },
    SetSelectCompany: (state, action) => {
      state.selectCompany = action.payload;
    },
    SetShowWindow: (state, action) => {
      state.showWindow = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { SetSymbols, SetError, SetLoading, SetPage, SetActiveItem, SetSelectCompany, SetShowWindow } = reportSlice.actions;

// Selectors
export const selectSymbols = (state) => state.reports.symbols;
export const selectErrorSymbols = (state) => state.reports.errorSymbols;
export const selectLoading = (state) => state.reports.loading;
export const selectPage = (state) => state.reports.page;
export const selectActiveItem = (state) => state.reports.activeItem;
export const selectCompany = (state) => state.reports.selectCompany;
export const selectShowWindow = (state) => state.reports.showWindow;

// Thunk actions 
export const getSymbols = () => {
  return async (dispatch) => {
    dispatch(SetLoading(true));
    try{
      const res = await axios.get(basicUrl + `/stable/ref-data/symbols?token=${token}`);
      dispatch(SetSymbols(res.data));
      dispatch(SetLoading(false));
    } catch {
      dispatch(SetError(true));
    }
  }
};

export const getCompanyData = (symbol) => {
  return async (dispatch) => {
    try{
      const res = await axios.get(basicUrl + `/stable/stock/${symbol}/quote?token=${token}`);
      dispatch(SetSelectCompany(res.data));
    } catch {
      dispatch(SetError(true));
    }
  }
};

export default reportSlice.reducer;
