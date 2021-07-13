import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllReviews } from '../../utils/api';
import FilterMenu from '../Filter Menu/FilterMenu';

function AllReviews() {
    
    const [allReviewContent, setallReviewContent] = useState([]);
    const [sortFilterArg, setSortFilterArg] = useState("created_at");
    const [orderFilterArg, setOrderFilterArg] = useState("desc");

    
    useEffect(() => {
        getAllReviews(sortFilterArg, orderFilterArg).then((allReviewsFromApi) =>{
            setallReviewContent(allReviewsFromApi)
        })
    }, [sortFilterArg, orderFilterArg])

    return (
        <>
            <FilterMenu setSortFilterArg={setSortFilterArg} setOrderFilterArg={setOrderFilterArg}></FilterMenu>
            <div className="all-reviews">
                <h2>All Reviews</h2>
                <ul>
                    {allReviewContent.map((review) => {
                        let reviewBody = '';
                        if (review.review_body.length > 75) reviewBody = `${review.review_body.slice(0,75)}...`
                        else reviewBody = review.review_body
                        return (
                            <li key={review.review_id} className="review-card">
                                <Link to={`/reviews/${review.review_id}`} >{review.title}</Link>
                                <p>{reviewBody}</p>
                                <p>Votes: {review.votes}</p>
                                <p>OP: {review.owner}</p>
                                <p>Created on: {new Date(review.created_at).toDateString()}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default AllReviews
