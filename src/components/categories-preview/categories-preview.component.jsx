import { useContext, Fragment } from 'react';
import { useSelector } from 'react-redux';

import CategoryPreview from '../../components/category-preview/category-preview.component';
import { selectCategories } from '../../store/category/category.selector';


const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategories);
    return (
        <Fragment>
            {Object.keys(categoriesMap).map(title => (
                <CategoryPreview key={title} title={title} products={categoriesMap[title].slice(0,4)}/>
            ))}
        </Fragment>
    )
}

export default CategoriesPreview;