import React from 'react';
import PropTypes from 'prop-types';
import CategoryItem from 'components/Pages/Home/CategoryItem';
import DamXoe from '../../../assets/Image/category-dam-xoe.png';
import DamSuong from '../../../assets/Image/category-dam-suong.png';
import DamOm from '../../../assets/Image/category-dam-om.png';

const CATEGORIES = [
    {
        name: 'Đầm Xoè',
        number: 320,
        image: DamXoe,
    },
    {
        name: 'Đầm Suông',
        number: 320,
        image: DamSuong,
    },
    {
        name: 'Đầm Ôm',
        number: 320,
        image: DamOm,
    },
]

CategoriesContainer.propTypes = {
    
};

function CategoriesContainer(props) {
    return (
        <section className='home-categories'>
            {
                CATEGORIES.map((category, index) => {
                    return <CategoryItem category = {category} />
                }
                )
            }
            
        </section>
    );
}

export default CategoriesContainer;