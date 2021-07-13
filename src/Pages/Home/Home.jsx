import React from 'react'
import AllReviews from '../../components/AllReviews/AllReviews'
import Header from "../../components/Header/Header"

function Home() {
    return (
        <>
            <Header></Header>
            <section>
                <AllReviews></AllReviews>
            </section>
        </>
    )
}

export default Home
