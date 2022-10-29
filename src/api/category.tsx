import {axiosInstance} from './instanceApi';
import {CategoryPhotosType, CategorysType} from "../types/type";

export const Category = {
  getCategory: async (): Promise<CategorysType> => {
    return await axiosInstance.get('categories');
  },

  getCategoryPhotos:
    async (id: string, page: string): Promise<CategoryPhotosType> => {
    return await axiosInstance.get('images/search?limit=10&', {
      params: {
        category_ids: id,
        page: page,
      }
    });
  }
};