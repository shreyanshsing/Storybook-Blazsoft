import { configureStore } from "@reduxjs/toolkit";
import messageReducer from '../components/Additionals/DraftMessage/draftMessage.slice'

export default configureStore({
    reducer: {
      draft: messageReducer
    }
  
  });