import './App.css'
import Gamearea from './modules/GameArea/Gamearea'
import { Routes, Route } from 'react-router-dom'
import Gameconfig from './modules/GameConfig/Gameconfig'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Gamearea />} />
        <Route path="/config" element={<Gameconfig />} />
      </Routes>
    </>
  )
}

export default App
