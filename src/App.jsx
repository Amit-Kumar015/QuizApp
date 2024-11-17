import { useState } from 'react'
import quizData from './data/data'

function App() {
  const [category, setCategory]= useState("Coding")
  // const [data, setData]= useState([])
  // if(quizData.category === category){
  //   setData(quizData.questions)
  // }
  // console.log(data);

  const quizques= quizData.find(item => item.category === category).questions
  console.log(quizques);
  
  

  return (
    
      <div className='bg-black text-white h-screen'>

      </div>
   
  )
}

export default App
