import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const AddTraining = (props) => {
  const [open, setOpen] = React.useState(false);
  const [training, setTraining] = React.useState({
     date: ' ', duration: ' ', activity: ' ', customer: ' '
  })

  const handleClickOpen = () => {
      console.log(props)
      setTraining({date: ' ', duration: ' ', activity: ' ', customer: props.customer.links[1].href})
      console.log(props.customer.links[1].href);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (e) => {
    setTraining({...training, [e.target.name]: e.target.value})
    
};

    const createTraining = () => {
        props.addTraining(training);
        handleClose();
    }


  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add Training
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add</DialogTitle>
        <DialogContent>
          
            <TextField
                autoFocus
                margin="dense"
                type="date"
                name="date"
                value={training.date}
                onChange={e => handleInputChange(e)}
                label='Date'
                fullWidth
            />

            <TextField
                
                margin="dense"
                name="duration"
                value={training.duration}
                onChange={e => handleInputChange(e)}
                label='Duration'
                fullWidth
            />
            <TextField
                
                margin="dense"
                name="activity"
                value={training.activity}
                onChange={e => handleInputChange(e)}
                label='Activity'
                fullWidth
            />
            <TextField
                
                margin="dense"
                name="Customer"
                value={training.customer}
                label='Customer'
                fullWidth
            />
            

        
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={createTraining} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddTraining;