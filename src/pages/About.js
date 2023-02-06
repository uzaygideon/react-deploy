import React from 'react'
import { Box, Divider, Typography } from '@mui/material'
import { SubNavTwo } from './SubNavTwo'
import styled from '@emotion/styled'
import {  LocationOn, QueryBuilder,Textsms } from '@mui/icons-material'
import videoImg from '../pictures/ab.jpg'
import contactImg from "C:/Users/HP/Documents/THE WHOLE REACT PROJECT FOLDER/Material ui practicals/mui-one/src/pictures/pmiw630ydpe.jpg"
import PropTypes from 'prop-types';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Fab,Fade}from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import './height-me.css'
import'./sub-flex.css'

export const About = (props) => {
   // some styles written in external css "height-me.css"
  const ContactBackground = styled('div')({
    width:"100%",
    background:`linear-gradient(rgb(0,0,0,0.6), rgb(0,0,0,0.6)), url(${contactImg})`,
    backgroundAttachment:"fixed",
    backgroundSize:"cover",
    display:'flex',
    justifyContent:"center",
    alignItems:"center"
      })


      const SubFlex=styled('div')({
        // backgroundColor:"red",
       // styles written in external css "sub-flex.css"
    })

    const SubFlexTwo=styled('div')({
        // backgroundColor:"blue",
        // styles written in external css "sub-flex.css"
       
    })
    const BackgroundImg= styled('div')({
        background: `url(${videoImg})`,
        backgroundSize:"cover",
          // 'height' styles written in external css "sub-flex.css"
        transform:"scale(0.98,0.98)",
        transition:"all 0.5s",
        "&:hover":{
            transform:"scale(1,1)"
            
        }
    })
/* scroll to the top declaration*/
function ScrollTop(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'start',
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,

  window: PropTypes.func,
}; 
/*end of scroll to the top declaration */

  return (
    <>
     <ContactBackground id="back-to-top-anchor" className='height-me'>
    About Us
  </ContactBackground>
    <Box sx={{width:"100%",bgcolor:"rgb(248,249,250)", px:{xs:"2%",sm:"8%"},pt:"8%",pb:"9%"}}>
      <Typography align='center' sx={{lineHeight:"5",fontFamily:""}} >
    <Typography variant='h4' >
        About Us
        <Divider sx={{maxWidth:{xs:"16%",md:"7.5%",lg:"8%"},border:"1px solid rgba(227, 167, 20,0.4)",position:"relative",left:"50%",transform:"translate(-45%)"}} textAlign="center" />
    </Typography >
    </Typography>
    <SubNavTwo/>
    <Typography align='center' sx={{lineHeight:"5",fontFamily:""}} >
    <Typography variant='h4' >
        The Vision
        <Divider sx={{maxWidth:{xs:"16%",md:"7.5%",lg:"8%"},border:"1px solid rgba(227, 167, 20,0.4)",position:"relative",left:"50%",transform:"translate(-45%)"}} textAlign="center" />
    </Typography >
    </Typography>
    
    <Box sx={{width:"100%",
    // bgcolor:"rgb(255,255,255)"
     px:"0%",pt:"7%",pb:"2%",
          display: 'flex',
          flexDirection: {xs:"column",sm:"row"},
          borderRadius: 1,
          justifyContent:"space-around"
        
        }}>

< SubFlex className='alt-one'>
       <Typography sx={{
        lineHeight:"2.5",
        color:"RGB(1 1 1 )",
        fontSize:"1.2rem"
    }}> <Typography sx={{fontSize:"1.8rem",color:"black"}} >About Our Church</Typography>
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
        </ SubFlex>
        < SubFlexTwo className='alt-two'>
        <BackgroundImg className='bg-ht'></BackgroundImg>
        </ SubFlexTwo>
       
</Box>

<Typography align='center' sx={{lineHeight:"5",fontFamily:""}} >
    <Typography variant='h4' >
        The Team
        <Divider sx={{maxWidth:{xs:"16%",md:"7.5%",lg:"8%"},border:"1px solid rgba(227, 167, 20,0.4)",position:"relative",left:"50%",transform:"translate(-45%)"}} textAlign="center" />
    </Typography >
    </Typography>
    
    <Box sx={{width:"100%",
    // bgcolor:"rgb(255,255,255)"
     px:"0%",pt:"7%",pb:"2%",
          display: 'flex',
        flexDirection: {xs:"column",sm:"row"},
          borderRadius: 1,
          justifyContent:"space-around"
        
        }}>

< SubFlex className='alt-one'>
       <Typography sx={{
        lineHeight:"2.5",
        color:"RGB(1 1 1 )",
        fontSize:"1.2rem"
    }}> <Typography sx={{fontSize:"1.8rem",color:"black"}} >About Our Church</Typography>
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
        </ SubFlex>
        < SubFlexTwo className='alt-two'>
        <BackgroundImg className='bg-ht'></BackgroundImg>
        </ SubFlexTwo>
       
</Box>

<Typography align='center' sx={{lineHeight:"5",fontFamily:""}} >
    <Typography variant='h4' >
        The History
        <Divider sx={{maxWidth:{xs:"16%",md:"7.5%",lg:"8%"},border:"1px solid rgba(227, 167, 20,0.4)",position:"relative",left:"50%",transform:"translate(-45%)"}} textAlign="center" />
    </Typography >
    </Typography>
    
    <Box sx={{width:"100%",
    // bgcolor:"rgb(255,255,255)"
     px:"0%",pt:"7%",pb:"2%",
          display: 'flex',
          flexDirection: {xs:"column",sm:"row"},
          borderRadius: 1,
          justifyContent:"space-around"
        
        }}>

< SubFlex className='alt-one'>
       <Typography sx={{
        lineHeight:"2.5",
        color:"RGB(1 1 1 )",
        fontSize:"1.2rem"
    }}> <Typography sx={{fontSize:"1.8rem",color:"black"}} >About Our Church</Typography>
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
        </ SubFlex >
        < SubFlexTwo className='alt-two'>
        <BackgroundImg className='bg-ht'></BackgroundImg>
        </ SubFlexTwo>
       
</Box>

    </Box>{/* whole container div*/ }

    <Box sx={{width:"100%",bgcolor:"rgb(92,120,147)", px:"6%",pt:"4%",pb:{xs:"7%",sm:"4%"},
    display:"flex",
    flexDirection:{xs:"column",sm:"row"},
    justifyContent:"space-between"
    
    }}>
<Typography sx={{lineHeight:"1.5",color:"rgb(168,174,177)",fontFamily:"roboto",mt:{xs:2,sm:0}}}>
<Typography sx={{color:"rgba(255,255,255,0.8)",textTransform:"uppercase",fontFamily:"oswald"}}> <LocationOn/> location</Typography>
  First turning by the left off Olu Alabi way,
  <br/>
  GRA,coming from Oke-Fia,Osogbo,
  <br/>
  Osun State,Nigeria
</Typography>
{/* end of flex one */}
<Typography sx={{lineHeight:"1.7",color:"rgb(168,174,177)",mt:{xs:2,sm:0}}}>
<Typography sx={{color:"rgba(255,255,255,0.8)",textTransform:"uppercase",fontFamily:"oswald",mb:"3%"}}> <QueryBuilder/> service times</Typography>
    Sunday - 10AM
  <br/>
 Tuesday - 6PM
  <br/>
 Saturday - 5PM
</Typography>
{/* end of flex two */}
<Typography sx={{lineHeight:"1.7",color:"rgb(168,174,177)",fontFamily:"roboto",mt:{xs:2,sm:0}}}>
<Typography sx={{color:"rgba(255,255,255,0.8)",textTransform:"uppercase",fontFamily:"oswald"}}> <Textsms/>  get in touch</Typography>
Email:prevailerchurch@gmail.com
  <br/>
  Phone:+2348169344755

</Typography>
{/* end of flex three */}
    </Box>
    <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  )
}
