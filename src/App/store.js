import { configureStore } from "@reduxjs/toolkit";

import AnnouncementReducer from "../components/Announcement/redux/page1.slice";
import AutoCompleteReducer from "../components/Additionals/AutoComplete/redux/autocomplete.slice";

export default configureStore({
    reducer :{
        AnnouncementReducer : AnnouncementReducer,
        autocompeleteReducer : AutoCompleteReducer
    }
});