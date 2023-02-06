
import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import Button from '@mui/material/Button';
import { Box } from '@mui/system'
import React from 'react'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './height-me.css'
import TextField from '@mui/material/TextField';
import { SubNavFooter } from './SubNavFooter';
import contactImg from "C:/Users/HP/Documents/THE WHOLE REACT PROJECT FOLDER/Material ui practicals/mui-one/src/pictures/pmiw630ydpe.jpg"
import { Send } from '@mui/icons-material';
export const Contact = () => {
  const ContactBackground = styled('div')({
width:"100%",
background:`linear-gradient(rgb(0,0,0,0.6), rgb(0,0,0,0.6)), url(${contactImg})`,
backgroundAttachment:"fixed",
backgroundSize:"cover",
display:'flex',
justifyContent:"center",
alignItems:"center"
  })
 
  
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
      e.target.reset()
      emailjs.sendForm('service_i6kfo77', 'template_zam46jd', form.current, 'JmxKSwhGock6yeeXx')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    
      }
  return (
    <>
  <ContactBackground className='height-me'>
    Contact Us
  </ContactBackground>
<Box sx={{width:"100%",
px:{xs:2,sm:7},pt:10,pb:15,bgcolor:"rgb(248,249,250)",
display:"flex",justifyContent:"space-between",
flexDirection:{xs:"column",sm:"row"}
}}>
<Box sx={{width:{xs:"100%",sm:"65%"},bgcolor:"rgb(248,249,250)",px:3,pt:4,pb:10}}>
  <form  ref={form} onSubmit={sendEmail}>
  <Typography color="text.secondary"sx={{fontWeight:"bold",mt:2}}>Full Name</Typography>
 <TextField name="user_name" id="outlined-basic" label="Full Name" variant="outlined" sx={{width:{xs:"100%",sm:"80%"},mt:1}} size="small" required/>
 <Typography color="text.secondary"sx={{fontWeight:"bold",mt:2}}>Email</Typography>
 <TextField name='client_email' id="outlined-basic" label="Email" variant="outlined" sx={{width:{xs:"100%",sm:"80%"},mt:1}} size="small" type="email"  required/>
 <Typography color="text.secondary"sx={{fontWeight:"bold",mt:2}}>Phone</Typography>
 <TextField name="phone_name" id="outlined-basic" label="Phone" variant="outlined" sx={{width:{xs:"100%",sm:"80%"},mt:1}} size="small" type="number"  required/>
 <textarea name="messages" style={{padding:"2% 2% 10%",marginTop:"2%",resize:"none",fontSize:"1.1rem", fontFamily:"'Work Sans', sans-serif",border:"1px solid rgba(0,0,0,0.2)",backgroundColor:"rgb(248,249,250)"}}placeholder="Type in here" className='textA'/>
 <Button variant="contained" sx={{borderRadius:"0.5rem",textTransform:"capitalize",bgcolor:"gray",mt:1}} type="submit" endIcon={<Send/>} >Send message</Button>
 </form>
</Box>
<Box sx={{width:{xs:"100%",sm:"30%"}/*,border:"1px solid red"*/,display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
  <Box sx={{width:"100%",bgcolor:"white",px:2,pt:3,pb:6}}>
    <Typography sx={{fontSize:"1.2rem"}}>Contact info</Typography>
    <Typography color="text.secondary"sx={{fontWeight:"bold",mt:2}}>Address</Typography>
    <Typography sx={{ fontFamily:"'Work Sans', sans-serif;",fontSize:"0.9rem"}} color="text.secondary">  
    First turning by the left off Olu Alabi way,
  GRA,coming from Oke-Fia,Osogbo,
  <br/>
  Osun State,Nigeria
    </Typography>

    <Typography color="text.secondary"sx={{fontWeight:"bold",mt:2}}>Phone</Typography>
    <Typography sx={{ fontFamily:"'Work Sans', sans-serif;",fontSize:"0.9rem"}} color="text.secondary">  
    +2348169344755
    </Typography>

    <Typography color="text.secondary"sx={{fontWeight:"bold",mt:2}}>Email</Typography>
    <Typography sx={{ fontFamily:"'Work Sans', sans-serif;",fontSize:"0.9rem"}} color="text.secondary">  
    prevailerchurch@gmail.com
    </Typography>
  </Box>
  <Box sx={{width:"100%",bgcolor:"white",px:2,pt:3,pb:4,mt:3}}>
  <Typography sx={{fontSize:"1.2rem"}}>Learn More</Typography>
  <Typography sx={{ fontFamily:"'Work Sans', sans-serif;",fontSize:"0.9rem"}} color="text.secondary">  
  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
   Ipsa ad iure porro mollitia architecto hic consequuntur. 
   Distinctio nisi perferendis dolore, ipsa consectetur?
   Fugiat quaerat eos qui, libero neque sed nulla.
    </Typography>
    <Button variant="contained" sx={{borderRadius:"0.5rem",textTransform:"capitalize",bgcolor:"gray",mt:1}}>Learn More</Button>
  </Box>
</Box>{/* end of box for column flex container  */}
</Box>{/* end of box that covers the whole second section of contact page that flex both the form and the contact info*/}
<SubNavFooter/>
    </>
  )
}
