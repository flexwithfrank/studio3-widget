import React from 'react';
import { Link } from '@mui/material';
import { useState, useEffect } from 'react';
import {Helmet} from "react-helmet";


const css = `

.button-27 {
  appearance: none;
  background-color: #000000;
  border: 2px solid #000000;
  border-radius: 15px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: Roobert,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 60px;
  min-width: 0;
  outline: none;
  padding: 16px 40px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100%;
  will-change: transform;
}

.button-27:disabled {
  pointer-events: none;
}

.button-27:hover {
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}

.button-27:active {
  box-shadow: none;
  transform: translateY(0);
}`



const ButtonV2 = () => {

    useEffect(() => {
  const script = document.createElement('script');
  script.src = "https://widgets.mindbodyonline.com/javascripts/healcode.js";
  script.async = true;
  document.body.appendChild(script);
return () => {
    document.body.removeChild(script);
  }
}, []);

  return (
    <div>
        <style type="text/css">{css}</style>
        <Helmet><script src="https://widgets.mindbodyonline.com/javascripts/healcode.js" type="text/javascript" async /></Helmet>
       
            <Link m={2} className='button-27'><div className='links'><healcode-widget data-version="0.2" data-link-class="healcode-pricing-option-text-link" data-site-id="30089" data-mb-site-id="686934" data-bw-identity-site="false" data-type="pricing-link" data-inner-html="Purchase now" data-service-id="101165" /></div></Link>
    </div>
  );
}

export default ButtonV2