import React, {Component, Fragment} from 'react';
import Tiles from './Tiles';
import extractSeven from './ShuffleFunction'
import draw from './draw'
import shuffle from 'shuffle-array'
import GameBoard from "./Board";
import Tray from "./Tray";
import Tile from './Tile';

export default class Game extends Component {


    render() {


        return (
            <Fragment>
                <div>
                    <GameBoard/>
                    <br/>
                    <Tray />
                </div>
            </Fragment>


        )
    }
}