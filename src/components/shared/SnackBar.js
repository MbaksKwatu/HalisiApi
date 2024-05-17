import React, { useEffect } from 'react'
import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert'

const Alert = React.forwardRef(function Alert(props, ref) {
      return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const SnackBar = ({value, text, mood}) => {
      const [open, setOpen] = React.useState(value);

      const handleClose = (event, reason) => {
            if (reason === 'clickaway') {
                  return;
            }

            setOpen(false);
      };
      useEffect(() => {
        setOpen(value);
        
      }, [value])
      
      return (
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                  <Alert onClose={handleClose} severity={mood} sx={{ width: '100%' }}>
                        {text}
                  </Alert>
            </Snackbar>


      )
}

export default SnackBar