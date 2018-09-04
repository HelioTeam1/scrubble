import React, { Component, Fragment } from 'react'
// import Tiles from './TileList'
// import extractSeven from './ShuffleFunction'
// import draw from './draw'
// import shuffle from 'shuffle-array'
import GameBoard from './Board'
import Tray from './Tray'
// import Tile from './Tile'
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
import DeckProvider from './Providers/DeckProvider'

class Game extends Component {

  render() {

    return (
      <Fragment>
        <DeckProvider>
            <div>
              <GameBoard />
              <br />
              <Tray />
            </div>
        </DeckProvider>
      </Fragment>

    )
  }
}

export default DragDropContext(HTML5Backend)(Game)
