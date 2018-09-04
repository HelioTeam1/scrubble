import React, {Component} from 'react';
import {DragSource} from 'react-dnd';
// import Tiles from './TileList';


const tileSource = {
    beginDrag(props) {
        return {
            id: props.id,
        };
    },

    endDrag(props, monitor) {
        const item = monitor.getItem();
        const dropResult = monitor.getDropResult();

        if (dropResult) {
            alert(`You dropped '${item.id}' into '${dropResult.id}'!`);
        }
    }
};

class Tile extends Component {
    render() {
        const {isDragging, connectDragSource} = this.props;
        const opacity = isDragging ? 0 : 1;

        return connectDragSource(
            <div className="tile-piece" style={{opacity}}>
                {this.props.value}
                <div className="tile-score">
                        {this.props.score}
                    </div>
            </div>
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