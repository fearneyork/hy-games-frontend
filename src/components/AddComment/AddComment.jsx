import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../contexts/User'
import { postCommentByReviewId, getCommentByReviewId } from '../../utils/api';

function AddComment({ setCommentContent }) {
    const { user } = useContext(UserContext);
    const { review_id } = useParams();

    const updateComments = () => {
        getCommentByReviewId(review_id).then((commentContentFromApi) => {
            setCommentContent(commentContentFromApi);
        })
    }

    return (
        <form>
            <h3>Add a comment</h3>
            <input type="text" id="add-comment" className="comment=box"></input>
            <label htmlFor="add-comment"></label>
            <button  onClick={
                async (event) => {
                    event.preventDefault()
                    await postCommentByReviewId( review_id, document.getElementById("add-comment").value, user)
                    await updateComments()
                }}>Post comment</button>
        </form>
    )
}

export default AddComment
