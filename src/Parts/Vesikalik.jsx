import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import purple from '@material-ui/core/colors/purple';
class Vesikalik extends Component {
  constructor(props) {
    super(props);
    this.state = { res: null };
    //console.log(props.kod);
  }

  componentDidMount = () => {
    fetch(
      'http://172.17.4.29/intapi/api/ResimBase64/?kod=' + this.props.kod + '&width=130&height=130',
    )
      .then(response => response.json())
      .then(res => this.setState({ res }))
      .catch(error => console.log('hata', error));
  };

  render() {
    //console.log('dolduuu ' + this.state.res);
    if (!this.state.res) {
      return <CircularProgress style={{ color: purple[500], margin: 5 }} thickness={7} />;
    }
    return <img width="130px" height="130px" src={this.state.res} alt="" />;
  }
}
export default Vesikalik;
