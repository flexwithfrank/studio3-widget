import * as React from 'react';
import Box from '@mui/material/Box';
import { Container, Stack } from '@mui/system';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/joy/IconButton';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import HowToRegIcon from '@mui/icons-material/HowToReg';


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

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
        aria-describedby="modal-modal-description">

        <Box sx={style}>
            <Container disableGutters="true" maxWidth="xl" style={styles}>
                {/* full width image */}
            <img style={{borderRadius: 2}} src="https://res.cloudinary.com/djjb1vyjm/image/upload/v1660503696/Untitled_1200_1200_px_3_n6brz1.png" width="100%" alt="" />
            </Container>
            <Box p={2}>
                {/* title */}
            <Typography mb={2} id="modal-modal-title" variant="h6" component="h2">
            <span className='space-font-heavy'> Schedule a class to get started! </span>
            </Typography>

            {/* direction 1 */}
            <Stack pb={3} alignItems="center" justifyContent="center" direction="row" spacing={2}>
                <HowToRegIcon sx={{width: 30, height: 30}} />
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <span className='space-font-light'> To get started book your first workout using the schedule widget.</span>
                </Typography>
            </Stack>

            {/* direction 2 */}

            <Stack alignItems="center" justifyContent="center" direction="row" spacing={2}>

            <MailOutlineIcon sx={{width: 30, height: 30}} />
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
               <span className='space-font-light'>Check your email with details about your 10-pack and booking more classes!</span>
            </Typography>
            </Stack>
            </Box>
            <Stack justifyContent="flex-end" alignItems="flex-end">
                <IconButton onClick={handleClose} variant="solid">
                <CloseIcon />
                </IconButton>
            </Stack>
        </Box>

        </Modal>
    
    </div>
  )
}

export default BasicModal