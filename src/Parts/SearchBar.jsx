import React, { Component } from 'react';

import Search from '@material-ui/icons/Search';
// core components
import CustomInput from 'components/CustomInput/CustomInput.jsx';
import Button from 'components/CustomButtons/Button.jsx';
import { isWidthDown } from '../../node_modules/@material-ui/core/withWidth';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { anahtar: '' };
  }

  onInputChange(anahtar) {
    this.setState({ anahtar });
  }

  araHandle = event => {
    if (event.key === 'Enter') {
      this.props.onAraClick(this.state.anahtar);
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.searchWrapper}>
        <CustomInput
          formControlProps={{
            className: classes.margin + ' ' + classes.search,
            style: { width: '500px' },
          }}
          inputProps={{
            placeholder: 'Search',
            inputProps: {
              'aria-label': 'Search',
              value: this.state.anahtar,
              onChange: event => this.onInputChange(event.target.value),
              onKeyPress: this.araHandle,
            },
          }}
        />
        <Button
          color="white"
          aria-label="edit"
          justIcon
          round
          onClick={() => this.props.onAraClick(this.state.anahtar)}
          className="btn btn-outline-secondary btn-success"
        >
          <Search />
        </Button>
      </div>
    );
  }
}

export default SearchBar;
