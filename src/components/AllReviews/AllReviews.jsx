import React, { useState, useEffect } from 'react';
import { getAllReviews } from '../../utils/api';
import FilterMenu from '../Filter Menu/FilterMenu';
import SingleReviewCard from '../SingleReviewCard/SingleReviewCard';
import "./AllReviews.css"



function AllReviews() {
    
    const [allReviewContent, setallReviewContent] = useState([]);
    const [sortFilterArg, setSortFilterArg] = useState("created_at");
    const [orderFilterArg, setOrderFilterArg] = useState("desc");
    const [_voted, setVoted] = useState(0);
    
    useEffect(() => {
        getAllReviews(sortFilterArg, orderFilterArg).then((allReviewsFromApi) =>{
            setallReviewContent(allReviewsFromApi)
        })
    }, [sortFilterArg, orderFilterArg, _voted])

    return (
        <section className="container">
            <header className="reviews-header">
                <h2 className="reviews-header__title">All Reviews</h2>
                <FilterMenu setSortFilterArg={setSortFilterArg} setOrderFilterArg={setOrderFilterArg}></FilterMenu>
            </header>
            <ul className="review-list">
                {allReviewContent.map((review) => {
                    let reviewBody = '';
                    if (review.review_body.length > 75) reviewBody = `${review.review_body.slice(0,75)}...`
                    else reviewBody = review.review_body
                    return (
                        <SingleReviewCard setVoted={setVoted} isHome={true} sortFilterArg={sortFilterArg} orderFilterArg={orderFilterArg} setallReviewContent={setallReviewContent} key={review.review_id} review={review} reviewBody={reviewBody} />
                    )
                })}
            </ul>
        </section>
    )
}

export default AllReviews
