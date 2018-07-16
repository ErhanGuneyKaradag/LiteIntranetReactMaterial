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

import CircularProgress from '@material-ui/core/CircularProgress';
import purple from '@material-ui/core/colors/purple';
import dashboardStyle from 'assets/jss/material-dashboard-react/views/dashboardStyle.jsx';

import DuyuruListItem from './Duyuru-List-Item.jsx';

class DuyuruList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { duyurular: null };
  }

  componentDidMount = () => {
    fetch('http://172.17.4.29/intapi/api/Duyuru?basT=01.06.2018&bitT=06.07.2018')
      .then(response => response.json())
      .then(duyurular => this.setState({ duyurular }))
      .catch(error => console.log('hata', error));
  };

  render() {
    if (!this.state.duyurular) {
      return <CircularProgress style={{ color: purple[500], margin: 5 }} thickness={7} />;
    }
    return this.state.duyurular.map((duyuru, index) => (
      <DuyuruListItem key={this.props.key + '_dli' + index} duyuru={duyuru} />
    ));
  }
}

export default withStyles(dashboardStyle)(DuyuruList);
