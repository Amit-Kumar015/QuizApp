import React, { useState } from 'react'
import quizData from '../data/data'

const Questions = ({category}) => {
    const [index, setIndex] = useState(0)
    const [isClicked, setIsClicked] = useState(false)
    const quizques = quizData.find(item => item.category === category).questions
    console.log(quizques);

    const nextQues = () => {
        index < 9 ? setIndex(index+1) : setIndex(0)
    }

    const checkAns = (e) => {
        e.target.innerText === quizques[index].correct ? e.target.classList = "green" : e.target.classList = "red"
    }

    return (
        <div>
            <span>{quizques[index].ques}</span>
            <span>{index+1}/10</span>
            <button className="" onClick={checkAns}>{quizques[index].option1}</button>
            <button className="" onClick={checkAns}>{quizques[index].option2}</button>
            <button className="" onClick={checkAns}>{quizques[index].option3}</button>
            <button className="" onClick={checkAns}>{quizques[index].option4}</button>
            <button className="" onClick={nextQues}>next question</button>
        </div>
    )
}

export default Questions
