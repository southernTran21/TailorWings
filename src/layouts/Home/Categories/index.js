import HomeCategories from "components/Pages/Home/Categories";
import React from "react";


CategoriesContainer.propTypes = {};

function CategoriesContainer(props) {
    return (
        <section className="l-home__categories">
            <HomeCategories />
        </section>
    );
}

export default CategoriesContainer;
