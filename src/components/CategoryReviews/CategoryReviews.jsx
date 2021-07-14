import React, { useState, useEffect } from 'react'
import FilterMenu from '../Filter Menu/FilterMenu'
import { getAllReviews } from '../../utils/api';
import SingleReviewCard from '../SingleReviewCard/SingleReviewCard';



function CategoryReviews({ catState }) {
    const [categoryReviewContent, setCategoryReviewContent] = useState([]);
    const [sortFilterArg, setSortFilterArg] = useState("created_at");
    const [orderFilterArg, setOrderFilterArg] = useState("desc");

    useEffect(() => {
        getAllReviews(sortFilterArg, orderFilterArg, catState.category).then((allReviewsFromApi) => {
            setCategoryReviewContent(allReviewsFromApi)
        })
    }, [sortFilterArg, orderFilterArg, catState.category])


    return (
        <>
            <FilterMenu setSortFilterArg={setSortFilterArg} setOrderFilterArg={setOrderFilterArg}></FilterMenu>
            <div className="all-reviews">
                <h2>X CAT Reviews</h2>
                <ul>
                {categoryReviewContent.map((review) => {
                        let reviewBody = '';
                        if (review.review_body.length > 75) reviewBody = `${review.review_body.slice(0,75)}...`
                        else reviewBody = review.review_body
                        return (
                            <SingleReviewCard key={review.review_id} review={review} reviewBody={reviewBody} />
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default CategoryReviews
