import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Gamearea from './modules/GameArea/Gamearea'
import Gameconfig from './modules/GameConfig/Gameconfig'

export type initialPlayersProps = {
  [key: string]: { name: string; score: number; set: number; actif: boolean }
}

const initialPlayers: initialPlayersProps = {
  player1: {
    name: 'Alice',
    score: 0,
    set: 0,
    actif: true,
  },
  player2: {
    name: 'Florent',
    score: 0,
    set: 0,
    actif: true,
  },
  player3: {
    name: 'Éléonore',
    score: 0,
    set: 0,
    actif: true,
  },
  player4: {
    name: 'Joueur 4',
    score: 0,
    set: 0,
    actif: true,
  },
}

function App() {
  const [players, setPlayers] = useState(initialPlayers)
  return (
    <div className="gamearea">
      <Routes>
        <Route
          path="/"
          element={<Gamearea players={players} setPlayers={setPlayers} />}
        />
        <Route
          path="/config"
          element={<Gameconfig players={players} setPlayers={setPlayers} />}
        />
      </Routes>
    </div>
  )
}

export default App
