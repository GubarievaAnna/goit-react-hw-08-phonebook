import { createSlice } from '@reduxjs/toolkit';
import { getContacts, addContacts, removeContacts } from './contactsOperations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
    isLoading: false,
    error: '',
  },
  reducers: {
    filterContacts(state, { payload }) {
      state.filter = payload;
    },
  },
  extraReducers: {
    [getContacts.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [getContacts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
    },
    [getContacts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [addContacts.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [addContacts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = [...state.items, payload];
    },
    [addContacts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [removeContacts.pending]: state => {
      state.isLoading = false; // remove without loading
      state.error = null;
    },
    [removeContacts.fulfilled]: (state, { payload }) => {
      state.items = state.items.filter(el => el.id !== payload);
    },
    [removeContacts.rejected]: (state, { payload }) => {
      state.error = payload;
    },
  },
});

export const { filterContacts } = contactsSlice.actions;
export default contactsSlice.reducer;
