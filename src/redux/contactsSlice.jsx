import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = { contactsList: [] };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contactsList.push(action.payload);
      },
      prepare(name, number) {
        return { payload: { name: name, number: number, id: nanoid(5) } };
      },
    },
    deleteContact: {reducer(state, action){
        const index = state.contactsList.findIndex(contact => contact.id === action.payload);
        state.contactsList.splice(index, 1);
    }},
  },
});

const persistConfig = {
  key: 'contacts',
  storage: storage,
};

export const {addContact, deleteContact} = contactsSlice.actions;

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const contactsReducer = contactsSlice.reducer;
