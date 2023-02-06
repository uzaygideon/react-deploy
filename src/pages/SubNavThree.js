import { Box } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {  EastOutlined,EmojiObjectsOutlined, RecordVoiceOverOutlined, SettingsInputAntennaOutlined, Telegram } from '@mui/icons-material';



export const SubNavThree = () => {
  return (
    <Box sx={{width:"100%",bgcolor:"rgb(248,249,250)", px:"8%",pt:"5%",pb:"7%"}}>
          <Box
        sx={{
          display: 'flex',
          flexDirection: {xs:"column",sm:"row"},
          justifyContent:"space-around",
        p:1,
          m: 1,
          bgcolor: 'rgb(248,249,250)',
          borderRadius: 1,
        }}
      >
       <Card sx={{ width:{xs:"100%",sm:"48%"},pt:2.5,pb:3,bgcolor:"rgb(248,249,250)",mb:{xs:2,sm:0}}}>
      <CardContent sx={{textAlign:"center"}}>
          <Telegram sx={{color:"RGB(91 160 230)",fontSize:"5rem"}}/> 
        <Typography sx={{ color:"rgba(0,0,0,0.8)",textTransform:"uppercase",fontFamily:"'Roboto'" ,fontSize:"1.2rem" }} >
          our mission
        </Typography>
        <Typography color="text.secondary" sx={{mt:1,fontFamily:"'Work Sans', sans-serif;"}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Obcaecati reprehenderit explicabo quos fugit vitae dolorum.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" endIcon={<EastOutlined/>} sx={{position:"relative",left:"50%",transform:"translate(-50%)"}}>Read more</Button>
      </CardActions>
    </Card>
    {/* end of the first card tag */}
    <Card sx={{ width:{xs:"100%",sm:"48%"},pt:2.5,pb:3,bgcolor:"rgb(248,249,250)"}}>
      <CardContent sx={{textAlign:"center"}}>
          <EmojiObjectsOutlined sx={{color:"RGB(91 160 230)",fontSize:"5rem"}}/> 
        <Typography sx={{ color:"rgba(0,0,0,0.8)",textTransform:"uppercase",fontFamily:"'Roboto'" ,fontSize:"1.2rem" }} >
          testimonies
        </Typography>
        <Typography color="text.secondary" sx={{mt:1,fontFamily:"'Work Sans', sans-serif;"}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Obcaecati reprehenderit explicabo quos fugit vitae dolorum.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" endIcon={<EastOutlined/>} sx={{position:"relative",left:"50%",transform:"translate(-50%)"}}>Read more</Button>
      </CardActions>
    </Card>
    {/* end of the second card tag */}
  

      </Box>  {/* end of the firstflex box tag */}

      <Box
        sx={{
          display: 'flex',
          flexDirection:{xs:"column",sm:"row"},
          justifyContent:"space-around",
        p:1,
          m: 1,
          bgcolor: 'rgb(248,249,250)',
          borderRadius: 1,
        }}
      >
       <Card sx={{ width:{xs:"100%",sm:"48%"},pt:2.5,pb:3,bgcolor:"rgb(248,249,250)",mb:{xs:2,sm:0}}}>
      <CardContent sx={{textAlign:"center"}}>
          <RecordVoiceOverOutlined sx={{color:"RGB(91 160 230)",fontSize:"5rem"}}/> 
        <Typography sx={{ color:"rgba(0,0,0,0.8)",textTransform:"uppercase",fontFamily:"'Roboto'" ,fontSize:"1.2rem" }} >
          listen to our sermons
        </Typography>
        <Typography color="text.secondary" sx={{mt:1,fontFamily:"'Work Sans', sans-serif;"}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Obcaecati reprehenderit explicabo quos fugit vitae dolorum.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" endIcon={<EastOutlined/>} sx={{position:"relative",left:"50%",transform:"translate(-50%)"}}>Read more</Button>
      </CardActions>
    </Card>
    {/* end of the third card tag */}
    <Card sx={{ width:{xs:"100%",sm:"48%"},pt:2.5,pb:3,bgcolor:"rgb(248,249,250)"}}>
      <CardContent sx={{textAlign:"center"}}>
          <SettingsInputAntennaOutlined sx={{color:"RGB(91 160 230)",fontSize:"5rem"}}/> 
        <Typography sx={{ color:"rgba(0,0,0,0.8)",textTransform:"uppercase",fontFamily:"'Roboto'" ,fontSize:"1.2rem" }} >
          school of purpose on web
        </Typography>
        <Typography color="text.secondary" sx={{mt:1,fontFamily:"'Work Sans', sans-serif;"}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Obcaecati reprehenderit explicabo quos fugit vitae dolorum.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" endIcon={<EastOutlined/>} sx={{position:"relative",left:"50%",transform:"translate(-50%)"}}>Read more</Button>
      </CardActions>
    </Card>{/* end of the fourth card tag */}
    </Box>


        </Box> 
        
  )
}
