import { createSlice } from '@reduxjs/toolkit'
import {stat} from "fs";
import {CategoryPhotoType, CategoryType} from "../../types/type";

export const categorySlice = createSlice({
  name: 'category',
  initialState: {
    category: [] as CategoryType[],
    selectedCategory: {} as CategoryType,
    categoryPhotos: [] as CategoryPhotoType[]
  },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    selectCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setCategoryPhotos: (state, action) => {
      state.categoryPhotos = action.payload;
    },
    addCategoryPhotos: (state, action) => {
      state.categoryPhotos = [...state.categoryPhotos, ...action.payload]
    }
  },
})

// Action creators are generated for each case reducer function
export const { setCategory, selectCategory, setCategoryPhotos, addCategoryPhotos } = categorySlice.actions

export default categorySlice.reducer