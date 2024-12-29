import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import quizData from '../data/data'

const Questions = ({ category, points, setPoints }) => {
    
    const [index, setIndex] = useState(0)
    const [isDisabled, setIsDisabled] = useState(false)
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
        if(e.target.name === quizques[index].correct){
            e.target.classList = "bg-green-900";
            setPoints(points + 1)
        }
        else{
            e.target.classList = "bg-red-900"
        }
        
        setIsDisabled(true)
    }

    const options = [
        { name: "option1", text: quizques[index].option1, correct: quizques[index].correct === "option1" ? true : false },
        { name: "option2", text: quizques[index].option2, correct: quizques[index].correct === "option2" ? true : false },
        { name: "option3", text: quizques[index].option3, correct: quizques[index].correct === "option3" ? true : false },
        { name: "option4", text: quizques[index].option4, correct: quizques[index].correct === "option4" ? true : false },
    ];


    return (
        <div id='questions'>
            <span>{quizques[index].ques}</span>
            <span>{index + 1}/10</span>
            {
            options.map((option) => (
                <button
                    key={option.name}
                    name={option.name}
                    className=''
                    onClick={checkAns}
                    disabled={isDisabled}
                >
                    {option.text}
                </button>)) 
            }
            <span style={{display: isDisabled ? "block" : "none"}}>{quizques[index].correct}</span>
            <button
                className=""
                onClick={nextQues}
            >next question
            </button>
        </div>
    )
}

export default Questions
