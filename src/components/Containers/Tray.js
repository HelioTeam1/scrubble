import React, { Fragment, Component } from 'react'
import Square from './Square'
import '../Modals/ScrubbleStyle.css'
import draw from './draw'
import Tiles from './TileList'
import shuffle from 'shuffle-array'
import Tile from './Tile'
import { Consumer } from './Providers/DeckProvider'

export default class Tray extends Component {
  renderSquare(i) {
    return (
      <Square value={ this.state.tray[i] } />
    )
  }

  state = {
    // tray: Array(7).fill('+'),
    // deck: []

  }
  // constructor() {
  //     super()
  //     this.state = {
  //     }
  // }

  render() {
    //put the 100 tiles into an array
    // const tiles = Tiles
    // //create the empty deck
    // const deck = []
    // //pushing each letter tile x amount of times into a deck
    // tiles.forEach((tile) => {
    //   for (let i = 0; i < tile.count; i++) {
    //     deck.push(tile)
    //   }
    // })
    // //shuffling the deck
    // shuffle(deck)
    // //creating a tray and drawing tiles from the deck
    //
    // this.state.tray = draw(deck)

    // const tileTray = this.state.tray.map((t, i) => {
    //   return (
    //     // The /key={'row_' + i}>/ appears to be unnecessary
    //     <td>
    //       <Tile
    //         value={ t.letter }
    //         score={ t.score }
    //       />
    //     </td>
    //   )
    // })
    return (
      <Fragment>
        <Consumer>
          { deck => (
            <table cellSpacing="0" id="gird" className="table">
              <tbody>{ deck.tray.map((t, i) => (
                <td>
                  <Tile
                    key={ i }
                    value={ t.letter }
                    score={ t.score }
                  />
                </td>
              )) }</tbody>
            </table>
          ) }
        </Consumer>
      </Fragment>
    )
  }
}
