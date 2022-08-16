import * as React from 'react';
import { Stack, Box, Typography, Modal, Backdrop } from '@mui/material';
import ButtonV2 from './ButtonV2';
import { useEffect } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 3,
  transition: "5s ease-in-out"
};

const PurchaseLanding = () => {

    const [show, setShow] = React.useState(true);
    const handleClose = () => setShow(false);


  return (
    <div>
        <Modal
        open={show}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableAutoFocus="true" 
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
            
        <Box sx={style}>
            <div>
                {/* full width image */}
            <img style={{borderRadius: "10px 10px 0 0"}} src="https://res.cloudinary.com/djjb1vyjm/image/upload/v1660541084/1_uxhi8p.png" width="100%" alt="" />
            </div>
            <Box p={2}>
                {/* title */}
            <Typography align="center" id="modal-modal-title" variant="h5" component="h2">
            <span className='space-font-heavy'>Buy your [10-pack]</span>
            </Typography>

            {/*  onboarding message */}
            <Stack pb={3} alignItems="center" justifyContent="center" direction="row" spacing={2}>
                <Typography px={1} align="center" id="modal-modal-description" sx={{ mt: 2 }}>
                    <span className='space-font-light'>Once completed download the Mindbody app to add, update, and book your workouts!</span>
                </Typography>
            </Stack>

            {/* button group left/right */}
            
            <Stack direction="row" justifyContent="center" alignItems="center">
              <ButtonV2 />

            </Stack>

            </Box>
        </Box>
        </Modal>

    </div>
  );
}


export default PurchaseLanding