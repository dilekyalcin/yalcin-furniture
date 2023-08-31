import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Divider, Grid } from "@mui/material";
import mobilya1 from "../../ProductCarousel/bedding.png";
import mobilya2 from "../../ProductCarousel/dinnertable.png";
import mobilya3 from "../../ProductCarousel/dresser.png";
import mobilya4 from "../../ProductCarousel/wardrobe.png";
import './swiper.css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";


const products = [
  {
    id: 1,
    name: "Bedding",
    price: "$99.99",
    imagePath: mobilya1
  },
  {
    id: 2,
    name: "Dinner Table",
    price: "$149.99",
    imagePath: mobilya2
  },
  {
    id: 3,
    name: "Dresser",
    price: "$120.99",
    imagePath: mobilya3
  },
  {
    id: 4,
    name: "Wardrobe",
    price: "$130.99",
    imagePath: mobilya4
  },
  {
    id: 1,
    name: "Bedding",
    price: "$99.99",
    imagePath: mobilya1
  },
  {
    id: 2,
    name: "Dinner Table",
    price: "$149.99",
    imagePath: mobilya2
  },
  {
    id: 3,
    name: "Dresser",
    price: "$120.99",
    imagePath: mobilya3
  },
  {
    id: 4,
    name: "Wardrobe",
    price: "$130.99",
    imagePath: mobilya4
  }
];

const items = products.map((item) => {
    return (
      <div >
      <SwiperSlide style={{ padding: "1rem 1rem"}} className='swiper-slide'>
        <Card sx={{ width: "75%", height:"auto" }} className="custom-card ">
          <CardActionArea>
            <CardMedia component="img" height="250" image={item.imagePath} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.price}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </SwiperSlide>
      </div>
    );
  });
  
  const SwiperItem = () => {
    return (
      <div>
        <h1 className="trends-header">Most Trends</h1>
        <Grid container direction="row" className='swiper-container'  sx={{ margin: "auto" }}>
          <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            slidesPerView={4}
            navigation
            autoplay={{ delay: 1000 }}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {items}
          </Swiper>
        </Grid>
        <Divider></Divider>
      </div>
    );
  };
  
  export default SwiperItem;