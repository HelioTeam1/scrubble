import React, {Component} from 'react';
import '../Modals/ScrubbleStyle.css'
import {DropTarget} from 'react-dnd';


const squareTarget = {
    drop() {
        return {}
    }
};

class Square extends Component {
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