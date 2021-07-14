import axios from 'axios';

const hyGamesApi = axios.create({
    baseURL: 'https://hy-games.herokuapp.com/api',
});

export const getAllReviews = async ( sortFilterArg = "created_at", orderFilterArg = "desc", categoryFilterArg = "all" ) => {
    const { data } = await hyGamesApi.get(`/reviews?sort_by=${sortFilterArg}&order=${orderFilterArg}&category=${categoryFilterArg}`);
    return data.reviews;
};

export const getCategories = async () => {
    const { data } = await hyGamesApi.get(`/categories`);
    return data.categories;
};

export const getReviewById = async ( review_id ) => {
    const { data } = await hyGamesApi.get(`/reviews/${review_id}`);
    return data.review;
};

export const getCommentByReviewId = async ( review_id ) => {
    const { data } = await hyGamesApi.get(`/reviews/${review_id}/comments`);
    return data.comment.reverse();
};

export const postCommentByReviewId = async ( review_id, body, created_by ) => {
    const commentBody = {
        body: body,
        created_by: created_by
    }
    const { data } = await hyGamesApi.post(`/reviews/${review_id}/comments`, commentBody);
    const comment = data.comment[0]
    return comment;
}