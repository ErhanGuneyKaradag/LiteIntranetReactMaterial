import React,{Component} from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";


import avatar from "assets/img/faces/marc.jpg";

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
    }


    GetKisi(anahtar) {
        fetch(`http://172.17.4.29/intapi/api/Kisi/${anahtar}`)
          .then(response => response.json())
          .then(kisiler => this.setState({ kisiler }))
          .catch(error => console.log('hata', error));
      }


  
  render() {
    const { classes } = this.props;
  return (
    <div>
    
    </div>
  );
}
}

export default withStyles(styles)(Rehber);
