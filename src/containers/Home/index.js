import React from 'react';
import PropTypes from 'prop-types';
import NavbarContainer from './Navbar';
import IntroductionContainer from './Introduction';
import CategoriesContainer from './Categories';
import CollectionsContainer from './Collections';
import FabricsContainer from './Fabrics';
import DesignersContainer from './Designers';
import TailorRecruitmentContainer from './TailorRecruitment';
import TopProductsContainer from './TopProducts';
import VoucherContainer from './Voucher';

HomeContainer.propTypes = {
    
};

function HomeContainer(props) {
    return (
        <div className='home'>
            <NavbarContainer/>
            <IntroductionContainer/>
            <CategoriesContainer/>
            <CollectionsContainer/>
            <FabricsContainer/>
            <DesignersContainer/>
            <TailorRecruitmentContainer/>
            <TopProductsContainer/>
            <VoucherContainer/>
        </div>
    );
}

export default HomeContainer;