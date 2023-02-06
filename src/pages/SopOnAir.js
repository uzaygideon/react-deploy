import React from 'react'
import { ElfsightWidget } from 'react-elfsight-widget'
import { Button } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom';
export const SopOnAir = () => {
  return (
    <>
<ElfsightWidget widgetID="062aa577-2922-443a-a3f1-9fb86d08d3a6"/>
<Button component={RouterLink} to="/" variant='contained' sx={{position:"relative",left:"50%",transform:"translate(-50%)", mt:4}}>Back to Home Page</Button>
    </>
  )
}
