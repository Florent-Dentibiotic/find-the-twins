import './GameArea.css'

export default function Gamearea() {
  return (
    <main>
      <h1>Memory</h1>
      <section className="board">
        <article className="board-case">
          <div className="board-case-content">
            <img
              src="./images/animals/a-kangaroo-looks-straight-at-the-camera.jpg"
              alt=""
              className="board-case-image"
            />
          </div>
        </article>
        <article className="board-case">
          <div className="board-case-content">2</div>
        </article>
        <article className="board-case">
          <div className="board-case-content">3</div>
        </article>
        <article className="board-case">
          <div className="board-case-content">4</div>
        </article>
        <article className="board-case">
          <div className="board-case-content">5</div>
        </article>
      </section>
    </main>
  )
}
