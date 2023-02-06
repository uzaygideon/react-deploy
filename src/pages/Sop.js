import React from 'react'
import Iframe from 'react-iframe'
import './style-iframe.css'
import {QueryBuilder,Textsms,LocationOn } from '@mui/icons-material'
import { Typography,Box } from '@mui/material'
export const SopOnWeb = () => {
  return (
    <div>
   {/* <iframe src="https://zeno.fm/player/prevailers" width="575" height="250" frameborder="0" scrolling="no"></iframe>
   <a href="https://zeno.fm/" target="_blank" style="display: block; font-size: 0.9em; line-height: 10px;">A Zeno.FM Station</a> */}

   <Iframe url="https://zeno.fm/player/prevailers"
        width="100%"
        height="450px"
        display="block"
        className="iframe"/>


<Box sx={{width:"100%",bgcolor:"rgb(92,120,147)", px:"6%",pt:"4%",pb:{xs:"7%",sm:"4%"},
    display:"flex",
    flexDirection:{xs:"column",sm:"row"},
    justifyContent:"space-between",
    mt:3
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
    </div>
  )
}
