import * as React from 'react';
import Box from '@mui/material/Box';
import { Container, Stack } from '@mui/system';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useEffect } from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import ButtonMain from './Button';
import Backdrop from '@mui/material/Backdrop';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';




const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 2
};

const styles = {
position: "relative",
overflow: "hidden",
borderRadius: 2

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
            <Container disableGutters="true" maxWidth="xl" style={styles}>
                {/* full width image */}
            <img style={{borderRadius: 2}} src="https://res.cloudinary.com/djjb1vyjm/image/upload/v1660507935/3_mhzyu1.png" width="100%" alt="" />
            </Container>
            <Box p={2}>
                {/* title */}
            <Typography align="left" mb={2} id="modal-modal-title" variant="h6" component="h2">
            <span className='space-font-heavy'><span style={{backgroundColor: "#54545c", color: "white", padding: "4px 12px", borderRadius: 50}}>1 
            </span>&nbsp; Schedule your first workout </span>
            </Typography>

            {/*  onboarding message */}
            <Stack pb={3} alignItems="center" justifyContent="center" direction="row" spacing={2}>
                <HowToRegIcon sx={{width: 30, height: 30}} />
                <Typography align="left" id="modal-modal-description" sx={{ mt: 2 }}>
                    <span className='space-font-light'> Book your first workout using the schedule widget.</span>
                </Typography>
            </Stack>
            
            <Stack direction="row" spacing={1} justifyContent="flex-end" alignItems="flex-end">
              <ButtonMain click={handleFullClose} bg="#ffffff" cta="Close" />
              <ButtonMain click={handleClose} cta="Next" bg="#54545c" clr="#ffffff" />
            </Stack>
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
            <img style={{borderRadius: 2}} src="https://res.cloudinary.com/djjb1vyjm/image/upload/v1660507935/2_ola0s0.png" width="100%" alt="" />
            </Container>
            <Box p={2}>
                {/* title */}
            <Typography align="left" mb={2} id="modal-modal-title" variant="h6" component="h2">
            <span className='space-font-heavy'><span style={{backgroundColor: "#54545c", color: "white", padding: "4px 11px", borderRadius: 50}}>2</span>&nbsp; Check your email for details </span>
            </Typography>

            {/* onboarding message */}
            <Stack pb={3}  alignItems="center" justifyContent="center" direction="row" spacing={2}>
            <MailOutlineIcon sx={{width: 30, height: 30}} />
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
               <span className='space-font-light'>Check your email for details on redeeming your [ 10 - pack ]</span>
            </Typography>
            </Stack>

            <Stack direction="row" spacing={1} justifyContent="flex-end" alignItems="flex-end">
              <ButtonMain click={handlePrevClose} cta="Prev" bg="#ffffff" />
                <ButtonMain click={handleCloseTwo} cta="Next" bg="#54545c" clr="#ffffff" />
            </Stack>
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
            <img style={{borderRadius: 2}} src="https://res.cloudinary.com/djjb1vyjm/image/upload/v1660507935/1_jdyo6g.png" width="100%" alt="" />
            </Container>
            <Box p={2}>
                {/* title */}
            <Typography align="left" mb={2} id="modal-modal-title" variant="h6" component="h2">
            <span className='space-font-heavy'> <span style={{backgroundColor: "#54545c", color: "white", padding: "4px 11px", borderRadius: 50}}>3</span>&nbsp; Download the mobile app </span>
            </Typography>

            {/* onboarding message */}
            <Stack pb={3}  alignItems="center" justifyContent="center" direction="row" spacing={2}>
            <MobileFriendlyIcon sx={{width: 30, height: 30}} />
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
               <span className='space-font-light'>Download the Mindbody© booking app to view and change your workouts</span>
            </Typography>
            </Stack>

            <Stack direction="row" spacing={1} justifyContent="flex-end" alignItems="flex-end">
              <ButtonMain click={handlePrevCloseTwo} cta="Prev" bg="#ffffff" />
                <ButtonMain click={handleCloseThree} cta="Close" bg="#54545c" clr="#ffffff" />
            </Stack>
            </Box>
        </Box>

        </Modal>
    
    </div>
  )
}

export default BasicModal