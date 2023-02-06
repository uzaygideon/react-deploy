import { FacebookRounded, Instagram, LocationOn, QueryBuilder, Telegram, Textsms } from '@mui/icons-material'
import { Box, Link, Typography } from '@mui/material'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom';

export const SubNavFooter = () => {
  return (
    <>
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
<Box sx={{width:"100%",bgcolor:"rgb(77,102,125)", px:"6%",pt:"4%",pb:"5%"}}>
<Box sx={{width:"100%",bgcolor:"rgb(77,102,125)",pb:"3%",
    display:"flex",
    flexDirection:{xs:"column",sm:"row"},
    justifyContent:"space-between"
    
    }}>
<Typography sx={{lineHeight:"1.8",fontFamily:"roboto",textTransform:"capitalize"}}>
<Typography sx={{color:"rgba(255,255,255,0.9)",textTransform:"capitalize",fontFamily:"oswald",fontSize:"1.2rem",mb:{xs:"0%",sm:"5%"}}}> programs</Typography>
 <Link underline='hover' sx={{color:"rgb(168,174,177)"}}>{ "moment of change(MOC)"}</Link>
  <br/>
  <Link href="#" underline='hover' sx={{color:"rgb(168,174,177)"}}>{ "school of purpose live (SOP)"}</Link>
  <br/>
  <Link  component={RouterLink} to='/SopOnAir' underline='hover' sx={{color:"rgb(168,174,177)"}}>{ "school of purpose on air (SOPOA)"}</Link>
  <br/>
  <Link href="#" underline='hover' sx={{color:"rgb(168,174,177)"}}>{ "Apostolic Reformation Traininng School (ARTS)"}</Link>
</Typography>
{/* end of second flexone */}

<Typography sx={{lineHeight:"1.8",fontFamily:"roboto",textTransform:"capitalize",mt:{xs:2}}}>
<Typography sx={{color:"rgba(255,255,255,0.9)",textTransform:"capitalize",fontFamily:"oswald",fontSize:"1.2rem",mb:{xs:"0%",sm:"5%"}}}> media</Typography>
 <Link href="#" underline='hover' sx={{color:"rgb(168,174,177)"}}>{ "event streaming"}</Link>
  <br/>
  <Link href="#" underline='hover' sx={{color:"rgb(168,174,177)"}}>{ "moment of change messages"}</Link>
  <br/>
  <Link href="#" underline='hover' sx={{color:"rgb(168,174,177)"}}>{ "school of purpose messages"}</Link>
  <br/>
  <Link href="#" underline='hover' sx={{color:"rgb(168,174,177)"}}>{ "worship"}</Link>
</Typography>
{/* end of second flextwo */}

<Typography sx={{lineHeight:"1.8",fontFamily:"roboto",textTransform:"capitalize",mt:{xs:2}}}>
<Typography sx={{color:"rgba(255,255,255,0.9)",textTransform:"capitalize",fontFamily:"oswald",fontSize:"1.2rem",mb:{xs:"0%",sm:"5%"}}}> about us</Typography>
 <Link  component={RouterLink} to='/About'underline='hover' sx={{color:"rgb(168,174,177)"}}>{ "the vision"}</Link>
  <br/>
  <Link  component={RouterLink} to='/About' underline='hover' sx={{color:"rgb(168,174,177)"}}>{ "the team"}</Link>
  <br/>
  <Link  component={RouterLink} to='/About' underline='hover' sx={{color:"rgb(168,174,177)"}} >{ "the history"}</Link>
</Typography>
{/* end of second flexthree */}
<Typography>
    <Typography sx={{color:"rgba(255,255,255,0.9)",textTransform:"capitalize",fontFamily:"oswald",fontSize:"1.2rem",mb:{xs:"0%",sm:"5%"}}}> Social media</Typography>
    <Box sx={{
        display:"flex",
        width:"40%",
        justifyContent:"space-between"
       
    }}>
        <Link href="#"  sx={{color:"rgb(168,174,177)",transition:"all 0.5s","&:hover":{color:"white"}}}><FacebookRounded/></Link>
        <Link href="#" sx={{color:"rgb(168,174,177)",transition:"all 0.5s","&:hover":{color:"white"}}}><Instagram/></Link>
        <Link href="#" sx={{color:"rgb(168,174,177)",transition:"all 0.5s","&:hover":{color:"white"}}}> <Telegram/></Link>
    </Box>
    </Typography>
    {/* end of second flexthree */}
    </Box>

    <Typography align='center'sx={{color:"rgb(168,174,177)",fontSize:{xs:"0.9rem"}}}>Copyright © 2023 All Rights Reserved | PCRMI</Typography>
    </Box>
    </>
  )
}
