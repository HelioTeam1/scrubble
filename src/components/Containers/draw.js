//creates a new array
//draws items from the deck and puts them into the tray
const draw = (deck) => {
    const tray = [];
    while(tray.length < 7){
        tray.push(deck.pop())
    }
    return tray;
};

export default draw;