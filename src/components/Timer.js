import React, { useEffect, useReducer } from 'react';
import { withStyles } from '@material-ui/core';

const styles = {
    label: {
        padding: 10,
        display: "inline",
        align: "center"
    }
}

function Timer(props) {
    const { classes, isReset } = props;

    const [time, dispatch] = useReducer((state, action) => {
        if (action === 'inc') {
            return state + 1;
        }
        else if (action === 'reset') {
            return 0;
        }
    }, 0);
      
    useEffect(() => {
        let timerId;
        if(props.isOn) {
            timerId = setInterval(() => {dispatch('inc')}, 1000);
        }
        return () => clearInterval(timerId);
    }, [props.isOn]);

    useEffect(() => {
        dispatch('reset');
    }, [isReset]);
    
    return (
        <div className={classes.label}>
            <h3>time:{time}</h3>
        </div>
    );
}

export default withStyles(styles)(Timer);

//     useEffect(() => {
//         let timerId;

//         if(props.isOn) {
//             timerId = setInterval(() => setSeconds(seconds + 1), 1000);
//         }
//         return () => {
//             clearInterval(timerId);	
//         }
//     }, [props.isOn]);

//     return (
//         <div>
//             <h3>time:{seconds}</h3>
//         </div>
//     );
// }


// This code kinds works okay.  
// export default function Timer(props) {
//     const [time, setTime] = useState(0);
//     //const [start] = useState(Date.now()-time);

//     useEffect(() => {
//         let timerId;

//       	if(props.isOn) {
//             let start = Date.now() - time;
// 			timerId = setInterval(() => setTime(Math.floor(Date.now() - start)), 100);
// 		}
// 		return () => {
// 			clearInterval(timerId);	
// 		}
//     });

//     return (
//         <div>
//             <h3>time:{time}</h3>
//         </div>
//     );
// }

// function usePrevious(value) {
//     const ref = useRef();
//     useEffect(() => {
//         ref.current = value;
//     });
//     return ref.current;
// }

/*

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

*/