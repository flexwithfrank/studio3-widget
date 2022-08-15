import './App.css';
import * as React from 'react';
import { Container, Box, Typography, Stack, Link } from '@mui/material';
import BasicModal from './Modal';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';



function App() {
  const [show, setShow] = React.useState(true);
  const handleClick = () => setShow(false)

  return (

    <Container sx={{backgroundColor: "#000000"}} disableGutters="true" maxWidth="xl">
      <Container style={{display: show ? "" : "none"}} maxWidth="xl" disableGutters="true" className="gradient">

        <Stack direction="row" justifyContent="center" alignItems="center">
          <Typography lineHeight="24px" align='center' color="#ffffff" p={3} id="modal-modal-title" variant="h6" component="h2">
            <span className='space-font-heavy'> Studio3 Fitness is the premier boutiqe fitness studio in Seattle. Get your 10 pack &nbsp; 
            <healcode-widget data-version="0.2" data-link-class="healcode-pricing-option-text-link" data-site-id="30089" data-mb-site-id="686934" data-bw-identity-site="false" data-type="pricing-link" data-inner-html="here" data-service-id="101165" />
           &nbsp; 🎉 Offer exp 8.19</span>
          </Typography>
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
    </Container>

  );
}

export default App;
