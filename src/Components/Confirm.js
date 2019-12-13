import React, { Component } from 'react';
import {MuiThemeProvider} from '@material-ui/core';
import { AppBar,Button,List, ListItem,ListItemText,Grid } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { createMuiTheme} from '@material-ui/core/styles'
import axios from 'axios';

let myTheme = createMuiTheme({
    palette:{
        primary:{
            main:'#98303b'
          },
      secondary:{
        main:'#64b5f6'
      },
    },
  } );
export class Confirm extends Component {

    constructor(props) {
        super(props);
        this.state = {
          back:false
        };
      }

    continue = () => {
        this.submitUserData();
    }
    
    submitUserData = () => {
        const {shipment_id,shipment_name,shipment_location,shipped_date,shipment_type } = this.props.location.state;
        let reqBody = {
            shipment_id,shipment_name,shipment_location,shipped_date,shipment_type
        }
        
        axios.post('https://jsonplaceholder.typicode.com/posts', reqBody)
        .then((response)=> {
          this.setState({isSuccess: true,isFailure: false, data: response.data});
        })
        .catch((error)=> {
          this.setState({isSuccess: false,isFailure: true, data: error});
        });
        
      }
    back = () => {
        this.setState({back:true})
    }

    render() {
        const { back,isSuccess,isFailure } = this.state;
        const { shipment_id,shipment_name,shipment_location,shipped_date} = this.props.location.state;
        if(isSuccess){
            return <Redirect to='success' />
        }
        if(isFailure){
            return <h3>Failed to load user data</h3>
        }
        if(back){
                return <Redirect
                 to={{
                   pathname:'/home',
                 }} />;
        }
        return (
            <MuiThemeProvider theme={myTheme}>
                <React.Fragment>
                <AppBar className="details" position="static"> <h2>Confirmation Page</h2></AppBar>
                <Grid container spacing={2}
         direction="row" justify="center"
         alignContent="center"
       >
           
       <Grid style={{marginLeft:'auto',marginRight:'auto'}}>
                    <List>
                        
                        <ListItem>
                            <ListItemText 
                            primary={`shipment Id:`}
                            secondary={shipment_id}
                            ></ListItemText>
                        </ListItem>
                        
                        <ListItem>
                            <ListItemText 
                            primary={`Shipment Location:`}
                            secondary={shipment_location}
                            ></ListItemText>
                        </ListItem>

                        <ListItem>
                            <ListItemText 
                            primary={`shipment Name:`}
                            secondary={shipment_name}
                            ></ListItemText>
                        </ListItem>
                        
                        <ListItem>
                            <ListItemText 
                            primary={`Shipment Date:`}
                            secondary={shipped_date}
                            ></ListItemText>
                        </ListItem>
                        
                    </List>
                 <Button 
                    label = "Confirm & Continue"
                    variant="contained" 
                    color="secondary"
                    style = {styles.button}
                    onClick= {this.continue}> Confirm & Continue </Button>

                    <Button 
                    label = "Cancel"
                    variant="contained" 
                    color="secondary"
                    style = {styles.button}
                    onClick= {this.back}> Cancel</Button>
                         </Grid>
                    </Grid>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
    
}

const styles = {
    button : {
        margin: 15
    }
}

export default Confirm;
