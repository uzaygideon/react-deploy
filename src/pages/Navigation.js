
import * as React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import './Active.css'
import {AppBar,Box} from '@mui/material';
import {Menu,List,ListItem,ListItemButton,ListItemText } from '@mui/material';
import {Toolbar,Typography,Button,Avatar,Tooltip,Divider,IconButton} from '@mui/material';
import {  KeyboardArrowDown } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu'
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import {CardMedia} from '@mui/material';
import logoImg from "C:/Users/HP/Documents/THE WHOLE REACT PROJECT FOLDER/Material ui practicals/mui-one/src/pictures/PCRMI Black (1).png"
import { Outlet, Link } from "react-router-dom";
import {Link as MenuLink} from 'react-router-dom'

const drawerWidth = 240;

export function Navigat(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const container = window !== undefined ? () => window().document.body : undefined;
  const [activeTwo,setActiveTwo]=useState("/")
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center'}}>
        <CardMedia
            component="img"
            image={logoImg}
            height="30vh"
            sx={{width:"50%",my:2}}
            />
      <Divider />
      <List >
          <ListItem disablePadding >
            <ListItemButton sx={{textAlign:"center",color: "rgb(90,162,235)",}}  component={MenuLink} to='/'>
              <ListItemText    primaryTypographyProps={{fontFamily:"'Work Sans', sans-serif;"}}
              onClick={()=>setActiveTwo('/')} className={activeTwo==='/'?'link-1':'link-2'} 
              primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{textAlign:"center",color: "rgb(90,162,235)"}} component={MenuLink} to='/SopOnWeb' >
              <ListItemText  primaryTypographyProps={{fontFamily:"'Work Sans', sans-serif;"}} 
              onClick={()=>setActiveTwo('SopOnWeb')} className={activeTwo==='SopOnWeb'?'link-1':'link-2'} 
               primary="SOP On Web" />
            </ListItemButton>
          </ListItem>
        </List>
      <Divider />
        <List >
          <ListItem disablePadding>
            <ListItemButton sx={{textAlign:"center",color: "rgb(90,162,235)"}} component={MenuLink} to='/Contact'>
            <ListItemText  primaryTypographyProps={{fontFamily:"'Work Sans', sans-serif;"}}  
          onClick={()=>setActiveTwo('Contact')} className={activeTwo==='Contact'?'link-1':'link-2'} 
            primary="Contact" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{textAlign:"center",color: "rgb(90,162,235)"}} component={MenuLink} to='/About'>
              <ListItemText primaryTypographyProps={{fontFamily:"'Work Sans', sans-serif;"}} 
              onClick={()=>setActiveTwo('About')} className={activeTwo==='About'?'link-1':'link-2'} 
               primary="About" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
    </Box>
  );

   /* Drop down declaration*/ 
   const [anchorEl, setAnchorEl] = React.useState(null);
   const open = Boolean(anchorEl);
   const handleClick = (event) => {
     setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
     setAnchorEl(null);
   };
   /* End of Drop down declaration*/ 
 const [active,setActive]=useState("/")
  return (
    <>
    <Box sx={{ display: 'flex'}}>
      <AppBar sx={{backgroundColor:"rgb(255,255,255)" }} >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon sx={{  color: "rgb(90,162,235)"}}/>
            <CardMedia
            component="img"
            image={logoImg}
            height="30vh"
            sx={{width:"50%",display:"flex",flexGrow:"1"}}
            />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' },color:"rgb(183,103,151)" }}
          >
            <CardMedia
            component="img"
            image={logoImg}
            height="30vh"
            sx={{width:{sm:"30%",md:"20%",lg:"19%",xl:"14%"}}}
            />
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' },mr:"8%"  }}>   
        <Button variant="text" sx={{fontWeight:"bold",fontFamily:"'oswald'"}}>
        <Link to="/"  onClick={()=>setActive('/')} className={active==='/'?'link-1':'link-2'} style={{ textDecoration: 'none' }}>Home</Link>
          </Button>
      <Button variant="text"sx={{fontWeight:"bold",fontFamily:"'oswald'"}}>
      <Link to="SopOnWeb" onClick={()=>setActive('SopOnWeb')} className={active==='SopOnWeb'?'link-1':'link-2'}  style={{ textDecoration: 'none'}}>  SOP on Web</Link>
        </Button>
      <Tooltip title="Click on sermon for more options">
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
      <Button variant="text" endIcon={< KeyboardArrowDown />}  sx={{color:"RGB(55 143 231)",fontWeight:"bold",fontFamily:"'oswald'"}}>
        Sermon
        </Button>
        </IconButton>
        </Tooltip>
        <Button variant="text" sx={{fontWeight:"bold",fontFamily:"'oswald'"}}>
        <Link to="Contact" onClick={()=>setActive('Contact')} className={active==='Contact'?'link-1':'link-2'}style={{ textDecoration: 'none'}}> Contact</Link>
        </Button>
        <Button variant="text" sx={{fontWeight:"bold",fontFamily:"'oswald'"}}>
        <Link to="About" onClick={()=>setActive('About')} className={active==='About'?'link-1':'link-2'} style={{ textDecoration: 'none'}}>About</Link>
        </Button>
        
          </Box>
        <Menu
       anchorEl={anchorEl}
       id="account-menu"
       open={open}
       onClose={handleClose}
       onClick={handleClose}
       PaperProps={{
         elevation: 0,
         sx: {
           overflow: 'visible',
           filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
           mt: 1.5,
           '& .MuiAvatar-root': {
             width: 32,
             height: 32,
             ml: -0.5,
             mr: 1,
           },
           '&:before': {
             content: '""',
             display: 'block',
             position: 'absolute',
             top: 0,
             right: 14,
             width: 10,
             height: 10,
             bgcolor: 'background.paper',
             transform: 'translateY(-50%) rotate(45deg)',
             zIndex: 0,
           },
         },
       }}
       transformOrigin={{ horizontal: 'right', vertical: 'top' }}
       anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
        
        <MenuItem>
          <Avatar sx={{bgcolor:"lightblue",fontSize:'0.7rem'}}> MOC</Avatar> Moment Of Change
        </MenuItem>
        <MenuItem>
        <Avatar sx={{bgcolor:"orange",fontSize:'0.7rem'}}> PDN</Avatar> Purpose And Destiny Network
        </MenuItem>
        <Divider />
        <MenuItem>
       <Avatar sx={{bgcolor:"purple",fontSize:'0.7rem'}}> SOP</Avatar>School Of Purpose Live
        </MenuItem>
        <MenuItem>
        <Avatar sx={{bgcolor:"lightblue",fontSize:'0.6rem'}}> SOPA</Avatar>School Of Purpose On Air Shorts
        </MenuItem>
        
        </Menu>
        {/* end of dropdown button*/}
      
        </Toolbar>
      </AppBar>
      </Box>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Outlet />
    </>
  );
}
Navigat.propTypes = {
  
  window: PropTypes.func,
};




