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
                  <a href="/img/terassi2.jpg" target="_blank"><img
                    src="/img/terassi2.jpg"
                    alt=""
                    className="slick-image"
                  /></a>
                </div>
                <div>
                  <a href="/img/ruokailu1.jpg" target="_blank"><img
                    src="/img/ruokailu1.jpg"
                    alt=""
                    className="slick-image"
                  /></a>
                </div>
                <div>
                  <a href="/img/ruokailu3.jpg" target="_blank"><img
                    src="/img/ruokailu3.jpg"
                    alt=""
                    className="slick-image"
                  /></a>
                </div>
                <div>
                  <a href="/img/keittio.jpg" target="_blank"><img
                    src="/img/keittio.jpg"
                    alt=""
                    className="slick-image"
                  /></a>
                </div>
                <div>
                  <a href="/img/kokous.jpg" target="_blank"><img
                    src="/img/kokous.jpg"
                    alt=""
                    className="slick-image"
                  /></a>
                </div>
                <div>
                  <a href="/img/porras.jpg" target="_blank"><img
                    src="/img/porras.jpg"
                    alt=""
                    className="slick-image"
                  /></a>
                </div>
                <div>
                  <a href="/img/huone2.jpg" target="_blank"><img
                    src="/img/huone2.jpg"
                    alt=""
                    className="slick-image"
                  /></a>
                </div>
                <div>
                  <a href="/img/huone3.jpg" target="_blank"><img
                    src="/img/huone3.jpg"
                    alt=""
                    className="slick-image"
                  /></a>
                </div>
                <div>
                  <a href="/img/sauna2.jpg" target="_blank"><img
                    src="/img/sauna2.jpg"
                    alt=""
                    className="slick-image"
                  /></a>
                </div>
                <div>
                  <a href="/img/ulkopuoli.jpg" target="_blank"><img
                    src="/img/ulkopuoli.jpg"
                    alt=""
                    className="slick-image"
                  /></a>
                </div>
                <div>
                  <a href="/img/rinne.jpg" target="_blank"><img
                    src="/img/rinne.jpg"
                    alt=""
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
