import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllReviews } from '../../utils/api';

function AllReviews() {
    const [allReviewContent, setallReviewContent] = useState([]);
    const [filterArgs, setFilterArgs] = useState({})

    useEffect(() => {
        getAllReviews().then((allReviewsFromApi) =>{
            setallReviewContent(allReviewsFromApi)
        })
    }, [])

    return (
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
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default AllReviews
