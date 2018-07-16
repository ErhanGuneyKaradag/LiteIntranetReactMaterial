import React,{Component} from "react";
import _ from 'lodash';
import SearchBar from '../../Parts/SearchBar';
import RehberList from './RehberList';
import Grid from "@material-ui/core/Grid";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import withStyles from "@material-ui/core/styles/withStyles";

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

class Rehber extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          kisiler: null,
        };
        this.GetKisi = this.GetKisi.bind(this);
    }


    GetKisi(anahtar) {
        fetch(`http://172.17.4.29/intapi/api/Kisi/${anahtar}`)
          .then(response => response.json())
          .then(kisiler => this.setState({ kisiler }))
          .catch(error => console.log('hata', error));
      }


  
  render() {
    const { classes } = this.props;
    console.log("nerde bunlar"+classes);
  return (
  <Grid container>
            <Grid container>
    <SearchBar onAraClick={this.GetKisi} />
    </Grid>
    <Grid container>
    <RehberList classes={classes} key="RehberListe" kisiler={this.state.kisiler} />
  </Grid> </Grid>
  );
}
}

export default withStyles(styles)(Rehber);
