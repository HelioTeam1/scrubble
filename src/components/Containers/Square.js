import React from 'react';
import '../Modals/ScrubbleStyle.css'
import Tile from './Tile'


const Square = (Tile) => {
    return (
        <td className="square">
            {Tile.value}
            <div className='tile-score'>
                {Tile.score}</div>
        </td>
    )
};

export default Square;