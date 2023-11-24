// // import SHOP_DATA from '../../shop-data.json';
// import { useContext } from "react";

// import { CategoriesContext } from "../../contexts/categories.context";
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

import { Routes, Route } from 'react-router-dom';

import './shop.styles.scss';
const Shop = () => {
    // const {categoriesMap} = useContext(CategoriesContext);
    return (
    //     <div className='shop-container'>
    //         {Object.keys(categoriesMap).map((title) => {
    //             const products = categoriesMap[title];
    //             return (
    //                 <CategoryPreview key={title} title={title} products={products} />
    //             )
    //         })}
    //     </div>
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    );
};

export default Shop;