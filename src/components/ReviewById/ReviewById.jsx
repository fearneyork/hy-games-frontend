import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewById, getCommentByReviewId } from '../../utils/api';
import AddComment from '../AddComment/AddComment';
import CommentSection from '../CommentsSection/CommentSection';
import NoComments from '../CommentsSection/NoComments/NoComments';
import SingleReviewCard from '../SingleReviewCard/SingleReviewCard';

function ReviewById() {
    const [reviewContent, setReviewContent] = useState({});
    const [commentContent, setCommentContent] = useState([]);

    const { review_id } = useParams();

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
            <SingleReviewCard review={reviewContent} reviewBody={reviewContent.review_body}></SingleReviewCard>
            <AddComment setCommentContent={setCommentContent}></AddComment>
            {commentContent.length > 0 ? <CommentSection commentContent={commentContent}></CommentSection> : <NoComments review={reviewContent} ></NoComments>}
        </>
    )
}

export default ReviewById
