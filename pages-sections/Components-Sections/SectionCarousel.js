import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import styles from "styles/jss/nextjs-material-kit/pages/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={10} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <a href="/img/ruokailu1.jpg" target="_blank"><img
                    src="/img/ruokailu1.jpg"
                    alt=""
                    className="slick-image"
                  /></a>
                </div>
                <div>
                  <a href="/img/ruokailu2.jpg" target="_blank"><img
                    src="/img/ruokailu2.jpg"
                    alt=""
                    className="slick-image"
                  /></a>
                </div>
                <div>
                  <a href="/img/ruokailu3.jpg" target="_blank"><img
                    src="/img/ruokailu3.jpg"
                    alt="Third slide"
                    className="slick-image"
                  /></a>
                </div>
                <div>
                  <a href="/img/kokous.jpg" target="_blank"><img
                    src="/img/kokous.jpg"
                    alt="Third slide"
                    className="slick-image"
                  /></a>
                </div>
                <div>
                  <a href="/img/huone.jpg" target="_blank"><img
                    src="/img/huone.jpg"
                    alt="Third slide"
                    className="slick-image"
                  /></a>
                </div>
                <div>
                  <a href="/img/sauna2.jpg" target="_blank"><img
                    src="/img/sauna2.jpg"
                    alt="Third slide"
                    className="slick-image"
                  /></a>
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
