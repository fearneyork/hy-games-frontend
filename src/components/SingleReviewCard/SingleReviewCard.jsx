import React from 'react'
import { Link } from 'react-router-dom'
import { patchVote } from '../../utils/api'


function SingleReviewCard({ setVoted, isHome, review, reviewBody }) {
    const review_id = review.review_id

    return (
        <li className="review-card">
            {isHome ? <Link to={`/reviews/${review_id}`} ><h3>{review.title}</h3></Link>: <h3>{review.title}</h3>}
            <p>{reviewBody}</p>
            <p>Votes: {review.votes}</p>
            <p>OP: {review.owner}</p>
            <p>Created on: {new Date(review.created_at).toDateString()}</p>
            <button onClick={
                async () => {
                    await patchVote(review_id, 1)
                    await setVoted((currVote) =>  currVote + 1)
                }
            }>+1 Vote</button>
        </li>
    )
}

export default SingleReviewCard
