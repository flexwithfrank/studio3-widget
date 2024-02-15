import React from 'react'
import Pricing from './Pricing'

const pageStyles = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
}

const Trial = () => {
  return (
    <div style={pageStyles}>
        <Pricing />
    </div>
  )
}

export default Trial