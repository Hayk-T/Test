import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from "./reducers/categorySlice";

export default configureStore({
  reducer: {
    category: categoryReducer
  },
})