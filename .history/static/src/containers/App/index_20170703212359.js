import React, {Component} from 'react';
import PropTypes from 'prop-types';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

/* application components */
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import checkAuth from '../utils/checkAuth';
import './styles/app.scss'; // eslint-disable-line no-unused-vars

class Main extends Component {
  componentWillMount() {
    
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <section>
          <Header />
          <div
            className="container"
            style={{
              marginTop: 10,
              paddingBottom: 250
            }}>
            {this.props.children}
          </div>
          <div>
            <Footer />
          </div>
        </section>
      </MuiThemeProvider>
    );
  }
}

Main.propTypes = {
  children: PropTypes.any,
};

export default Main;