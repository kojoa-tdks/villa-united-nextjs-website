import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Primary from "components/Typography/Primary.js";
import Hidden from '@material-ui/core/Hidden';

import styles from "styles/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionBasics() {
  const classes = useStyles();

  React.useEffect(() => {});

  return (
    <div>
      <div className={classes.sections}>
        <div className={classes.container}>
      <GridContainer>
        <GridItem xs={12}>
          <div className={classes.title}>
            
            <h2>Villa United</h2>
          </div>
        </GridItem>
        <GridItem xs={11} sm={5}>
          <div>
            <img
              src="/img/himos-villa-united-layout.png"
              className={
                classes.imgRaised +
                " " +
                classes.imgRounded +
                " " +
                classes.imgFluid
              }
            />
          </div>
        </GridItem>
        
        <GridItem xs={13} sm ={7}>
          <div className={classes.typo}>
            <br/>
            <Primary>
            <p>
              Tervetuloa viettämään lomaa tai vaikka yrityksen virkistyspäivää huipputasoiseen villaan Himoksen maisemiin.
              Varusteluun kuuluu kaikki nykyajan mukavuudet ulkoporealtaasta lähtien.
            </p>
            <p>
              Rakentaminen on aloitettu kesällä 2021. Varauksia voi jo tehdä keväälle 2022.
            </p>
            <p>
              Varaukset: Antti Saxlin...
            </p>
            </Primary>
          </div>
        </GridItem>

        <GridItem xs={12} sm={12}>
          <div className={classes.space70}/>
        </GridItem>

        <GridItem xs={12} sm={12}>
          <div className={classes.title}>
            
            <h2>Sijainti</h2>
          </div>
        </GridItem>
        <GridItem xs={12} sm ={5}>
        <div className={classes.typo}>
            <Primary>
            <br/>
            <p>
              Villa sijaitsee rinteiden ja areenan lähietäisyydellä. Lisäksi Himokselta löytyy aktiviteetteja kaikkina vuodenaikoina jokaiseen makuun.
            </p>
            </Primary>
          </div>
        </GridItem>
        <GridItem xs={12} sm ={7}>
        <div>
        <a href=""><img
              src="/img/himoskartta.png"
              className={
                classes.imgRaised +
                " " +
                classes.imgRounded +
                " " +
                classes.imgFluid
              }
            /></a>
           <div className={classes.typo}>
            <Primary>
            <br/>
            <p>
              Klikkaa kuvaa ja vilkaise tarkempi sijainti <a href="">Google Mapsista </a> 
              <Hidden smUp>tai katso ajo-ohjeet oheisesta videosta</Hidden>
            </p>
            </Primary>
          </div>
          </div>
        </GridItem>
      </GridContainer>
      </div>
    </div>
    </div>
    
  );
}
