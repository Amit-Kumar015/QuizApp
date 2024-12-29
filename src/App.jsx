import { useState } from 'react'
import quizData from './data/data'
import Landing from './pages/Landing';
import Questions from './pages/Questions';
import { Route, Routes } from 'react-router-dom';
import { Result } from './pages/Result';
import { BrowserRouter } from 'react-router-dom'


function App() {
  const [category, setCategory] = useState("Coding")
  const [points, setPoints] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing setCategory={setCategory} />} />
        <Route path='/questions' element={<Questions category={category} points={points} setPoints={setPoints} />} />
        <Route path='/result' element={<Result points={points} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
