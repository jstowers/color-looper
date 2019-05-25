import React, { useState, useEffect } from 'react';

import Grid from './Grid';
import Timer from './Timer';

import { withStyles } from '@material-ui/core/styles';
import '../style/App.css';
import Button from '@material-ui/core/Button';

const styles = {
  button: {
    margin: 15,
  }
};

const App = (props) => {
    const { classes } = props;
    const [isOn, startTimer] = useState(false);
    const [isReset, resetTimer] = useState(false);
    const [isResetGrid, resetGrid] = useState(false);

    return (
        <div className="App">
            <Timer isOn={isOn} isReset={isReset} />
            <Button 
                className={classes.button}
                variant="outlined" 
                onClick={() => {
                    startTimer(true);
                    resetTimer(false);
                }}
                color="primary">
                <svg fill= "#3f51b5" width="24" height="24" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                Start
            </Button>
            <Button 
                className={classes.button}
                variant="outlined"
                onClick={() => {
                    startTimer(false);
                }}
                color="secondary">
                <svg fill= "#f50056" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 6h12v12H6z"/></svg>
                Stop
            </Button>
            <Button 
                className={classes.button}
                variant="outlined"
                onClick={() => {
                    startTimer(false);
                    resetTimer(true);
                    resetGrid(!isResetGrid);
                }}
                color="secondary">
                <svg fill= "black" width="24" height="24" viewBox="0 0 24 24"><path fill="#000000" d="M12,3A9,9 0 0,0 3,12H0L4,16L8,12H5A7,7 0 0,1 12,5A7,7 0 0,1 19,12A7,7 0 0,1 12,19C10.5,19 9.09,18.5 7.94,17.7L6.5,19.14C8.04,20.3 9.94,21 12,21A9,9 0 0,0 21,12A9,9 0 0,0 12,3M14,12A2,2 0 0,0 12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12Z" /></svg>                
                Reset
            </Button>
            <Grid isResetGrid={isResetGrid}/>
        </div>
    );
}

export default withStyles(styles)(App);