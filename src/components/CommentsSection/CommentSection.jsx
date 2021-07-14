import React from 'react'
import SingleReviewComment from './SingleReviewComment/SingleReviewComment'

function CommentSection({ commentContent }) {
    return (
        <>
            <section>
                {commentContent.map((comment) => {
                    return (
                        <SingleReviewComment key={comment.comment_id} comment={comment}></SingleReviewComment>
                    )
                })}
            </section>
        </>
    )
}

export default CommentSection
