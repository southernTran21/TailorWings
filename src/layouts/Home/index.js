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
        <div className='l-home'>
            <NavbarContainer/>
            <BannerContainer/>
            <IntroductionContainer/>
            <CategoriesContainer/>
            <CollectionsContainer/>
            <TopProductsContainer/>
            {/* <FabricsContainer/> */}
            <DesignersContainer/>
            <TailorRecruitmentContainer/>
            <VoucherContainer/>
        </div>
    );
}

export default HomeContainer;