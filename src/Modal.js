import * as React from 'react';
import Box from '@mui/material/Box';
import { Container, Stack } from '@mui/system';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useEffect } from 'react';
import ButtonMain from './Button';
import Backdrop from '@mui/material/Backdrop';
import { Grid } from '@mui/material';


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

const styles = {
borderRadius: 5
}

const BasicModal = () => {

const [open, setOpen] = React.useState(false);
const [openTwo, setOpenTwo] = React.useState(false);
const [openThree, setOpenThree] = React.useState(false);

const handleFullClose = () => setOpen(false);

const handlePrevClose = () => {
  setOpenTwo(false);
  setOpen(true);
};

const handlePrevCloseTwo = () => {
  setOpenTwo(true);
  setOpenThree(false);
}

  const handleOpen = () => setOpen(true);
  const handleClose = () => { 
    setOpen(false);
    setOpenTwo(true); 
  };
  
    const handleCloseTwo = () => { 
      setOpenTwo(false);
      setOpenThree(true);
    };

    const handleCloseThree = () => setOpenThree(false);



//   delay modal for 2 seconds
  useEffect(()=>{
  setTimeout(()=>{
    setOpen(true)
  }, 2000)
}, [])

  return (
    <div>
        
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableAutoFocus="true" 
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 0,
        }}>
            
        <Box sx={style}>
            <div style={styles}>
                {/* full width image */}
            <img style={{borderRadius: "10px 10px 0 0"}} src="https://res.cloudinary.com/djjb1vyjm/image/upload/v1660541084/1_uxhi8p.png" width="100%" alt="" />
            </div>
            <Box p={2}>
                {/* title */}
            <Typography align="center" id="modal-modal-title" variant="h5" component="h2">
            <span className='space-font-heavy'>Schedule your first workout </span>
            </Typography>

            {/*  onboarding message */}
            <Stack pb={3} alignItems="center" justifyContent="center" direction="row" spacing={2}>
                <Typography px={1} align="center" id="modal-modal-description" sx={{ mt: 2 }}>
                    <span className='space-font-light'> Book your first workout using this schedule widget. Login or create an account to get started</span>
                </Typography>
            </Stack>

            {/* button group left/right */}
            <Grid container>

            <Grid xs={6} item direction="row" justifyContent="flex-start" alignItems="center">
              <ButtonMain click={handleFullClose} bg="#ffffff" cta="Close" />
            </Grid>
            
            <Grid xs={6} item container  direction="row" justifyContent="flex-end" alignItems="center">
              <ButtonMain click={handleClose} cta="Next" bg="#54545c" clr="#ffffff" />
            </Grid>

            </Grid>

            </Box>
        </Box>
        </Modal>
        

        {/* modal two */}

        <Modal
        open={openTwo}
        onClose={handleCloseTwo}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableAutoFocus="true"
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 0,
        }}>

        <Box sx={style}>
            <Container disableGutters="true" maxWidth="xl" style={styles}>
                {/* full width image */}
            <img style={{borderRadius: "10px 10px 0 0"}} src="https://res.cloudinary.com/djjb1vyjm/image/upload/v1660541087/2_eljncz.png" width="100%" alt="" />
            </Container>
            <Box p={2}>
                {/* title */}
            <Typography align="center" id="modal-modal-title" variant="h5" component="h2">
            <span className='space-font-heavy'>Check your email for details</span>
            </Typography>

            {/* onboarding message */}
            <Stack pb={3}  alignItems="center" justifyContent="center" direction="row" spacing={2}>
            <Typography px={1} align="center" id="modal-modal-description" sx={{ mt: 2 }}>
               <span className='space-font-light'>Check your email for details on claiming your [10 - pack]. Hurry because there are only a few available!</span>
            </Typography>
            </Stack>

            {/* button group left/right */}

            <Grid container>

            <Grid xs={6} item direction="row" justifyContent="flex-start" alignItems="center">
              <ButtonMain click={handlePrevClose} cta="Prev" bg="#ffffff" />
            </Grid>
            
            <Grid xs={6} item container  direction="row" justifyContent="flex-end" alignItems="center">
              <ButtonMain click={handleCloseTwo} cta="Next" bg="#54545c" clr="#ffffff" />
            </Grid>

            </Grid>
            </Box>
        </Box>

        </Modal>

        {/* modal 3 */}

         <Modal
        open={openThree}
        onClose={handleCloseThree}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableAutoFocus="true"
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 0,
          }}>

        <Box sx={style}>
            <Container disableGutters="true" maxWidth="xl" style={styles}>
                {/* full width image */}
            <img style={{borderRadius: "10px 10px 0 0"}} src="https://res.cloudinary.com/djjb1vyjm/image/upload/v1660541086/3_e7asn1.png" width="100%" alt="" />
            </Container>
            <Box p={2}>
                {/* title */}
            <Typography align="center" id="modal-modal-title" variant="h5" component="h2">
            <span className='space-font-heavy'>Get the mobile app </span>
            </Typography>

            {/* onboarding message */}
            <Stack pb={3}  alignItems="center" justifyContent="center" direction="row" spacing={2}>
            <Typography px={1} align="center" id="modal-modal-description" sx={{ mt: 2 }}>
               <span className='space-font-light'>Download the Mindbody© booking app to view, change, and track all your exciting workouts!</span>
            </Typography>
            </Stack>

            {/* button group left/right */}

            <Grid container>

            <Grid xs={6} item direction="row" justifyContent="flex-start" alignItems="center">
              <ButtonMain click={handlePrevCloseTwo} cta="Prev" bg="#ffffff" />
            </Grid>
            
            <Grid xs={6} item container  direction="row" justifyContent="flex-end" alignItems="center">
              <ButtonMain click={handleCloseThree} cta="Close" bg="#54545c" clr="#ffffff" />
            </Grid>
            </Grid>

            </Box>
        </Box>

        </Modal>
    
    </div>
  )
}

export default BasicModal