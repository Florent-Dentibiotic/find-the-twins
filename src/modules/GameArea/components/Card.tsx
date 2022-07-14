import { useState } from 'react'

interface CardProps {
  image: string
  alt: string
  handleSaveTest: (e: string, id: number) => void
  visible: boolean
  id: number
}

export default function Card({ image, alt, handleSaveTest, visible, id }: CardProps) {
  return (
    <>
      <article
        className="board-case"
        onClick={() => {
          handleSaveTest(image, id)
        }}
      >
        <div className="board-case-content">
          {visible ? (
            <img
              src={`./images/animals/${image}`}
              alt={alt}
              className="board-case-image"
            />
          ) : (
            <div className="board-case-image"></div>
          )}
        </div>
      </article>
    </>
  )
}
