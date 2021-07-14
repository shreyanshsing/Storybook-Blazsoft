import { configureStore } from "@reduxjs/toolkit";
import messageReducer from '../components/Additionals/DraftMessage/draftMessage.slice'
import AnnouncementReducer from "../components/Announcement/redux/page1.slice";
import AutoCompleteReducer from "../components/Additionals/AutoComplete/redux/autocomplete.slice";

export default configureStore({
    reducer :{
        AnnouncementReducer : AnnouncementReducer,
        autocompeleteReducer : AutoCompleteReducer,
        draft: messageReducer
    }
});
