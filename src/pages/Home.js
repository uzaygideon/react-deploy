import React from 'react'
import PropTypes from 'prop-types';
import { Card,Fab,Box,Typography,CardMedia,Fade}from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import imgOne from '../pictures/fifteen.jpg'
import imgTwo from '../pictures/churchveiw.jpg'
import imgThree from '../pictures/p-mike.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay,EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/effect-fade";
import { SubNavOne } from './SubNavOne';
import { SubNavTwo } from './SubNavTwo';
import { SubNavThree } from './SubNavThree';
import { SubNavFour } from './SubNavFour';
import { SubNavFooter } from './SubNavFooter';


export const Home = (props) => {
    
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
            sx={{ position: 'fixed', bottom: 16, right: 16,zIndex:"2" }}
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
     
      <Card  sx={{ width:"100%",mt:"3rem"}} id="back-to-top-anchor">
     
          <Swiper
       modules={[Navigation, Pagination, Scrollbar,A11y,Autoplay,EffectFade]}
       spaceBetween={50}
       slidesPerView={1}
       navigation
      //  scrollbar={{ draggable: true }}
       onSwiper={(swiper) => console.log(swiper)}
       onSlideChange={() => console.log('slide change')}
       autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
       effect={"fade"}
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-navigation-size":"1rem"
      }}
    >
      <SwiperSlide>
      <CardMedia
        component="img"
        alt="pic-1"
        height="470vh"
        image={imgOne}
        sx={{objectFit:"cover",position:"relative"}}/>
        <Box sx={{width:"100%",bgcolor:"rgba(0,0,0,0.5)",py:{xs:"72%",sm:"42%",md:"28%",lg:"21%",xl:"16.5%"},position:"absolute",top:"0%",color:"RGB(214 217 219)",fontSize:{xs:"2rem",sm:"3rem"},textTransform:"capitalize" ,fontWeight:"100",textAlign:"center",textShadow:"5px 5px 3px black"}}> 
        centre for <Typography component="span" sx={{color:"RGB(55 143 231)",fontSize:{xs:"2rem",sm:"3rem"}}}>change and character</Typography> building
        </Box>
      </SwiperSlide>
      <SwiperSlide>
      <CardMedia
        component="img"
        alt="pic-1"
        height="470vh"
        image={imgTwo}
        sx={{objectFit:"cover",position:"relative"}}/>
        <Box sx={{width:"100%",bgcolor:"rgba(0,0,0,0.5)",py:{xs:"72%",sm:"42%",md:"28%",lg:"21%",xl:"16.5%"},position:"absolute",top:"0%",color:"RGB(214 217 219)",fontSize:{xs:"2rem",sm:"3.2rem"},textTransform:"capitalize" ,fontWeight:"100",textAlign:"center",textShadow:"5px 5px 3px black"}}> 
        in pursiut of <Typography component="span" sx={{color:"RGB(55 143 231)",fontSize:{xs:"2rem",sm:"3.2rem"}}}>eternal</Typography> purpose
        </Box>
      </SwiperSlide>
      <SwiperSlide>
      <CardMedia
        component="img"
        alt="pic-1"
        height="470vh"
        image={imgThree}
        sx={{objectFit:"cover",position:"relative"}}/>
        <Box sx={{width:"100%",bgcolor:"rgba(0,0,0,0.5)",py:{xs:"72%",sm:"42%",md:"28%",lg:"21%",xl:"16.5%"},position:"absolute",top:"0%",color:"RGB(214 217 219)",fontSize:{xs:"2rem",sm:"3rem"},textTransform:"capitalize" ,fontWeight:"100",textAlign:"center",textShadow:"5px 5px 3px black"}}> 
        in pursiut of <Typography component="span" sx={{color:"RGB(55 143 231)",fontSize:{xs:"2rem",sm:"3rem"}}}>divine</Typography> assignment
        </Box>
      </SwiperSlide>
    </Swiper>
      </Card>
    
    {/* Another sub section which is SubNavOne of Navigation js */}
   <SubNavOne/>
    {/* Another sub section which is SubNavTwo of Navigation js */}
   <SubNavTwo/>
  {/* Another sub section which is SubNavThree of Navigation js */}
  <SubNavThree/>
  {/* Another sub section which is SubNavFour of Navigation js */}
  <SubNavFour/>
   {/* Another sub section which is SubNavFoooter of Navigation js */}
   <SubNavFooter/>
    <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  )
}
