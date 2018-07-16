import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
// @material-ui/icons
import ContentCopy from '@material-ui/icons/ContentCopy';
import Store from '@material-ui/icons/Store';
import InfoOutline from '@material-ui/icons/InfoOutline';
import Warning from '@material-ui/icons/Warning';
import DateRange from '@material-ui/icons/DateRange';
import LocalOffer from '@material-ui/icons/LocalOffer';
import Update from '@material-ui/icons/Update';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import AccessTime from '@material-ui/icons/AccessTime';
import Accessibility from '@material-ui/icons/Accessibility';
import BugReport from '@material-ui/icons/BugReport';
import Code from '@material-ui/icons/Code';
import Cloud from '@material-ui/icons/Cloud';
// core components
import GridItem from 'components/Grid/GridItem.jsx';
import Table from 'components/Table/Table.jsx';
import Tasks from 'components/Tasks/Tasks.jsx';
import CustomTabs from 'components/CustomTabs/CustomTabs.jsx';
import Danger from 'components/Typography/Danger.jsx';
import Card from 'components/Card/Card.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';
import CardIcon from 'components/Card/CardIcon.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import CardFooter from 'components/Card/CardFooter.jsx';

import { bugs, website, server } from 'variables/general';

import dashboardStyle from 'assets/jss/material-dashboard-react/views/dashboardStyle.jsx';

import Html from 'dangerously-set-inner-html';
import Moment from 'moment';

class DuyuruListItem extends React.Component {
  constructor(props) {
    super(props);

    Moment.locale('tr');
  }

  render() {
    if (!this.props) {
      return <h4>Boş</h4>;
    }
    console.log(this.props);
    return (
      <Card>
        <CardHeader color="warning">
          <h4 className="Dashboard-cardTitleWhite-205">{this.props.duyuru.baslik}</h4>
          <p className="Dashboard-cardCategoryWhite-203">
            Yayınlanma tarihi : {Moment(this.props.duyuru.basTarih).format('DD.MM.YYYY')}
          </p>
        </CardHeader>
        <CardBody>
          <Html html={this.props.duyuru.icerik.substring(0, 100)} />
        </CardBody>
      </Card>
    );
  }
}

export default withStyles(dashboardStyle)(DuyuruListItem);
