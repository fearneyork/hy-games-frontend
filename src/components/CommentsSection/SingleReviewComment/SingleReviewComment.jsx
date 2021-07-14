import React from 'react'

function SingleReviewComment({ comment }) {
    return (
        <>
            <h3>{comment.author}</h3>
            <p>{comment.body}</p>
            <p>{comment.votes}</p>
            <p>Commented on: {new Date(comment.created_at).toDateString()}</p>
        </>
    )
}

export default SingleReviewComment
