import { addFilter, addContact, deleteContact } from "./phoneActions";
import { createReducer } from "@reduxjs/toolkit";

const contactReducer = createReducer([], {
  [addContact]: (state, action) => [...state, action.payload],
  [deleteContact]: (state, action) => [
    ...state.filter((contact) => contact.id !== action.payload),
  ],
});

const filterReducer = createReducer("", {
  [addFilter]: (state, action) => {
    return (state = action.payload);
  },
});

export { contactReducer, filterReducer };
