import { useEffect, useState } from 'react'
import Card from './components/Card'
import './GameArea.css'

interface initialVisibilityProps {
  [key: string]: boolean
}

interface initialPlayersProps {
  [key: string]: { name: string; score: number; set: number; actif: boolean }
}

const animals = [
  'animals-1.jpeg',
  'animals-2.jpeg',
  'animals-4.jpeg',
  'animals-5.jpeg',
  'animals-6.jpeg',
  'animals-7.jpeg',
  'animals-8.jpeg',
  'animals-9.jpeg',
  'animals-10.jpeg',
  'animals-11.jpeg',
]

let initialVisibility: initialVisibilityProps = {}
const allAnimals = [...animals, ...animals].sort((a, b) => 0.5 - Math.random())
allAnimals.forEach((animal, id) => (initialVisibility[animal + id] = false))

const initialPlayers: initialPlayersProps = {
  player1: {
    name: 'Joueur 1',
    score: 0,
    set: 0,
    actif: false,
  },
  player2: {
    name: 'Joueur 2',
    score: 0,
    set: 0,
    actif: false,
  },
  player3: {
    name: 'Joueur 3',
    score: 0,
    set: 0,
    actif: false,
  },
  player4: {
    name: 'Joueur 4',
    score: 0,
    set: 0,
    actif: false,
  },
}

export default function Gamearea() {
  const [players, setPlayers] = useState(initialPlayers)
  const [activePlayer, setActivePlayer] = useState(Object.keys(initialPlayers)[0])
  const [cards, setCards] = useState(allAnimals)
  const [counter, setCounter] = useState(0)
  const [twins, setTwins] = useState<Array<string>>([])
  const [visible, setVisible] = useState(initialVisibility)

  const handleSaveTest = (e: string, id: number) => {
    if (
      twins.length &&
      twins.length === 2 &&
      twins[0].slice(0, 12) !== twins[1].slice(0, 12)
    ) {
      setVisible((previousState) => ({
        ...previousState,
        [twins[twins.length - 1]]: false,
        [twins[twins.length - 2]]: false,
      }))
    }
    setVisible((previousState) => ({ ...previousState, [e + id.toString()]: true }))

    if (twins.length === 1 && twins[0].slice(0, 12) === e.slice(0, 12)) {
      setCounter(1)
      setPlayers((state) => ({
        ...state,
        [activePlayer]: {
          ...players[activePlayer],
          score: players[activePlayer].score + 1,
        },
      }))
    } else {
      setCounter(0)
    }

    if (twins.length === 2 || twins.length === 0) setTwins([e + id])
    if (twins.length === 1) setTwins([...twins, e + id])
  }

  useEffect(() => {
    if (counter !== 1 && twins.length && twins.length === 2) {
      const activePlayerIndex = Object.keys(initialPlayers).indexOf(activePlayer)
      setActivePlayer(
        activePlayerIndex === 3
          ? Object.keys(initialPlayers)[0]
          : Object.keys(initialPlayers)[activePlayerIndex + 1]
      )
    }
  }, [twins])

  const handleRestart = () => {
    let newVisibility: initialVisibilityProps = {}
    const newAllAnimals = [...animals, ...animals].sort((a, b) => 0.5 - Math.random())
    newAllAnimals.forEach((animal, id) => (initialVisibility[animal + id] = false))
    setPlayers(initialPlayers)
    setActivePlayer(Object.keys(initialPlayers)[0])
    setTwins([])
    setVisible(newVisibility)
    setCards(newAllAnimals)
    setCounter(0)
  }

  return (
    <main>
      <h1>Memory</h1>
      <section>
        {Object.values(players).map((player, id) => (
          <div key={'test-' + id}>
            {player.name} : {player.score}
          </div>
        ))}
      </section>
      <section>
        <h2>C'est le tour de {players[activePlayer].name}</h2>
      </section>
      <section className="board">
        {cards.map((animal, key) => (
          <Card
            image={animal}
            alt=""
            key={key}
            handleSaveTest={visible[animal + key] ? () => {} : handleSaveTest}
            visible={visible[animal + key]}
            id={key}
          />
        ))}
      </section>
      <section>
        <button onClick={handleRestart}>Recommencer</button>
      </section>
    </main>
  )
}
