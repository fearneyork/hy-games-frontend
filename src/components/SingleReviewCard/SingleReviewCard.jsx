import React from 'react'
import { Link } from 'react-router-dom'


function SingleReviewCard({ review, reviewBody }) {
    return (
        <li className="review-card">
            <Link to={`/reviews/${review.review_id}`} >{review.title}</Link>
            <p>{reviewBody}</p>
            <p>Votes: {review.votes}</p>
            <p>OP: {review.owner}</p>
            <p>Created on: {new Date(review.created_at).toDateString()}</p>
        </li>
    )
}

export default SingleReviewCard
