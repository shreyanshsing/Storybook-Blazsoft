import { createSlice } from "@reduxjs/toolkit";

export const AnnouncementReducer = createSlice({
    name:'annoucementReducer',
    initialState:{
        groups:[]
    },
    reducers : {
        addGroup : (state,action) => {
            state.groups = [...state.groups,action.payload];
        }
    }
});

export default AnnouncementReducer.reducer;

export const {addGroup} = AnnouncementReducer.actions;

export const groupSelector = state => state.AnnouncementReducer.groups;