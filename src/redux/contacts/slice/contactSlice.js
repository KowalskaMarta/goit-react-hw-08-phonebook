import { createSlice } from '@reduxjs/toolkit';
import { getContacts, addContact, deleteContact, updateContact } from '#redux/contacts/operation';

const initialContacts = {
  items: [],
  isLoading: false,
  error: null,
  status: 'idle',
};

const contactSlice = createSlice({
  name: 'contact',
  initialState: initialContacts,

  extraReducers: builder => {
    builder
      // getContacts
      .addCase(getContacts.pending, state => {
        state.status = 'pending';
      })
      .addCase(getContacts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.error = null;
        state.items = action.payload;
      })
      .addCase(getContacts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // addContact
      .addCase(addContact.pending, state => {
        state.status = 'pending';
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = [...state.items, action.payload];
      })
      .addCase(addContact.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })

      // deleteContact
      .addCase(deleteContact.pending, state => {
        state.status = 'pending';
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items.splice(
          state.items.findIndex(contact => contact.id === action.payload.id),
          1
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // updateContact
      .addCase(updateContact.pending, state => {
        state.status = 'pending';
      })
      .addCase(updateContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items[index].name = action.payload.name;
        state.items[index].number = action.payload.number;
      })
      .addCase(updateContact.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const contactReducer = contactSlice.reducer;
