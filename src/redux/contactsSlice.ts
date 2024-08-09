import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Contact } from '../Types/types';


interface ContactsState {
  contacts: Contact[];
}

// Load contacts from localStorage if available, otherwise use empty array
const loadContactsFromStorage = (): Contact[] => {
  try {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : [];
  } catch (error) {
    console.error('Failed to load contacts from localStorage', error);
    return [];
  }
};

// save contacts to localstorage
const saveContactsToStorage = (contacts: Contact[]) => {
  try {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  } catch (error) {
    console.error('Failed to save contacts to localStorage', error);
  }
};


// initial state of contacts
const initialState: ContactsState = {
  contacts: loadContactsFromStorage(),
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
      saveContactsToStorage(state.contacts);
    },
    updateContact: (state, action: PayloadAction<Contact>) => {
      const index = state.contacts.findIndex((contact) => contact.id === action.payload.id);
      if (index !== -1) {
        state.contacts[index] = action.payload;
        saveContactsToStorage(state.contacts);
      }
    },
    deleteContact: (state, action: PayloadAction<string>) => {
      state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
      saveContactsToStorage(state.contacts);
    },
  },
});

export const { addContact, updateContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
