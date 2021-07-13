import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getCategories } from '../../../utils/api'


function MenuExpanded() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories().then((allCategoriesFromApi) => {
            setCategories(allCategoriesFromApi)
        })
    }, [])
    return (
        <div>
            EXPANDED MENU
            <Link to="/"><h3>Home</h3></Link>
            <h3>Categories</h3>
                {categories.map((category) => {
                    return (
                        <Link key={category.slug} to={{
                            pathname: `/reviews/categories/${category.slug}`,
                            state: {
                                category: category.slug
                            }
                            }} ><li>{category.slug}</li></Link>
                    )
                })}
        </div>
    )
}

export default MenuExpanded
