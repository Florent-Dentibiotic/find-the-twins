import { Dispatch, SetStateAction } from 'react'
import { Link } from 'react-router-dom'
import { initialPlayersProps } from '../../App'

interface GameconfigProps {
  players: initialPlayersProps
  setPlayers: Dispatch<SetStateAction<initialPlayersProps>>
}

export default function Gameconfig({ players, setPlayers }: GameconfigProps) {
  const handleChangeName: (e: any, key: string) => void = (e, key) => {
    setPlayers((state) => ({
      ...state,
      [key]: {
        ...players[key],
        name: e.target.value,
      },
    }))
  }

  return (
    <main>
      <h1>Configuration</h1>
      <section>
        <Link to="/">Game</Link>
      </section>
      <section className="players">
        {Object.entries(players).map(([key, player], id) => (
          <div key={'test-' + id}>
            <div>
              <input
                type="text"
                value={player.name}
                onChange={(e) => handleChangeName(e, key)}
              />
            </div>
            <p>{player.actif ? 'actif' : 'inactif'}</p>
          </div>
        ))}
      </section>
    </main>
  )
}
