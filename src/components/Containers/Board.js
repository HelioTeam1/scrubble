import React, {Fragment, Component} from 'react';
import Square from './Square'
import '../Modals/ScrubbleStyle.css'


class GameBoard extends Component {

    constructor() {
        super();
        this.state = {
            grid: Array(15).fill(0).map(x => Array(15).fill("+"))
        }
    }

    render() {

        const rows = this.state.grid.map((r, i) => {
            return (
                <tr key={'row_' + i}>
                    {r.map((d, j) => {
                        return (
                            <Square/>
                        )
                    })}
                </tr>
            )
        });
        return (
            <table cellSpacing="0" id="grid" className="table">
                <tbody>{rows}</tbody>
            </table>
        )
    }
}


export default GameBoard;