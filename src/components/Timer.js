import React, { useState, useRef, useEffect } from 'react';

export default function Timer(props) {
    console.log('Timer props =', props);
    const [delay] = useState(1000);
    const [time, setTime] = useState(0);
    const [isRunning] = useState(props.isOn);

    useInterval(() => {
        setTime(time + 1);
    }, isRunning ? delay : null);

    return (
        <div>
            <h3>current: {time}</h3>
        </div>
    );
}

function useInterval(callback, delay) {
    const savedCallback = useRef();
    console.log('savedCallback =', savedCallback);

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);
    
    // Set up the interval.
    useEffect(() => {
        console.log('INSIDE useEffect');
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            console.log('INSIDE IF !== null');
            let id = setInterval(tick, delay);
            console.log('id =', id);
            return () => clearInterval(id);
        }
    }, [delay]);
}

// function usePrevious(value) {
//     const ref = useRef();
//     useEffect(() => {
//         ref.current = value;
//     });
//     return ref.current;
// }

