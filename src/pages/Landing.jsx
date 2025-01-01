import React from 'react'
import { Link } from 'react-router-dom'
import { VortexDemoSecond } from '../components/AceternityUI/vortexEffect/vortexComponent'

const Landing = ({ setCategory }) => {
    const categories = ["Science", "Mathematics", "History", "Geography", "Coding"]

    const handleCategory = (e) => {
        setCategory(e.target.innerText)
    }

    return (
        <div className='h-screen w-screen flex flex-col justify-center items-center'>
            <VortexDemoSecond></VortexDemoSecond>
            <div className='justify-center items-center z-20'>
                <div className='text-center text-5xl font-bold mb-8 [@media(max-width:430px)]:text-3xl'>Basic Quiz</div>
                <p className='text-center text-2xl mb-3 [@media(max-width:430px)]:text-xl'>Select one of the categories</p>
                <div className='text-center'>
                    {categories.map((category) => (
                        <span key={category}>
                            <button className="m-2" onClick={handleCategory}>{category}</button>
                        </span>
                    ))}
                </div>

                <div className='flex justify-center items-center mt-7'>
                    <div className='justify-center items-center'>
                        <Link to="/questions">
                            <button className='w-40 text-xl'>Start</button>
                        </Link>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default Landing
