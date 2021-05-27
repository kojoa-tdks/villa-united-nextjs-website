import dynamic from 'next/dynamic';
import styles from "styles/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

const useStyles = makeStyles(styles);

const FullCalendar = dynamic(() => import('components/FullCalendar/FullCalendar.js'), {
    ssr: false
});

const SectionCalendar = () => {
    
    const classes = useStyles();
    
    return (
    <div>
      <div className={classes.sections}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12}>
              <div className={classes.title}>
                <h2 id="reservations">Varaukset</h2>
              </div>
            </GridItem>
          </GridContainer>
          <FullCalendar />
        </div>
      </div>
    </div>
    );
}

export default SectionCalendar;