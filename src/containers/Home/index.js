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
import BannerContainer from './Banner';

HomeContainer.propTypes = {
    
};

function HomeContainer(props) {
    return (
        <div className='home'>
            <NavbarContainer/>
            <BannerContainer/>
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