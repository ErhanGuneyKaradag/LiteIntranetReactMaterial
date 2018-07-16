import React from "react";
import Vesikalik from '../../Parts/Vesikalik';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

  function RehberListItem(props) {

  const { kisi } = props;
  const { classes } = props;

console.log("klaslarım"+props.classes);
  return (

    <GridItem >
     <Card profile >
       <CardAvatar profile >
         <a href="#pablo" onClick={e => e.preventDefault()}>
         <Vesikalik key={kisi.KOD} kod={kisi.KOD} />
         </a>
       </CardAvatar>
       <CardBody profile >
         <h6 className={classes.cardCategory}>{kisi.FİİLİ_GÖREV_YERİ}</h6>
         <h4 className={classes.cardTitle}> {kisi.PERSONEL_AD} {kisi.SOYAD}</h4>
         <p className={classes.description}>
         {kisi.İş_Tel}
         </p>
         <Button color="primary" round>
           Follow
         </Button>
       </CardBody>
     </Card>
  </GridItem>

  );
};

export default RehberListItem;