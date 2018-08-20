import React, {Fragment, Component} from 'react';
import Square from './Square'
import '../Modals/ScrubbleStyle.css'
import drag from "./drag";
import Tray from "./Tray";
import Tiles from "./Tiles";
import shuffle from "shuffle-array";
import draw from "./ShuffleFunction";


class GameBoard extends Component {
    state = {
        grid: Array(15).fill(0).map(x => Array(15).fill("+"))
    };

    render() {

        const rows = this.state.grid.map((r, i) => {
            return (
                <tr key={'row_' + i}>
                    {r.map((d, j) => {
                        return (
                            <Square value={r.letter}
                                    score={r.score}/>
                        )
                    })}
                </tr>
            )
        });
        // const tiles = Tiles;
        // //create the empty deck
        // const deck = [];
        // //pushing each letter tile x amount of times into a deck
        // tiles.forEach((tile) => {
        //     for (let i = 0; i < tile.count; i++) {
        //         deck.push(tile)
        //     }
        // });
        // //shuffling the deck
        // shuffle(deck);
        // const tray = draw(deck);
        // const i = 0;
        // const tile = tray[i];
        // // const dragTile = drag(tile, tray, this.state.grid[0][0]);
        // const dragTile = this.state.grid[0][0].push(tile.pop());
        return (
            <table cellSpacing="0" id="grid" className="table">
                <tbody>{rows}</tbody>
            </table>
        )
    }
}


export default GameBoard;