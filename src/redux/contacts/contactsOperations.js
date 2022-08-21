import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getContactsApi,
  addContactsApi,
  removeContactsApi,
} from '../../utils/Api';

export const getContacts = createAsyncThunk(
  'getContacts',
  async (token, thunkApi) => {
    try {
      const items = await getContactsApi(token);
      return items;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'addContacts',
  async (item, { rejectWithValue }) => {
    try {
      const addedItem = addContactsApi(item);
      return addedItem;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const removeContacts = createAsyncThunk(
  'removeContacts',
  async (id, { rejectWithValue }) => {
    try {
      await removeContactsApi(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
