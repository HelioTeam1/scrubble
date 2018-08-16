import React, {Fragment, Component} from 'react'
import Square from './Square'
import '../Modals/ScrubbleStyle.css'
import draw from './draw'
import Tiles from './Tiles'
import shuffle from 'shuffle-array'


export default class Tray extends Component {
    constructor() {
        super()
        this.state = {
            tray: Array(7).fill('+')
        }
    }

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
        shuffle(deck)
        //creating a tray and drawing tiles from the deck

        this.state.tray = draw(deck)

        const row = this.state.tray.map((r, i) => {
            return (

                <td key={'row_' + i}>
                            <Square />
                </td>
            )
        });
        return (
            <table cellSpacing="0" id="gird" className="table">
                <tbody>{row}</tbody>
            </table>
        )
    }


}