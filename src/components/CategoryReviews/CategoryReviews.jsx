import React, { useState, useEffect } from "react";
import FilterMenu from "../Filter Menu/FilterMenu";
import { getAllReviews } from "../../utils/api";
import SingleReviewCard from "../SingleReviewCard/SingleReviewCard";
import { Redirect, useParams } from "react-router";

function CategoryReviews() {
    const [categoryReviewContent, setCategoryReviewContent] = useState([]);
    const [sortFilterArg, setSortFilterArg] = useState("created_at");
    const [orderFilterArg, setOrderFilterArg] = useState("desc");
    const [_voted, setVoted] = useState(0);
    const [isLoading, setIsLoading] = useState()
    const [error, setError] = useState(null)

    const { category } = useParams();

    useEffect(() => {
        setIsLoading(true);
        setError(null);
        getAllReviews(sortFilterArg, orderFilterArg, category).then(
            (allReviewsFromApi) => {
                setCategoryReviewContent(allReviewsFromApi)
                setIsLoading(false)
            }
        )
        .catch( async ({response}) => {
            await setIsLoading(false)
            await setError(response.status)
        })
    }, [sortFilterArg, orderFilterArg, category, _voted]);

    if (!error & !isLoading) {
        return (
            <>
                <FilterMenu
                    setSortFilterArg={setSortFilterArg}
                    setOrderFilterArg={setOrderFilterArg}
                ></FilterMenu>
                <div className="all-reviews">
                    <h2>X CAT Reviews</h2>
                    <ul>
                        {categoryReviewContent.map((review) => {
                            let reviewBody = "";
                            if (review.review_body.length > 75)
                                reviewBody = `${review.review_body.slice(
                                    0,
                                    75
                                )}...`;
                            else reviewBody = review.review_body;
                            return (
                                <SingleReviewCard
                                    setVoted={setVoted}
                                    isHome={false}
                                    key={review.review_id}
                                    review={review}
                                    reviewBody={reviewBody}
                                />
                            );
                        })}
                    </ul>
                </div>
            </>
        );
    } else if (error && !isLoading) {
        return(<Redirect to="/*" />)
    } else {
        return <p>is Loading...</p>
    }
}

export default CategoryReviews;
