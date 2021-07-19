import React from "react";
import { Link } from "react-router-dom";
import { patchVote } from "../../utils/api";
import "./SingleReviewCard.css";

function SingleReviewCard({ setVoted, isHome, review, reviewBody }) {
    const review_id = review.review_id;

    return (
        <li className="review-card">
            <section className="review-card__title-owner">
                {isHome ? (
                    <Link to={`/reviews/${review_id}`}>
                        <h3>{review.title}</h3>
                    </Link>
                ) : (
                    <h3>{review.title}</h3>
                )}
                <p>OP: {review.owner}</p>
            </section>
            <p>{reviewBody}</p>
            <section className="review-card__votes-date">
                <p>Created on: {new Date(review.created_at).toDateString()}</p>
                <section className="review-card__votes">
                    <p>Votes: {review.votes}</p>
                    <button
                        onClick={async () => {
                            await patchVote(review_id, 1);
                            await setVoted((currVote) => currVote + 1);
                        }}
                    >
                        +1 Vote
                    </button>
                </section>
            </section>
        </li>
    );
}

export default SingleReviewCard;
