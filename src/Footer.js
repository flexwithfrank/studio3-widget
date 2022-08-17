import React from 'react'
import { Typography, Container, Stack, Box, Grid, Link} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link as LinkRoute } from 'react-router-dom';

const Footer = () => {
  return (
    <Container className='gradient' maxWidth="xl">
        
        <Grid py={3} container>

        <Grid xs={12} sm={6} item>
        <Stack py={{ xs: 3, sm: 0}} justifyContent={{ xs: "center", sm: "flex-start"}} direction="row">

            <Typography sx={{ lineHeight: { xs: "24px" }}} color='#fff' fontSize={{ xs: 14 }}>
                            <span className='space-font-light'>© 2022 Studio3 Fitness. All rights reserved.</span>
            </Typography>    
        </Stack>
        </Grid>

        <Grid justifyContent={{ xs: "center", sm: "flex-end"}} xs={12} sm={6} container item>
        <Stack justifyContent="center" alignItems="center" direction={"row"} spacing={2}>
            <LinkRoute className='space-font-light' sx={{color: "white"}} to="/PrivacyPolicy"><p>Privacy Policy</p></LinkRoute>
            <Link href="https://www.instagram.com/studio3.fit/"><InstagramIcon sx={{color: "#ffffff"}} /></Link>
            <Link href="https://www.facebook.com/studio3LQA/"><FacebookIcon sx={{color: "#ffffff"}} /></Link>
            <Link href="https://twitter.com/Studio3fit"><TwitterIcon sx={{color: "#ffffff"}} /></Link>
            <Link href="mailto:hi@eatblended.com"><EmailIcon sx={{color: "#ffffff"}} /></Link>
            
        </Stack>
        </Grid>

        

        </Grid>

    </Container>
  )
}

export default Footer