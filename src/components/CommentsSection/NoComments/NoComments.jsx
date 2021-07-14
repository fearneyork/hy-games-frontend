import React from 'react'

function NoComments({ review }) {
    return (
        <div>
            <p>No comments found for <em>{review.title}</em>, be the first to add one! 😁</p>
        </div>
    )
}

export default NoComments
