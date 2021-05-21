import { container, title } from "styles/jss/nextjs-material-kit.js";
import imagesStyles from "styles/jss/nextjs-material-kit/imagesStyles.js";

const basicsStyle = {
  sections: {
    padding: "20px",
  },
  container,
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    paddingLeft: "0px",
  },
  space50: {
    height: "50px",
    display: "block",
  },
  space70: {
    height: "70px",
    display: "block",
  },

  ...imagesStyles
};

export default basicsStyle;
