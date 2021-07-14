import { createSlice } from "@reduxjs/toolkit";
import {drafts} from './drafts'

const draftMessageSlice = createSlice({
  name: "draft",
  initialState: {
    draftMessages: drafts ,
  },
  reducers: {
    saveMessage: (state, action) => {
      if (state.draftMessages.length===5) {
        console.log("you can add only 5 messages");
      } else {
        state.draftMessages = [...state.draftMessages, action.payload];
      }
    }
  }
});

export const { saveMessage } = draftMessageSlice.actions;

export const draftSelector = state => state.draft;

export default draftMessageSlice.reducer;
