import React, { useState } from 'react'

function FilterMenu() {
    const [sortByVal, setSortByVal] = useState("created_at");
    const [orderVal, setOrderVal] = useState("desc");

    console.log(sortByVal, "<<< sort by value")
    console.log(orderVal, "<<< order value");

    return (
        <form>
            <section className="sort-filter-section">
                <p>Order by:</p>
                <input type="radio" id="date" name="sort_by" value="created_at" onChange={(event) => setSortByVal(event.target.value)}/>
                <label for="date">Date</label>
                <input type="radio" id="votes" name="sort_by" value="votes" onChange={(event) => setSortByVal(event.target.value)}/>
                <label for="votes">Votes</label>
                <input type="radio" id="title" name="sort_by" value="title" onChange={(event) => setSortByVal(event.target.value)}/>
                <label for="title">Title</label>
                <input type="radio" id="owner" name="sort_by" value="owner" onChange={(event) => setSortByVal(event.target.value)}/>
                <label for="owner">Owner</label>
            </section>
            <section className="order-filter-section">
                <input type="radio" id="asc" name="order" value="asc" onChange={(event) => setOrderVal(event.target.value)}/>
                <label for="asc">Asc</label>
                <input type="radio" id="desc" name="order" value="desc" onChange={(event) => setOrderVal(event.target.value)}/>
                <label for="desc">Desc</label>
            </section>
            <button>Apply Filters</button>
        </form>
    )
}

export default FilterMenu
