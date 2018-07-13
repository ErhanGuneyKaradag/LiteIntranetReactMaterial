import React from 'react';
import Vesikalik from '../../Parts/Vesikalik';

const RehberListItem = props => {
  const { kisi } = props;
  const { classes } = this.props;
  return (

    <Grid container>
    <GridItem xs={12} sm={12} md={4}>
     <Card profile>
       <CardAvatar profile>
         <a href="#pablo" onClick={e => e.preventDefault()}>
         <Vesikalik key={kisi.KOD} kod={kisi.KOD} />
         </a>
       </CardAvatar>
       <CardBody profile>
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
 </Grid>

  );
};

export default RehberListItem;