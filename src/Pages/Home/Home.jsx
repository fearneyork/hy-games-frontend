import React from 'react'
import AllReviews from '../../components/AllReviews/AllReviews'
import FilterMenu from '../../components/Filter Menu/FilterMenu'
import Header from "../../components/Header/Header"

function Home() {
    return (
        <>
            <Header></Header>
            <section>
                <FilterMenu></FilterMenu>
                <AllReviews></AllReviews>
            </section>
        </>
    )
}

export default Home
