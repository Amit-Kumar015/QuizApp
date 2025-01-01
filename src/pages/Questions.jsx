import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import quizData from '../data/data'

const Questions = ({ category, points, setPoints }) => {

    const [index, setIndex] = useState(0)
    const [isDisabled, setIsDisabled] = useState(false)
    const [isCorrect, setIsCorrect] = useState(false)
    const navigate = useNavigate()
    const quizques = quizData.find(item => item.category === category).questions

    const nextQues = () => {
        index < 9 ? setIndex(index + 1) : navigate("/result")

        setIsDisabled(false)

        const btns = document.querySelectorAll("button")
        btns.forEach((btn) => (
            btn.classList.remove("bg-green-900", "bg-red-900")
        ))
    }

    const checkAns = (e) => {
        if (e.target.name === quizques[index].correct) {
            e.target.classList.add("bg-green-900");
            setIsCorrect(true)
            setPoints(points + 1)
        }
        else {
            e.target.classList.add("bg-red-900") 
            setIsCorrect(false)
        }
        setIsDisabled(true)
    }

    const options = [
        { name: "option1", text: quizques[index].option1 },
        { name: "option2", text: quizques[index].option2 },
        { name: "option3", text: quizques[index].option3 },
        { name: "option4", text: quizques[index].option4 },
    ];


    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center'>
            <div className='justify-center items-center'>
                <div className='text-center text-3xl mb-4 mt-20 px-10 font-semibold font-mono [@media(max-width:430px)]:text-lg'>{quizques[index].ques}</div>
                <div className='text-lg text-center'>Question: {index + 1}/10</div>
                <div className='flex flex-col w-screen'>
                    {
                        options.map((option) => (
                            <button
                                key={option.name}
                                name={option.name}
                                className='my-2 w-3/5 mx-auto text-lg text-left [@media(max-width:430px)]:text-base'
                                onClick={checkAns}
                                disabled={isDisabled}
                            >
                                {option.text}
                            </button>))
                    }
                </div>
                <div className='text-lg text-center mt-5' style={{ display: isDisabled ? "block" : "none" }}>
                    {isCorrect ? "Correct answer" : `Oops! correct answer was ${quizques[index].correct}`}
                </div>
                <div className='text-center'>
                    <button
                        className="mt-2 bg-blue-800"
                        onClick={nextQues}
                    >Next Question
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Questions
