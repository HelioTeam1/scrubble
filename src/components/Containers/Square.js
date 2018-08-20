import React from 'react';
import '../Modals/ScrubbleStyle.css'
import Tile from './Tile'


const Square = (Tile) => {
        return(
            <td className="square">
                {Tile.value}
            </td>
        )
};

export default Square;