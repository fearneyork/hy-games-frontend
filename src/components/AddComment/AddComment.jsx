import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../contexts/User'
import { postCommentByReviewId, getCommentByReviewId } from '../../utils/api';

function AddComment({ setCommentContent }) {
    const { user } = useContext(UserContext);
    const { review_id } = useParams();
    const [hasValue, setHasValue] = useState('')

    const updateComments = () => {
        getCommentByReviewId(review_id).then((commentContentFromApi) => {
            setCommentContent(commentContentFromApi);
        })
    }

    const handleChange = (event) => {
        setHasValue(event.target.value)
    }

    return (
        <form>
            <h3>Add a comment</h3>
            <textarea type="text" id="add-comment" className="comment=box" hasValue={hasValue} onChange={handleChange} required></textarea>
            <label htmlFor="add-comment"></label>
            <button type="submit" disabled={hasValue ? false : true} onClick={
                async (event) => {
                    event.preventDefault()
                    await postCommentByReviewId( review_id, document.getElementById("add-comment").value, user)
                    await updateComments()
                }}>Post comment</button>
        </form>
    )
}

export default AddComment
