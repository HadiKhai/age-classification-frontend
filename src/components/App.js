import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from "@material-ui/core/Container";
const useStyles = makeStyles((theme) => ({
  main: {
    height: '100%',
    width: '100%',
    fontFamily: 'Fira Code',
    marginTop: '5vh',
    color: "#fffae2"
  }
}))

const App = () => {

  const classes = useStyles();

  return (
      <Box container='true' display="flex" align="center" flexdirection="column" className={classes.main}>
        Age Predictor
      </Box>
  )
}

export default App;
