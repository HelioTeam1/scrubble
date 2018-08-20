import React, {Fragment, Component} from 'react'
import Square from './Square'
import '../Modals/ScrubbleStyle.css'
import draw from './draw'
import Tiles from './Tiles'
import shuffle from 'shuffle-array'


export default class Tray extends Component {
    renderSquare(i) {
        return (
            <Square value={this.state.tray[i]}/>
        );
    }
    state = {
        tray: Array(7).fill('+')

    };
    // constructor() {
    //     super()
    //     this.state = {
    //     }
    // }

    render() {
        //put the 100 tiles into an array
        const tiles = Tiles;
        //create the empty deck
        const deck = [];
        //pushing each letter tile x amount of times into a deck
        tiles.forEach((tile) => {
            for (let i = 0; i < tile.count; i++) {
                deck.push(tile)
            }
        });
        //shuffling the deck
        shuffle(deck);
        //creating a tray and drawing tiles from the deck

        this.state.tray = draw(deck);


        const tileTray = this.state.tray.map((t, i) => {
            return (

                <td key={'row_' + i}>
                    <Square value={t.letter}/>
                </td>
            )
        });
        return (
            <table cellSpacing="0" id="gird" className="table">
                <tbody>{tileTray}</tbody>
            </table>
        )
    }


}