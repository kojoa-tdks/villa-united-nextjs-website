import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

import styles from "styles/jss/nextjs-material-kit/pages/componentsSections/tabsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionTabs() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
        <div>
          <GridContainer>
           <center>
            <GridItem xs={12} sm={12} md={8}>
              <CustomTabs
                headerColor="primary"
                tabs={[
                  {
                    tabName: "Mars Finland Oy",
                    tabContent: (
                      <p className={classes.textCenter} style={{fontStyle:'italic'}}>
                        vuokrasimme Villa Unitedia työporukkamme tiimikokoukseen toukokuun puolessa välissä 2022 – taisimme myös olla uudenuutukaisen mökin ihka ensimmäiset vieraat!
                        Kokemus oli tosi miellyttävä; kaikki toimi alusta alkaen hienosti ja mutkattomasti -  ja mökkihän on kaikkine fasiliteetteineen ja tiloineeen todella upea ja palvelee isoakin porukkaa mainiosti.
                        <br/><br/>
                        Myös maantieteellinen sijainti on mainio, mahdollistaen kohtuulliset matkat mistä päin Suomea vain, joten toimi erinomaisesti tässäkin mielessä meidän tiimillemme.
                        Reissumme & kokouksemme onnistui täällä upeasti joten voin vilpittömästi suositella tätä muillekin!
                      </p>
                    ),
                  }
                ]}
              />
            </GridItem>
           </center>
          </GridContainer>
      </div>
    </div>
  );
}
