import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../../../utils/api";
import './MenuExpanded.css'
import CategoryIcon from '@material-ui/icons/Category';
import HomeIcon from '@material-ui/icons/Home';

function MenuExpanded() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then((allCategoriesFromApi) => {
            setCategories(allCategoriesFromApi);
        });
    }, []);
    return (
        <nav className="menu-expanded">
            <Link to="/"><span className="menu-expanded__home-link"><HomeIcon/>Home</span></Link>
            <h3 className="menu-expanded__subheading"><CategoryIcon />Categories</h3>
            <ul className="menu-expanded__list">
                {categories.map((category) => {
                    return (
                        <li className="menu-expanded__list-item">
                            <Link
                                key={category.slug}
                                to={{
                                    pathname: `/reviews/categories/${category.slug}`,
                                    state: {
                                        category: category.slug,
                                    },
                                }}
                            >
                                {category.slug}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default MenuExpanded;
