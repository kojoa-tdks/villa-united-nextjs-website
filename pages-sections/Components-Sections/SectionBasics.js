import React, { useState, useRef } from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Primary from "components/Typography/Primary.js";
import Hidden from '@material-ui/core/Hidden';

import styles from "styles/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";

import ReactPlayer from 'react-player';

const useStyles = makeStyles(styles);

export default function SectionBasics() {
  const classes = useStyles();

  const [seekBarHidden, setSeekBarHidden] = useState(true);
  const [videoEnded, setVideoEnded] = useState(false);
  const playerRef = useRef();


  React.useEffect(() => {});

  return (
    <div>
      <div className={classes.sections}>
        <div className={classes.container}>
      <GridContainer>
        <GridItem xs={12}>
          <div className={classes.title}>
            
            <h2>Himos Villa United</h2>
          </div>
        </GridItem>
        <GridItem xs={11} sm={5}>
          <div>
            <img
              src="/img/terassi.jpg"
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
        
        <GridItem xs={12} sm ={7}>
          <div className={classes.typo}>
            <Primary>
            <p>
            Jos etsit yrityksellesi, perheellesi tai kaveriporukalle isompaa ja laadukkaampaa mökkiä Himokselta, niin
            keväällä 2022 valmistuva Himos Villa United täyttää vaativammatkin toiveet rennolle lomalle,
            henkilöstötilaisuudelle tai asiakastapahtumalle. 
            </p>
            <p>
            Himos Villa Unitedin seitsemän makuuhuonetta ja
            neljätoista sänkypaikkaa mahdollistaa isommankin porukan majoittumisen ja tämän lisäksi on vielä lisätilaa
            perheen pienimpien matkasängyille. Panoraamasauna ja parveketerassille upotettu poreamme ovat
            ylpeytemme, toivottavasti sinäkin tulet niitä testaamaan! Meille tulee myös yli kymmenen hengen
            kokoustila erilaisiin yritystilaisuuksiin, eli kokoustaminen ja rento illanvietto onnistuu saman katon alla.
            </p>
            <p>
            Huvilan rakennustyöt aloitettiin keväällä 2021 ja Himos Villa United on valmis ottamaan vastaan
            ensimmäiset vieraansa huhtikuussa 2022. Otamme jo nyt varauksia vastaan ensi keväälle. Annamme
            mielellämme lisätietoja alla olevista yhteystiedoista. Muista myös seurata Himos Villa Unitedin
            rakentumista somekanavistamme!
            </p>
            <h3>Vuokraukset ja lisätiedot</h3>
            <p>Antti Saxlin<br/>
            040-7523753<br/>
            <a href="mailto:antti.saxlin@saxcon.fi">antti.saxlin@saxcon.fi</a></p>
            </Primary>
          </div>
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
            Himos Villa United sijaitsee osoitteessa Himoslehdontie 14, 42100 Jämsä. Naapurissamme sijaitseva
            vesitorni on Himoksen maamerkki, mikä näkyy aina valtatielle asti. Huvilamme sijaitsee rinteen
            välittömässä läheisyydessä, eli mökin pihassa voi laittaa sukset jalkaan ja laskea suoraan rinteeseen. Himos
            Arena ja laskettelukeskuksen palvelut ovat kävelymatkan päässä.
            </p>
            </Primary>
          </div>
        </GridItem>
        <GridItem xs={12} sm ={7}>
        <div>
        <a href="https://www.google.com/maps/place/61%C2%B052'48.3%22N+25%C2%B018'30.9%22E/@61.8817429,25.2996062,1314m/data=!3m1!1e3!4m6!3m5!1s0x0:0x0!7e2!8m2!3d61.8800901!4d25.308577"><img
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
              Klikkaa kuvaa ja vilkaise tarkempi sijainti <a href="https://www.google.com/maps/place/61%C2%B052'48.3%22N+25%C2%B018'30.9%22E/@61.8817429,25.2996062,1314m/data=!3m1!1e3!4m6!3m5!1s0x0:0x0!7e2!8m2!3d61.8800901!4d25.308577">Google Mapsista </a> 
              <Hidden smUp>tai katso ajo-ohjeet oheisesta videosta</Hidden>
            </p>
            </Primary>
          </div>
          </div>
        </GridItem>
        <Hidden smUp>
        <GridItem xs={12}>
          <div>
            <ReactPlayer 
              url="himos_drive.mp4" 
              width='100%' 
              height='100%' 
              playing
              playIcon={<button>Katso video</button>}
              light='/img/video_light.png'
              onPlay={() => {window.scrollBy(0, 600); setSeekBarHidden(false);}}
              onEnded={() => {setVideoEnded(true)}}
              ref={playerRef}
              />
          </div>
        </GridItem>
        <GridItem>

        <center><button onClick={()=>{playerRef.current.seekTo(0.0); setVideoEnded(false)}} hidden={!videoEnded}>Katso uudestaan</button></center>

        </GridItem>
        </Hidden>
      </GridContainer>
      </div>
    </div>
    </div>
    
  );
}
