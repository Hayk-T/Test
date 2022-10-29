import React, {FC, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {CategoryPhotoType, StoreType} from "../types/type";
import {Category} from "../api/category";
import {setCategoryPhotos, addCategoryPhotos} from "../store/reducers/categorySlice";

import './Main.css';

interface PropsType {
}

const Main: FC<PropsType> = ({}) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const selectedCategory = useSelector((state: StoreType) => state.category.selectedCategory);
  const categoryPhotos = useSelector((state: StoreType) => state.category.categoryPhotos);

  const loadMoreHandler = () => {
    setPage((prevPage) => prevPage + 1)
  };

  const fetchDataAndDispatch = (dispatchFunction: any) => {
    const getPhotosFromCategory = async () => {
      const {data} = await Category.getCategoryPhotos(`${selectedCategory.id}`, `${page}`);
      dispatch(dispatchFunction(data))
    };

    getPhotosFromCategory()
      .catch(err => {
        console.error(err.message);
      })
  }

  useEffect(() => {
    if (selectedCategory.id) {
      setPage(1);
      fetchDataAndDispatch(setCategoryPhotos)
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (selectedCategory.id) {
      fetchDataAndDispatch(addCategoryPhotos)
    }
  }, [page])

  return (
    <div>
      {
        categoryPhotos?.map((photo: CategoryPhotoType) => (
          <div key={photo.id}>
            <img
              src={photo.url}
              className='cat-photo'
              alt='Cat Photo'
              style={{width: '250px', height: '250px'}}
            />
          </div>
        ))
      }
      {
        (selectedCategory.id && categoryPhotos.length > 0)
        && <div className='load-more-button' onClick={loadMoreHandler}>
          Load More
        </div>
      }
    </div>
  );
};

export default Main;
