import React, { Component, createContext } from 'react'
import shuffle from 'shuffle-array'

const { Provider, Consumer } = createContext('deck')

const TILES = [
    {id: '_1', score: 0, count: 1 },
    {id: '_2', score: 0, count: 1 },

    {id: 'E1', letter: "E", score: 1, count: 1 },
    {id: 'E2', letter: "E", score: 1, count: 1 },
    {id: 'E3', letter: "E", score: 1, count: 1 },
    {id: 'E4', letter: "E", score: 1, count: 1 },
    {id: 'E5', letter: "E", score: 1, count: 1 },
    {id: 'E6', letter: "E", score: 1, count: 1 },
    {id: 'E7', letter: "E", score: 1, count: 1 },
    {id: 'E8', letter: "E", score: 1, count: 1 },
    {id: 'E9', letter: "E", score: 1, count: 1 },
    {id: 'E10', letter: "E", score: 1, count: 1 },
    {id: 'E11', letter: "E", score: 1, count: 1 },
    {id: 'E12', letter: "E", score: 1, count: 1 },

    {id: 'A1', letter: "A", score: 1, count: 1 },
    {id: 'A2', letter: "A", score: 1, count: 1 },
    {id: 'A3', letter: "A", score: 1, count: 1 },
    {id: 'A4', letter: "A", score: 1, count: 1 },
    {id: 'A5', letter: "A", score: 1, count: 1 },
    {id: 'A6', letter: "A", score: 1, count: 1 },
    {id: 'A7', letter: "A", score: 1, count: 1 },
    {id: 'A8', letter: "A", score: 1, count: 1 },
    {id: 'A9', letter: "A", score: 1, count: 1 },

    {id: 'I1', letter: "I", score: 1, count: 1 },
    {id: 'I2', letter: "I", score: 1, count: 1 },
    {id: 'I3', letter: "I", score: 1, count: 1 },
    {id: 'I4', letter: "I", score: 1, count: 1 },
    {id: 'I5', letter: "I", score: 1, count: 1 },
    {id: 'I6', letter: "I", score: 1, count: 1 },
    {id: 'I7', letter: "I", score: 1, count: 1 },
    {id: 'I8', letter: "I", score: 1, count: 1 },
    {id: 'I9', letter: "I", score: 1, count: 1 },

    {id: 'O1', letter: "O", score: 1, count: 1 },
    {id: 'O2', letter: "O", score: 1, count: 1 },
    {id: 'O3', letter: "O", score: 1, count: 1 },
    {id: 'O4', letter: "O", score: 1, count: 1 },
    {id: 'O5', letter: "O", score: 1, count: 1 },
    {id: 'O6', letter: "O", score: 1, count: 1 },
    {id: 'O7', letter: "O", score: 1, count: 1 },
    {id: 'O8', letter: "O", score: 1, count: 1 },

    {id: 'N1', letter: "N", score: 1, count: 1 },
    {id: 'N2', letter: "N", score: 1, count: 1 },
    {id: 'N3', letter: "N", score: 1, count: 1 },
    {id: 'N4', letter: "N", score: 1, count: 1 },
    {id: 'N5', letter: "N", score: 1, count: 1 },
    {id: 'N6', letter: "N", score: 1, count: 1 },

    {id: 'R1', letter: "R", score: 1, count: 1 },
    {id: 'R2', letter: "R", score: 1, count: 1 },
    {id: 'R3', letter: "R", score: 1, count: 1 },
    {id: 'R4', letter: "R", score: 1, count: 1 },
    {id: 'R5', letter: "R", score: 1, count: 1 },
    {id: 'R6', letter: "R", score: 1, count: 1 },

    {id: 'T1', letter: "T", score: 1, count: 1 },
    {id: 'T2', letter: "T", score: 1, count: 1 },
    {id: 'T3', letter: "T", score: 1, count: 1 },
    {id: 'T4', letter: "T", score: 1, count: 1 },
    {id: 'T5', letter: "T", score: 1, count: 1 },
    {id: 'T6', letter: "T", score: 1, count: 1 },

    {id: 'L1', letter: "L", score: 1, count: 1 },
    {id: 'L2', letter: "L", score: 1, count: 1 },
    {id: 'L3', letter: "L", score: 1, count: 1 },
    {id: 'L4', letter: "L", score: 1, count: 1 },

    {id: 'S1', letter: "S", score: 1, count: 1 },
    {id: 'S2', letter: "S", score: 1, count: 1 },
    {id: 'S3', letter: "S", score: 1, count: 1 },
    {id: 'S4', letter: "S", score: 1, count: 1 },

    {id: 'U1', letter: "U", score: 1, count: 1 },
    {id: 'U2', letter: "U", score: 1, count: 1 },
    {id: 'U3', letter: "U", score: 1, count: 1 },
    {id: 'U4', letter: "U", score: 1, count: 1 },

    {id: 'D1', letter: "D", score: 2, count: 1 },
    {id: 'D2', letter: "D", score: 2, count: 1 },
    {id: 'D3', letter: "D", score: 2, count: 1 },
    {id: 'D4', letter: "D", score: 2, count: 1 },

    {id: 'G1', letter: "G", score: 2, count: 1 },
    {id: 'G2', letter: "G", score: 2, count: 1 },
    {id: 'G3', letter: "G", score: 2, count: 1 },

    {id: 'B1', letter: "B", score: 3, count: 1 },
    {id: 'B2', letter: "B", score: 3, count: 1 },

    {id: 'C1', letter: "C", score: 3, count: 1 },
    {id: 'C2', letter: "C", score: 3, count: 1 },

    {id: 'M1', letter: "M", score: 3, count: 1 },
    {id: 'M2', letter: "M", score: 3, count: 1 },

    {id: 'P1', letter: "P", score: 3, count: 1 },
    {id: 'P2', letter: "P", score: 3, count: 1 },

    {id: 'F1', letter: "F", score: 4, count: 1 },
    {id: 'F2', letter: "F", score: 4, count: 1 },

    {id: 'H1', letter: "H", score: 4, count: 1 },
    {id: 'H2', letter: "H", score: 4, count: 1 },

    {id: 'V1', letter: "V", score: 4, count: 1 },
    {id: 'V2', letter: "V", score: 4, count: 1 },

    {id: 'W1', letter: "W", score: 4, count: 1 },
    {id: 'W2', letter: "W", score: 4, count: 1 },

    {id: 'Y1', letter: "Y", score: 4, count: 1 },
    {id: 'Y2', letter: "Y", score: 4, count: 1 },

    {id: 'K1', letter: "K", score: 5, count: 1 },

    {id: 'J1', letter: "J", score: 8, count: 1 },

    {id: 'X1', letter: "X", score: 8, count: 1 },

    {id: 'Q1', letter: "Q", score: 10, count: 1 },

    {id: 'Z1', letter: "Z", score: 10, count: 1 }
];
let _deck = [...shuffle([].concat(...TILES.map(({ count, letter, score, id }) => Array(count).fill({ letter, score, id }))))]
const draw = count => {
  const tiles = _deck.filter((tile, index) => (index + 1) <= count)
  _deck = [..._deck.filter((tile, index) => (index + 1) > count)]
  return tiles
}

let _tray = draw(7)

export default class extends Component {

  state = {
    deck: [..._deck],
    tray: _tray
  }

  render() {
    return (
      <Provider
        value={ {
          get deck() {
            return this.state.deck
          },
          draw,
          get tray() {
            return _tray
          },

          getTileByIndex(index) {
            return this.state.tray[index]
          },

          removeByIndex(index) {
            this.setState({ tray: this.state.tray.filter((_, i) => i !== index) })
          }
        } }
      >
        { this.props.children }
      </Provider>
    )
  }
}

export {
  Consumer
}
