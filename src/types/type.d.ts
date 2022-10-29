interface CategoryType {
  id: number,
  name: string
}

export interface CategorysType {
  data: {
    data: CategoryType[];
  };
}

export interface CategoryPhotoType {
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface CategoryPhotosType {
  data: {
    data: CategoryType[];
  };
}

export interface StoreType {
  category: {
    category: CategoryType[];
    selectedCategory: CategoryType;
    categoryPhotos: CategoryPhotoType[];
  }
}