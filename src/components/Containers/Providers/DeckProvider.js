import React, { Component, createContext } from 'react'
import shuffle from 'shuffle-array'

const { Provider, Consumer } = createContext('deck')

const TILES = [
  { score: 0, count: 2 },

  { letter: 'E', score: 1, count: 12 },
  { letter: 'A', score: 1, count: 9 },
  { letter: 'I', score: 1, count: 9 },
  { letter: 'O', score: 1, count: 8 },
  { letter: 'N', score: 1, count: 6 },
  { letter: 'R', score: 1, count: 6 },
  { letter: 'T', score: 1, count: 6 },
  { letter: 'L', score: 1, count: 4 },
  { letter: 'S', score: 1, count: 4 },
  { letter: 'U', score: 1, count: 4 },

  { letter: 'D', score: 2, count: 4 },
  { letter: 'G', score: 2, count: 3 },

  { letter: 'B', score: 3, count: 2 },
  { letter: 'C', score: 3, count: 2 },
  { letter: 'M', score: 3, count: 2 },
  { letter: 'P', score: 3, count: 2 },

  { letter: 'F', score: 4, count: 2 },
  { letter: 'H', score: 4, count: 2 },
  { letter: 'V', score: 4, count: 2 },
  { letter: 'W', score: 4, count: 2 },
  { letter: 'Y', score: 4, count: 2 },

  { letter: 'K', score: 5, count: 1 },

  { letter: 'J', score: 8, count: 1 },
  { letter: 'X', score: 8, count: 1 },

  { letter: 'Q', score: 10, count: 1 },
  { letter: 'Z', score: 10, count: 1 }]

let _deck = [...shuffle([].concat(...TILES.map(({ count, letter, score }) => Array(count).fill({ letter, score }))))]
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
