import React, {Component, Fragment} from 'react';
import Tiles from './Tiles';

class Tile extends Component {
    render() {
        // const tilePiece = Tiles.map(tile => ({
        //     letter: tile.letter,
        //     score: tile.score
        // }))

        const tilePiece = {
            letter: 'A',
            score: '',
            count: ''
        }

        return(
            <div className="tile-piece">
                <h1>{tilePiece.letter}</h1>
                <h4>{tilePiece.score}</h4>
            </div>
        )
    }
}

export default Tile;