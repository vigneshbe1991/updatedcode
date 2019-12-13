import React, { Component } from 'react';
import {MuiThemeProvider, createMuiTheme, Button} from '@material-ui/core';
import { AppBar } from '@material-ui/core';


let theme = createMuiTheme({
    palette: {
        primary:{
            main:'#98303b'
          },
    secondary: {
      main: '#827717'},
      },});
export class Success extends Component {

     backToHome = () => {
        window.location.href = '/home';
    }
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <React.Fragment>
                    <AppBar className="details" position="static"> <h2>Success !!!</h2> </AppBar>
                    <h1> Thank you for the submission </h1>
                    <p> you will get an email with the tracking details </p> <br/> <br/>
                    <Button variant="outlined" onClick={this.backToHome} color	="secondary"> Home </Button>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
    
}
export default Success;
