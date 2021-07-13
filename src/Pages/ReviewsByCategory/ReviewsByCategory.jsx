import React from 'react'
import CategoryReviews from '../../components/CategoryReviews/CategoryReviews'
import Header from '../../components/Header/Header'



function ReviewsByCategory({ catState }) {


    return (
        <>
            CATGEORY REVIEWS
            <Header></Header>
            <section>
                <CategoryReviews catState={catState}></CategoryReviews>
            </section>
        </>
    )
}

export default ReviewsByCategory
