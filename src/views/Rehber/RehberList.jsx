import React from 'react';
import _ from 'lodash';
import RehberListItem from './Rehber-List-Item';
import Grid from "@material-ui/core/Grid";
// core components
import GridItem from "components/Grid/GridItem.jsx";

const RehberList = props => {
  return (
    <Grid container>
      {_.map(props.kisiler, (kisi, i) => (
         <GridItem xs={3} sm={3} md={3} key={i} > 
          <RehberListItem classes={props.classes} key={i} kisi={kisi} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default RehberList;