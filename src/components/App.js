import React, { useState } from 'react';

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

    return (
        <div className="App">
            <Timer isOn={isOn} />
            <Button 
                className={classes.button}
                variant="outlined" 
                onClick={() => startTimer(true)}
                color="primary">
                <svg fill= "#3f51b5" width="24" height="24" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                Start
            </Button>
            <Button 
                className={classes.button}
                variant="outlined"
                onClick={() => startTimer(false)}
                color="secondary">
                <svg fill= "#f50056" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 6h12v12H6z"/></svg>
                Stop
            </Button>
            <Grid/>
        </div>
    );
}

export default withStyles(styles)(App);