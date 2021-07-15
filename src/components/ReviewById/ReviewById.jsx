import React, { useState, useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { getReviewById, getCommentByReviewId } from '../../utils/api';
import AddComment from '../AddComment/AddComment';
import CommentSection from '../CommentsSection/CommentSection';
import NoComments from '../CommentsSection/NoComments/NoComments';
import SingleReviewCard from '../SingleReviewCard/SingleReviewCard';

function ReviewById() {
    const [reviewContent, setReviewContent] = useState({});
    const [commentContent, setCommentContent] = useState([]);
    const [_voted, setVoted] = useState(0);
    const [isLoading, setIsLoading] = useState();
    const [error, setError] = useState(null)

    const { review_id } = useParams();

    useEffect(() => {
        setIsLoading(true);
        setError(null);
        getReviewById(review_id).then((reviewContentFromApi) => {
            setReviewContent(reviewContentFromApi)
            setIsLoading(false);
        })
        getCommentByReviewId(review_id).then((commentContentFromApi) => {
            setCommentContent(commentContentFromApi);
        })
        .catch( async ({response}) => {
            await setIsLoading(false)
            await setError(response.status)
        })
        
    }, [review_id, _voted]);

    if (!error && !isLoading) {
        return (
            <>
                <SingleReviewCard setVoted={setVoted} isHome={false} review={reviewContent} reviewBody={reviewContent.review_body}></SingleReviewCard>
                <AddComment setCommentContent={setCommentContent}></AddComment>
                {commentContent.length > 0 ? <CommentSection commentContent={commentContent}></CommentSection> : <NoComments review={reviewContent} ></NoComments>}
            </>
        )
    } else if (error && !isLoading) {
        return(<Redirect to="/*" />)
    } else {
        return <p>is Loading...</p>
    }    
}

export default ReviewById
