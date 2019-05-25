import React, { useState, useEffect } from 'react';

const colorList = [
    'robinsEggBlue', 
    'purpleMountainsMajesty',
    'salmon', 
    'violetRed', 
    'forestGreen', 
    'apricot', 
    'indigo'
];

const crayolaCrayons = {
    robinsEggBlue: {
        hexCode: '#00CCCC'
    },
    purpleMountainsMajesty: {
        hexCode: '#D6AEDD'
    },
    salmon: {
        hexCode: '#FF91A4'
    },
    violetRed: {
        hexCode: '#F7468A'
    },
    forestGreen: {
        hexCode: '#5FA777'
    },
    apricot: {
        hexCode: '#FDD5B1'
    },
    indigo: {
        hexCode: '#4F69C6'
    }
}

const generateGridBoxes = () => {
    let items = [];
    let colorArray = generateRandomColorArray(colorList, 100);
    for (let i = 0; i < colorArray.length; i++) {
        let backgroundColor = crayolaCrayons[colorArray[i]].hexCode;
        let colorHex = {backgroundColor: backgroundColor};
        items.push(
            <div className='flex-item' 
                key={i} 
                style={colorHex}>
            </div>
        );
    };
    return items;
}

const generateRandomColorArray = (colorList, numberCells) => {
    let colorArray = [];
    for (let i = 0; i < numberCells; i++) {
        let randomColor = colorList[Math.floor(Math.random()*colorList.length)];
        colorArray.push(randomColor);
    }
    return colorArray;
}


const Grid = (props) => {
    const { isResetGrid } = props;
    const [gridBoxes, setGridBoxes] = useState(generateGridBoxes());

    const resetGridBoxes = () => {
        setGridBoxes(generateGridBoxes());
    }

    useEffect(() => {
        resetGridBoxes();
    }, [isResetGrid]);

    return (
        <div className="flex-container">{gridBoxes}</div>
    );
}

export default Grid;

