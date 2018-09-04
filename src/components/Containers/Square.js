import React, {Component} from 'react';
import '../Modals/ScrubbleStyle.css'
import {DropTarget} from 'react-dnd';
import update from 'immutability-helper';
import Tile from './Tile';


const squareTarget = {
    drop(props, monitor, component) {
        // const {id} = props;
        // const sourceObj = monitor.getItem();
        // if (id !== sourceObj.id) component.pushTile(sourceObj.tile);
        return {
            id: props.id
        }
    }
};

class Square extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         tiles: []
    //     }
    // }
    //
    // pushTile(tile) {
    //     this.setState(update(this.state, {
    //         tiles: {
    //             $push: [tile]
    //         }
    //     }))
    // }
    //
    // removeTile(index) {
    //     this.setState(update(this.state, {
    //         tiles: {
    //             $splice: [
    //                 [index, 1]
    //             ]
    //         }
    //     }))
    // }

    render() {
        const {canDrop, isOver, connectDropTarget} = this.props;
        const isActive = canDrop && isOver;
        const backgroundColor = isActive ? "lightgreen" : "white";

        return connectDropTarget(
            <td className="square" style={{backgroundColor}}>
                {}
            </td>
        );
    }
}

export default DropTarget('TILE', squareTarget, (connect, monitor) => ({
   connectDropTarget: connect.dropTarget(),
   isOver: monitor.isOver(),
   canDrop: monitor.canDrop()
}))(Square);