import React from 'react'
import { Box,Divider,Typography } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import swiperImgOne  from 'C:/Users/HP/Documents/THE WHOLE REACT PROJECT FOLDER/Material ui practicals/mui-one/src/pictures/youtubve.jpg'
import swiperImgTwo from "C:/Users/HP/Documents/THE WHOLE REACT PROJECT FOLDER/Material ui practicals/mui-one/src/pictures/IMG-20220807-WA0001.jpg"
import swiperImgThree from "C:/Users/HP/Documents/THE WHOLE REACT PROJECT FOLDER/Material ui practicals/mui-one/src/pictures/IMG-20220911-WA0011.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/effect-fade";


export const SubNavFour = () => {
  return (
    <Box sx={{width:"100%",bgcolor:"rgb(255,255,255)", px:"8%",pt:"6%",pb:"4%"}}>
        <Typography variant='h4' sx={{textAlign:"center",textTransform:"capitalize"}}>
        recent events
        <Divider sx={{maxWidth:{xs:"16%",md:"7.5%",lg:"8%"},border:"1px solid rgba(227, 167, 20,0.4)",position:"relative",left:"50%",transform:"translate(-45%)"}} textAlign="center" />
    </Typography >
<Box sx={{width:"100%",bgcolor:"rgb(255,255,255)",py:"2%",my:3}}>
<Swiper
       modules={[Navigation, Pagination, Scrollbar,A11y,Autoplay]}
       spaceBetween={42}
       slidesPerView={3}
       navigation
       onSwiper={(swiper) => console.log(swiper)}
       onSlideChange={() => console.log('slide change')}
       autoplay={{
        delay: 5000,
        disableOnInteraction: false
        
      }}
      style={{
        "--swiper-navigation-color": "black",
        "--swiper-navigation-size":"1rem"
      }}
      breakpoints={{
        // when window width is >= 640px
        0: {
          slidesPerView: 1
        },
        // when window width is >= 768px
        601: {
          slidesPerView: 2
        },
        901: {
          slidesPerView: 3
        }
      }}
    >
          <SwiperSlide>
<Card sx={{ maxWidth: 345 ,pb:3}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          image={swiperImgOne}
          alt="school live"
          sx={{objectFit:"cover"}}
        />
        <CardContent sx={{lineHeight:"1.7"}}>
          <Typography sx={{color:"RGB(91 160 230)",fontSize:"1.1rem",textTransform:'capitalize',fontWeight:"100"}}>
            Join the school of purpose live
          </Typography>
          <Typography sx={{color:"text.secondary",fontSize:"0.9rem"}}>
            January 22 , 2023 ---  By <Typography component="span" sx={{color:"rgba(91,160,230,0.7)",fontStyle:"italic"}}>pst. Diran Aimati</Typography>
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{fontFamily:"'Work Sans', sans-serif;",mt:2,lineHeight:"1.8"}}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </SwiperSlide>

    <SwiperSlide>
<Card sx={{ maxWidth: 345 ,pb:3}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          image={swiperImgTwo}
          alt="school live"
          sx={{objectFit:"cover"}}
        />
        <CardContent sx={{lineHeight:"1.7"}}>
          <Typography sx={{color:"RGB(91 160 230)",fontSize:"1.1rem",textTransform:'capitalize',fontWeight:"100"}}>
            TPAC building accomplishments
          </Typography>
          <Typography sx={{color:"text.secondary",fontSize:"0.9rem"}}>
            January 22 , 2023 ---  By <Typography component="span" sx={{color:"rgba(91,160,230,0.7)",fontStyle:"italic"}}>pst.Helen Aimati</Typography>
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{fontFamily:"'Work Sans', sans-serif;",mt:2,lineHeight:"1.8"}}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </SwiperSlide>

    <SwiperSlide>
<Card sx={{ maxWidth: 345 ,pb:3}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          image={swiperImgThree}
          alt="school live"
          sx={{objectFit:"cover"}}
        />
        <CardContent sx={{lineHeight:"1.7"}}>
          <Typography sx={{color:"RGB(91 160 230)",fontSize:"1.1rem",textTransform:'capitalize',fontWeight:"100"}}>
            purpose and destiny network
          </Typography>
          <Typography sx={{color:"text.secondary",fontSize:"0.9rem"}}>
            January 22 , 2023 ---  By <Typography component="span" sx={{color:"rgba(91,160,230,0.7)",fontStyle:"italic"}}>pst. Diran Aimati</Typography>
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{fontFamily:"'Work Sans', sans-serif;",mt:2,lineHeight:"1.8"}}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </SwiperSlide>
    <SwiperSlide>
<Card sx={{ maxWidth: 345 ,pb:3}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          image={swiperImgOne}
          alt="school live"
          sx={{objectFit:"cover"}}
        />
        <CardContent sx={{lineHeight:"1.7"}}>
          <Typography sx={{color:"RGB(91 160 230)",fontSize:"1.1rem",textTransform:'capitalize',fontWeight:"100"}}>
            Join the school of purpose live
          </Typography>
          <Typography sx={{color:"text.secondary",fontSize:"0.9rem"}}>
            January 22 , 2023 ---  By <Typography component="span" sx={{color:"rgba(91,160,230,0.7)",fontStyle:"italic"}}>pst. Diran Aimati</Typography>
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{fontFamily:"'Work Sans', sans-serif;",mt:2,lineHeight:"1.8"}}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </SwiperSlide>
    <SwiperSlide>
<Card sx={{ maxWidth: 345 ,pb:3}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          image={swiperImgTwo}
          alt="school live"
          sx={{objectFit:"cover"}}
        />
        <CardContent sx={{lineHeight:"1.7"}}>
          <Typography sx={{color:"RGB(91 160 230)",fontSize:"1.1rem",textTransform:'capitalize',fontWeight:"100"}}>
            TPAC building accomplishments
          </Typography>
          <Typography sx={{color:"text.secondary",fontSize:"0.9rem"}}>
            January 22 , 2023 ---  By <Typography component="span" sx={{color:"rgba(91,160,230,0.7)",fontStyle:"italic"}}>pst.Helen Aimati</Typography>
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{fontFamily:"'Work Sans', sans-serif;",mt:2,lineHeight:"1.8"}}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </SwiperSlide>

    <SwiperSlide>
<Card sx={{ maxWidth: 345 ,pb:3}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          image={swiperImgThree}
          alt="school live"
          sx={{objectFit:"cover"}}
        />
        <CardContent sx={{lineHeight:"1.7"}}>
          <Typography sx={{color:"RGB(91 160 230)",fontSize:"1.1rem",textTransform:'capitalize',fontWeight:"100"}}>
            purpose and destiny network
          </Typography>
          <Typography sx={{color:"text.secondary",fontSize:"0.9rem"}}>
            January 22 , 2023 ---  By <Typography component="span" sx={{color:"rgba(91,160,230,0.7)",fontStyle:"italic"}}>pst. Diran Aimati</Typography>
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{fontFamily:"'Work Sans', sans-serif;",mt:2,lineHeight:"1.8"}}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </SwiperSlide>


    </Swiper>

</Box>

    </Box>
  )
}
