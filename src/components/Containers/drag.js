import React from 'react'

const drag = (tile,tray,grid) => {
    grid.push(tray.pop());
    return grid;
};
export default drag