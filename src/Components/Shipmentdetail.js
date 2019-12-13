import React, {Component} from 'react';
import { AppBar,Button,TextField,FormControl,Grid } from '@material-ui/core';
import { ThemeProvider as MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';


let theme = createMuiTheme({
  palette:{
    primary:{
      main:'#98303b'
    },
    secondary:{
      main:'#64b5f6'
    },
  },
} 
);

const styles = theme => ({
  button : {
    margin: 15
}
});
class Shipmentdetail extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        shipment_id: '',
        shipment_name: '',
        shipment_location:'',
        shipped_date:'',
        errormessage:'',
      };
    }

    continue = (e) => {
      e.preventDefault();
      this.setState({isSuccess: true});
    }

    myChangeHandler = (event) => {
      let name = event.target.name;
      let elementValue = event.target.value;
      let err = '';
      
         if(name === 'shipment_id') {
          if ( elementValue !== "" && !Number(elementValue)) {
              err = <strong> Enter the valid shipment number</strong> ;
            }
            this.setState({errormessage: err});
          }
            this.setState({[name]: elementValue});
  }
    render() {
      const {isSuccess, isFailure,shipped_date,shipment_location,shipment_name,shipment_id } =this.state;
      
      let enableSubmit = shipped_date && shipment_location && shipment_name && shipment_id;

      if(isSuccess){
        return <Redirect to={{
          pathname: '/confirm',
          state: this.state
      }}/>;
      };

      return (
       <MuiThemeProvider theme={theme}>
       <React.Fragment>

          <AppBar className="details"
          position="static"> <h2> Enter the Shipment Details </h2> </AppBar>

        {this.state.errormessage}
        
        <Grid container spacing={2}
         direction="row" justify="center"
         alignContent="center"
       > 
       
       <Grid item lg={6} xs={12} style={{marginLeft:'auto',marginRight:'auto'}}>
        <form noValidate autoComplete="off">
         
    <FormControl fullWidth>
        <TextField
        color='primary'
        required
        label="Shipment ID"
        InputLabelProps={{style: {fontSize: 12}}}
        type='text'
        name='shipment_id'
        onChange={this.myChangeHandler}
        /></FormControl>
        <br/> <br/>

<FormControl fullWidth>
        <TextField
          type='text'
          required
          label="Shipment Name"
          name='shipment_name'
          InputLabelProps={{style: {fontSize: 12}}}
          onChange={this.myChangeHandler} 
        /></FormControl>
</form>
</Grid>
<Grid item lg={6} xs={12} style={{marginLeft:'auto',marginRight:'auto'}}>
        <form noValidate autoComplete="off">
    
<FormControl fullWidth>
        <TextField
          type='text' label="Shipment Location"
          required
          name='shipment_location'
          InputLabelProps={{style: {fontSize: 12}}}
          onChange={this.myChangeHandler}
          />
</FormControl>

<br/><br/>

<FormControl fullWidth>
        <TextField
          type='date' label="Shipment shipped date"
          required
          name='shipped_date'
          InputLabelProps={{ shrink: true }}
          onChange={this.myChangeHandler}
          />
        </FormControl>

      </form>
<br/>
       {isFailure && <div>Form field issue</div>}
       
       </Grid>
        </Grid>

        <br/>
       <Grid>
       <Button 
            label = "Continue"
            variant="contained" 
            color="secondary"
            disabled={!enableSubmit}
            style = {styles.button}
            onClick={this.continue}
            > Continue </Button>  
       </Grid>
      </React.Fragment>
      </MuiThemeProvider>
      );
    }
  }


export default Shipmentdetail