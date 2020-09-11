import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("ADD_NEW_CONTACT");
export const deleteContact = createAction("DELETE_CONTACT");
export const addFilter = createAction("FILTER_CONTACT");
