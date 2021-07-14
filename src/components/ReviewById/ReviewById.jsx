import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewById, getCommentByReviewId } from '../../utils/api';
import SingleReviewComment from '../SingleReviewComment/SingleReviewComment';
import SingleReviewCard from '../SingleReviewCard/SingleReviewCard';

function ReviewById() {
    const [reviewContent, setReviewContent] = useState({});
    const [commentContent, setCommentContent] = useState([]);

    const { review_id } = useParams();

    console.log(reviewContent);
    console.log(commentContent);

    useEffect(() => {
        getReviewById(review_id).then((reviewContentFromApi) => {
            setReviewContent(reviewContentFromApi);
        })
        getCommentByReviewId(review_id).then((commentContentFromApi) => {
            setCommentContent(commentContentFromApi);
        })
    }, [review_id]);

    return (
        <>
            <section>
                <SingleReviewCard review={reviewContent} reviewBody={reviewContent.review_body}></SingleReviewCard>
            </section>
            <section>
                {commentContent.map((comment) => {
                    return (
                        <SingleReviewComment comment={comment}></SingleReviewComment>
                    )
                })}
            </section>
        </>
    )
}

export default ReviewById
