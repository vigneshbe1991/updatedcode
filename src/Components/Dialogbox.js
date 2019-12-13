import React, {Component} from 'react';
import {Button,TextField,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle} from '@material-ui/core';

class Dialogbox extends Component  {
    constructor(props) {
        super(props)
    
        this.state = {
          setOpen:false    
        }
    }
    

   handleClickOpen = () => {
    this.setState( {setOpen: true});
    
  };

    handleClose = () => {
      this.setState( {setOpen: false});
  };

render(){

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={this.state.setOpen} onClose={this.handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
  }
}

export default Dialogbox