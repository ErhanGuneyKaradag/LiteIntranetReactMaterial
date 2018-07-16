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
import CardAvatar from 'components/Card/CardAvatar.jsx';
import CardIcon from 'components/Card/CardIcon.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import CardFooter from 'components/Card/CardFooter.jsx';

import { bugs, website, server } from 'variables/general';
import Moment from 'moment';

import CircularProgress from '@material-ui/core/CircularProgress';
import purple from '@material-ui/core/colors/purple';
import dashboardStyle from 'assets/jss/material-dashboard-react/views/dashboardStyle.jsx';
import Vesikalik from 'Parts/Vesikalik.jsx';

class DogumGunu extends React.Component {
  constructor(props) {
    super(props);
    Moment.locale('tr');
    this.state = { doganlar: null };
  }

  componentDidMount = () => {
    /*console.log(
        'http://172.17.4.29/intapi/api/Kisi?gun=' +
          Moment().format('DD') +
          '&ay=' +
          +Moment().format('MM'),
      );*/

    fetch(
      'http://172.17.4.29/intapi/api/Kisi?gun=' +
        Moment().format('DD') +
        '&ay=' +
        +Moment().format('MM'),
    )
      .then(response => response.json())
      .then(doganlar => this.setState({ doganlar }))
      .catch(error => console.log('hata', error));
  };

  render() {
    if (!this.state.doganlar) {
      return <CircularProgress style={{ color: purple[500], margin: 5 }} thickness={7} />;
    }
    // console.log(this.state.doganlar);
    return this.state.doganlar.map((dogan, index) => (
      <div key={'__dogan' + dogan.KOD} className="m-widget4__item">
        <div className="m-widget4__img m-widget4__img--logo">
          <CardAvatar>
            <Vesikalik key={'dogan' + dogan.KOD} kod={dogan.KOD} />
          </CardAvatar>
        </div>
        <div className="m-widget4__info">
          <span className="m-widget4__title">
            {dogan.PERSONEL_AD} {dogan.SOYAD}
          </span>
          <br />
          <span className="m-widget4__sub">{dogan.İş_Tel}</span>
        </div>
        <span className="m-widget4__ext">
          <span className="m-widget4__number m--font-brand">X</span>
        </span>
      </div>
    ));
  }
}

export default DogumGunu;
