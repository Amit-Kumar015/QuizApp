import React from 'react'
import { Link } from 'react-router-dom'

const Landing = ({ setCategory }) => {
    const categories = ["Science", "Mathematics", "History", "Geography", "Coding"]

    const handleCategory = (e) => {
        setCategory(e.target.innerText)
    }

    return (
        <div>
            <div>Basics Quiz</div>
            <p>select one of the categories</p>
            {categories.map((category) => (
                <div key={category}>
                    <button onClick={handleCategory}>{category}</button>
                </div>
            ))}

            <Link to="/questions">
                <button>Start quiz</button>
            </Link>
        </div>
    )
}

export default Landing
