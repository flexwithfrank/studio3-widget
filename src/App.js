import './App.css';
import * as React from 'react';
import { Container, Box, Typography, Stack } from '@mui/material';
import BasicModal from './Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import ButtonV2 from './ButtonV2';




function App() {
  
  const [show, setShow] = React.useState(true);
  const handleClick = () => setShow(false);

  return (

    <Container sx={{backgroundColor: "#000000"}} disableGutters="true" maxWidth="xl">
      <Container style={{display: show ? "" : "none"}} maxWidth="xl" disableGutters="true" className="gradient">

        <Stack py={2} direction="row" justifyContent="center" alignItems="center">
          <Typography lineHeight="24px" align='center' color="#ffffff" p={3} id="modal-modal-title" variant="h6" component="h2">
            <span className='space-font-heavy'> Studio3 Fitness is Seattle's premier boutiqe fitness studio. Don't miss out on our 10 for $10 special!&nbsp; 🎉</span>
          </Typography>
          <ButtonV2 />
          <Stack direction="row" alignItems="flex-end" justifyContent="flex-end">
              <IconButton onClick={handleClick} sx={{color: "white"}} aria-label="close">
              <CloseIcon  />
              </IconButton>
          </Stack>
        </Stack>

      </Container>
        <BasicModal />
      
      <div style={{backgroundColor: "#000000"}}>
        <healcode-widget data-type="schedules" data-widget-partner="object" data-widget-id="0f179021470c" data-widget-version="1" >
        </healcode-widget>
        </div>
        <Footer />
        
    </Container>

  );
}

export default App;
