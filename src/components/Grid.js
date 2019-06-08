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
    console.log('=> INSIDE generateGridBoxes');
    let items = [];
    let colorArray = generateRandomColorArray(colorList, 10);
    for (let i = 0; i < colorArray.length; i++) {
        let backgroundColor = crayolaCrayons[colorArray[i]].hexCode;
        let colorHex = {backgroundColor: backgroundColor};
        items.push(
            <div className='flex-item' 
                key={i}
                name={colorArray[i]} 
                style={colorHex}>
            </div>
        );
    };
    return items;
}

const generateRandomColorArray = (colorList, numberCells) => {
    console.log('=> INSIDE generateRandomColorArray');
    let colorArray = [];
    for (let i = 0; i < numberCells; i++) {
        let randomColor = colorList[Math.floor(Math.random()*colorList.length)];
        colorArray.push(randomColor);
    }
    return colorArray;
}


const Grid = (props) => {
    const { isOn, isResetGrid } = props;
    console.log('props =', props);
    let [gridBoxes, setGridBoxes] = useState(generateGridBoxes());

    useEffect(() => {
        console.log('INSIDE useEffect [isOn]')
        console.log('gridBoxes =', gridBoxes);
    }, [isOn]);

    useEffect(() => {
        if(isResetGrid) {
            setGridBoxes(generateGridBoxes());
        }
    }, [isResetGrid])

    return (
        <div className="flex-container">{gridBoxes}</div>
    );
}

export default Grid;

