import { useState } from 'react'
import quizData from './data/data'
import Landing from './pages/Landing';
import Questions from './pages/Questions';

function App() {
  const [category, setCategory]= useState("Coding")
  // const [data, setData]= useState([])
  // if(quizData.category === category){
  //   setData(quizData.questions)
  // }
  // console.log(data);

  const quizques= quizData.find(item => item.category === category).questions
  // console.log(quizques);
  
  

  return (
    <>
      <Landing setCategory={setCategory}/>
      <Questions category={category}/>
    </>
  )
}

export default App
