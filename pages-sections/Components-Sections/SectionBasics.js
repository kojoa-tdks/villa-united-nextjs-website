import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Primary from "components/Typography/Primary.js";

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
        <GridItem xs={13} sm ={9}>
          <div className={classes.typo}>
            <Primary>
            <p>
              Tervetuloa viettämään lomaa tai vaikka yrityksen virkistyspäivää huipputasoiseen villaan Himoksen maisemiin.
              Varusteluun kuuluu kaikki nykyajan mukavuudet ulkoporealtaasta lähtien.
            </p>
            <p>
              Villa sijaitsee rinteiden ja areenan lähietäisyydellä. Lisäksi Himokselta löytyy aktiviteetteja kaikkina vuodenaikoina jokaiseen makuun.
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
          <GridItem xs={11} sm={3}>
          <div>
            <img
              src="/img/palju2.jpeg"
              alt="..."
              className={
                classes.imgRaised +
                " " +
                classes.imgRoundedCircle +
                " " +
                classes.imgFluid
              }
            />
          </div>
          </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem xs={12}>
          <div className={classes.title}>
            
            <h2>Lähialueen palvelut</h2>
          </div>
        </GridItem>
        <GridItem xs={13} sm ={9}>
          <div className={classes.typo}>
            <Primary>
            <p>
              Tähän jotain tarinoita lähialueen palveluista?
            </p>
            </Primary>
          </div>
        </GridItem>
          <GridItem xs={11} sm={3}>
          </GridItem>
      </GridContainer>
      </div>
    </div>
    </div>
    
  );
}
