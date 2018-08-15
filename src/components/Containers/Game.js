import React, { Component, Fragment } from 'react';
import Tiles from './Tile';
import extractSeven from './ShuffleFunction'
import draw from './draw'
import shuffle from 'shuffle-array'

export default class Game extends Component {


    render() {
        //put the 100 tiles into an array
        const tiles = Tiles;
        //create the empty deck
        const deck = [];
        //pushing each letter tile x amount of times into a deck
        tiles.forEach( (tile) => {
            for (let i = 0; i < tile.count; i++) {
                deck.push(tile)
            }
        });
        //shuffling the deck
        shuffle(deck)
        //creating a tray and drawing tiles from the deck
        let tray = draw(deck)


        return (

            <div>
                <h2>{JSON.stringify(tray)}</h2>
                <h2>{JSON.stringify(tray.length)}</h2>
                <h2>{JSON.stringify(deck.length)}</h2>
            </div>

        )
    }
}