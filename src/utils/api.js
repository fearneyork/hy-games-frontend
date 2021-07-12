import axios from 'axios';

const hyGamesApi = axios.create({
    baseURL: 'https://hy-games.herokuapp.com/api',
});

export const getAllReviews = async () => {
    const { data } = await hyGamesApi.get('/reviews');
    return data.reviews
};