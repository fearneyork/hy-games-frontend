import React, { useState } from 'react'
import Expandable from '../Expandable/Expandable';


function FilterMenu({ setSortFilterArg, setOrderFilterArg }) {
    const [sortByVal, setSortByVal] = useState("created_at");
    const [orderVal, setOrderVal] = useState("desc");

    return (
        <Expandable location="filter">
            <form>
                <section className="sort-filter-section">
                    <p>Filter by:</p>
                    <input type="radio" id="date" name="sort_by" value="created_at" onChange={(event) => setSortByVal(event.target.value)}/>
                    <label htmlFor="date">Date</label>
                    <input type="radio" id="votes" name="sort_by" value="votes" onChange={(event) => setSortByVal(event.target.value)}/>
                    <label htmlFor="votes">Votes</label>
                    <input type="radio" id="title" name="sort_by" value="title" onChange={(event) => setSortByVal(event.target.value)}/>
                    <label htmlFor="title">Title</label>
                    <input type="radio" id="owner" name="sort_by" value="owner" onChange={(event) => setSortByVal(event.target.value)}/>
                    <label htmlFor="owner">Owner</label>
                </section>
                <section className="order-filter-section">
                    <p>Sort by:</p>
                    <input type="radio" id="asc" name="order" value="asc" onChange={(event) => setOrderVal(event.target.value)}/>
                    <label htmlFor="asc">Asc</label>
                    <input type="radio" id="desc" name="order" value="desc" onChange={(event) => setOrderVal(event.target.value)}/>
                    <label htmlFor="desc">Desc</label>
                </section>
                <button onClick={(event) => {
                    event.preventDefault()
                    setSortFilterArg(sortByVal)
                    setOrderFilterArg(orderVal)
                    }}>Apply Filters</button>
            </form>
        </Expandable>
    )
}

export default FilterMenu
