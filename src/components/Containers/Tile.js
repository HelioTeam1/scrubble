import React, {Component, Fragment} from 'react';
import {DragSource} from 'react-dnd';
import Tiles from './TileList';


const tileSource = {
    beginDrag(props) {
        // const { tile } = props;
        return props;
    },

    endDrag(props, monitor) {
        const item = monitor.getItem();
        const dropResult = monitor.getDropResult();

        if (dropResult) {
            alert(`You dropped ${item.tile} into ${dropResult.tile}!`);
        }
    }
};

class Tile extends Component {
    // constructor(tile) {
    //     super(tile);
    //     }

    render() {
        const { isDragging, connectDragSource } = this.props;
        const opacity = isDragging ? 0 : 1;

        return connectDragSource(
            <td className="tile-piece" style={{opacity}}>
                {/*<span>{tile.value}</span>*/}
                <div className="tile-score">
                    {/*<span>{tile.score}</span>*/}
                        </div>
            </td>
        )
    }
}

// const Tile = (tile) => {
//     return (
//         <td className="tile-piece" style={{}}>
//             <span>{tile.value}</span>
//             <div className="tile-score">
//                 <span>{tile.score}</span>
//             </div>
//         </td>
//     )
// }

export default DragSource('TILE', tileSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
}))(Tile);