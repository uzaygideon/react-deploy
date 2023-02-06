import React from 'react'
import { Box, } from '@mui/material'
import styled from '@emotion/styled'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import {  ArrowRightAltRounded, PlayCircle } from '@mui/icons-material'
import videoImg from '../pictures/video-pix.jpg'
import Backdrop from '@mui/material/Backdrop';
import  './width-me.css'
import videoPlayer from 'C:/Users/HP/Documents/THE WHOLE REACT PROJECT FOLDER/Material ui practicals/mui-one/src/Audios/2524f8f9546346f987eb70ba68d4fe72.mp4'

// import { display } from '@mui/system'
export const SubNavTwo = () => {
    const SubFlex=styled('div')({
        // backgroundColor:"blue",
         // some styles written in external css "sub-flex.css"
        padding:"2% 0% 7%",
        color:"rgb(124,124,125)"
    })

    const SubFlexTwo=styled('div')({
        // backgroundColor:"blue",
          // some styles written in external css "sub-flex.css"
        padding:"1% 0% 10%",
        color:"rgb(124,124,125)"
    })
    const BackgroundImg= styled('div')({
        background: `linear-gradient(rgb(0,0,0,0.3), rgb(0,0,0,0.6)), url(${videoImg})`,
        height:"50vh",
        backgroundSize:"cover",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        cursor:"pointer",
        transform:"scale(0.98,0.98)",
        transition:"all 0.5s",
        "&:hover":{
            transform:"scale(1,1)"
            
        }
    })

    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
      setOpen(false);
    };
    const handleToggle = () => {
      setOpen(!open);
    };
  
  return (
    <Box sx={{width:"100%",bgcolor:"rgb(255,255,255)", px:"8%",pt:"6%",pb:"4%",
          display: 'flex',
          flexDirection: {xs:"column",sm:"row"},
          borderRadius: 1,
          justifyContent:"space-around"
        
        }}>
              <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
 <video controls width="500" height="275" style={{boxShadow:"2px 2px 5px RGB(44 46 47)"}}>
      <source src={videoPlayer} type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video>
      </Backdrop>
    {/* end of backdrop tag */}
        < SubFlexTwo className='width-me'>
       <BackgroundImg onClick={handleToggle} >
        <PlayCircle sx={{fontSize:'5rem',color:"white"}}/>
       </BackgroundImg>

        </ SubFlexTwo>
        < SubFlex className='width-me'>
       <Typography sx={{
        lineHeight:"2.5",
        color:"RGB(1 1 1 )",
        fontSize:"1.2rem"
        
       
    }}> 
    <Typography sx={{fontSize:"1.8rem",color:"black"}} >About Our Church</Typography>
Are You Longing For A Change?
</Typography>

<Typography sx={{
   fontFamily:"'Work Sans', sans-serif;"
}}> 
It is a new dawn and God by the instrumentality of His Spirit
is redefinig the structure and operation of His church to fit into
into His eternal design. Men are dicovering this reality and
pressing into new dimension of the Spirit all across the world.
 </Typography>
 <Button variant='outlined' endIcon={<ArrowRightAltRounded/>}  sx={{mt:2}}onClick={handleToggle}>WATCH VIDEO
 
 </Button> 
 
        </ SubFlex>
   
        </Box>
  )
}
