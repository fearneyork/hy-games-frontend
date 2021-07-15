import React, { useState, useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import Error from '../../Pages/Error/Error';
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

    const { review_id } = useParams();

    useEffect(() => {
        setIsLoading(true);
        getReviewById(review_id).then((reviewContentFromApi) => {
            setReviewContent(reviewContentFromApi);
            setIsLoading(false);
        })
        getCommentByReviewId(review_id).then((commentContentFromApi) => {
            setCommentContent(commentContentFromApi);
        })

    }, [review_id, _voted]);

    // Breaks if uncommented
    // if (!isLoading && Object.keys(reviewContent).length === 0) {
    //     console.log(Object.keys(reviewContent).length);
    //     return(<Redirect to="/404" />)
    // }
    if (!isLoading && Object.keys(reviewContent).length !== 0) {
        console.log(reviewContent);
        console.log(Object.keys(reviewContent).length);

        return (
            <>
                <SingleReviewCard setVoted={setVoted} isHome={false} review={reviewContent} reviewBody={reviewContent.review_body}></SingleReviewCard>
                <AddComment setCommentContent={setCommentContent}></AddComment>
                {commentContent.length > 0 ? <CommentSection commentContent={commentContent}></CommentSection> : <NoComments review={reviewContent} ></NoComments>}
            </>
        )
    } 

    return <p>is Loading...</p>
}

export default ReviewById
