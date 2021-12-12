import { ClassNames } from "@emotion/react";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./Carousel.module.css";

function Carousell() {
  return (
      
          
    <div  className={styles.clear}>
      <Carousel className={styles.carouselContainer} autoPlay showThumbs={false}>
        <div >
          <img 
            alt=""
            src="https://images.pexels.com/photos/5569968/pexels-photo-5569968.jpeg"
          />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img 
            alt=""
            src="https://images.pexels.com/photos/5569968/pexels-photo-5569968.jpeg"
          />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img 
            alt=""
            src="https://images.pexels.com/photos/5569968/pexels-photo-5569968.jpeg"
          />
          <p className="legend">Legend 1</p>
        </div>
      </Carousel>
    
    </div>
  );
}

export default Carousell;
