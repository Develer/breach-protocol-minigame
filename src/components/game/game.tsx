import type { FC } from "react"

export const Game: FC<{}> = () => {
  return (
    <div className="game">
        <div className="game__countdown">Отута каунтер</div>
        <div className="game__matrix">Отута Матриця</div>
        <div className="game__buffer">Отута буфер</div>
        <div className="game__sequences">Отута секвенци</div>
    </div>
  )
}