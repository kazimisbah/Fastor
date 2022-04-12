import React from "react";
import image1 from '../../asstes/image1.webp'
import image2 from '../../asstes/image2.jpg'
import image3 from '../../asstes/image3.jpg'


import { Carousel } from "react-responsive-carousel";

const CarouselPage =  () => (
  <Carousel autoPlay interval="2000" transitionTime="2000" showThumbs={false} 
  >
    <div>
      <img style={{height:200,borderRadius:8}} alt="" src={image1}/>
    </div>
    <div>
    <img style={{height:200,borderRadius:8}} alt="" src={image3}/>
    </div>
    <div>
    <img style={{height:200,borderRadius:8}} alt="" src={image2}/>
    </div>
   

  </Carousel>
);

export default CarouselPage