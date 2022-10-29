import React, {FC, useEffect} from 'react';
import {setCategory, selectCategory} from '../store/reducers/categorySlice';
import {Category} from "../api/category";
import {useDispatch, useSelector} from "react-redux";
import {CategoryType, StoreType} from "../types/type";

import "./SideBar.css";

interface PropsType {
}

const SideBar: FC<PropsType> = ({}) => {
  const dispatch = useDispatch();
  const {category} = useSelector((state: StoreType) => state.category)
  const selectedCategory = useSelector((state: StoreType) => state.category.selectedCategory);

  const categoryClickHandler = (category: CategoryType) => {
    dispatch(selectCategory(category))
  }

  useEffect(() => {
    const getCategory = async () => {
      const {data} = await Category.getCategory();
      dispatch(setCategory(data))
    };

    getCategory()
      .catch((err) => {
        console.error(err.message);
      })

  }, []);

  return (
    <div className='main-sidebar'>
      {
        category?.map((elem: CategoryType) => (
          <div
            key={elem.id}
            className={`category-button ${selectedCategory.id === elem.id && 'category-button-selected'}`}
            onClick={() => categoryClickHandler(elem)}>
            {
              elem.name
            }
          </div>
        ))
      }
    </div>
  );
};

export default SideBar;
