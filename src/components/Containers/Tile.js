import React, {Component, Fragment} from 'react';

class Tile extends Component {
    render() {
        // const tilePiece = Tiles.map(tile => ({
        //     letter: tile.letter,
        //     score: tile.score
        // }))

        const tilePiece = {
            letter: 'A',
            score: '2',
            count: ''
        };

        return(
            <div className="tile-piece">
                <h1>{tilePiece.letter}</h1>
                <h6>{tilePiece.score}</h6>
            </div>
        )
    }
}

export default Tile;