import React from 'react'
import { Box, Divider, Typography } from '@mui/material'
import ReactAudioPlayer from 'react-audio-player'

import latestAudio from "C:/Users/HP/Documents/THE WHOLE REACT PROJECT FOLDER/Material ui practicals/mui-one/src/Audios/audOne.mp3"
export const SubNavOne = () => {
  return (
    <Box sx={{width:"100%",bgcolor:"rgb(248,249,250)", px:"8%",pt:"8%",pb:"9%"}}>
        <Typography align='center' sx={{lineHeight:"5",fontFamily:""}} >
    <Typography variant='h4' >
        Latest Sermon
        <Divider sx={{maxWidth:{xs:"16%",md:"7.5%",lg:"8%"},border:"1px solid rgba(227, 167, 20,0.4)",position:"relative",left:"50%",transform:"translate(-45%)"}} textAlign="center" />
    </Typography >
    <Typography sx={{color:"rgb(124,124,125)",mt:"4%",fontFamily:"'Work Sans', sans-serif;"}}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Possimus molestiae repudiandae voluptatum dicta neque.
    </Typography>
  <Typography paragraph={true} sx={{mt:{xs:"4%"}}}>“THY KINGDOM COME” — <Typography component="span" sx={{fontStyle:"italic",color:"gray"}}>by Pastor Edward Cane </Typography>
  <Box sx={{mt:"3%"}}>
    <ReactAudioPlayer
  src={latestAudio}
  controls
  volume/>
  </Box>
   </Typography>{/*The end tag  of topography thy kingdom come */}
    </Typography>
    </Box>
  )
}
