import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {RedTitle} from './RedTitle';
import {TextWindow} from './TextWindow';
import {ScrollBar} from './ScrollBar';

import App from 'grommet/components/App';
import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Animate from 'grommet/components/Animate';
import Columns from 'grommet/components/Columns';

import NavSidebar from './NavSidebar';
import { navResponsive } from '../actions/nav';

import Login from '../screens/Login';
import Dashboard from '../screens/Dashboard';
import Tasks from '../screens/Tasks';
import Task from '../screens/Task';
import NotFound from '../screens/NotFound';



class Grads{
  constructor(name, desc, team, hobby, portrait){
      this.name = name;
      this.desc = desc;
      this.team = team;
      this.hobby = hobby;
      this.portrait = portrait;
  }
}

var people = [
  new Grads('Amrit', 'Five words to describe me', 'Investment Consultant', 'hobby', 'http://www.petmd.com/sites/default/files/scared-kitten-shutterstock_191443322.jpg'),
  new Grads('Holly', 'Five words to describe me', 'Investment Consultant', 'book', 'https://www.bluecross.org.uk/sites/default/files/assets/images/cat%20tick.jpg'),
  new Grads('Ben T.', 'Five words to describe me', 'Investment Consultant', 'dancing', 'http://www.catster.com/wp-content/uploads/2016/05/cats-politics-TN.jpg'),
  new Grads('Ben D.', 'Five words to describe me', 'Investment Consultant', 'dancing', 'http://www.catster.com/wp-content/uploads/2016/05/cats-politics-TN.jpg'),
  new Grads('Piravin', 'Five words to describe me', 'Investment Consultant', 'dancing', 'http://www.catster.com/wp-content/uploads/2016/05/cats-politics-TN.jpg'),
  new Grads('David', 'Five words to describe me', 'ALM', 'dancing', 'http://www.catster.com/wp-content/uploads/2016/05/cats-politics-TN.jpg'),
  new Grads('Gaurav', 'Five words to describe me', 'ALM', 'dancing', 'http://www.catster.com/wp-content/uploads/2016/05/cats-politics-TN.jpg'),
  new Grads('Max', 'Five words to describe me', 'Investment Consultant', 'dancing', 'http://www.catster.com/wp-content/uploads/2016/05/cats-politics-TN.jpg'),
  new Grads('Harry', 'Five words to describe me', 'ALM', 'dancing', 'http://www.catster.com/wp-content/uploads/2016/05/cats-politics-TN.jpg'),
  new Grads('Paul', 'Five words to describe me', 'ALM', 'dancing', 'http://www.catster.com/wp-content/uploads/2016/05/cats-politics-TN.jpg'),
  new Grads('Janiel', 'Five words to describe me', 'Investment Consultant', 'dancing', 'http://www.catster.com/wp-content/uploads/2016/05/cats-politics-TN.jpg'),
  new Grads('Cirine', 'Five words to describe me', 'Developer', 'dancing', 'http://www.catster.com/wp-content/uploads/2016/05/cats-politics-TN.jpg'),
  new Grads('Ubi', 'Five words to describe me', 'Developer', 'dancing', 'http://www.catster.com/wp-content/uploads/2016/05/cats-politics-TN.jpg')
]

class Main extends Component {

  constructor() {
    super();
    this.state = {
      name: ''
    };
    this._onResponsive = this._onResponsive.bind(this);
    this.changeName = this.changeName.bind(this);
  };
  _onResponsive(responsive) {
    this.props.dispatch(navResponsive(responsive));
  }

  changeName(idx){
    
        const selectedPerson = people[idx]
        this.setState({
          name: selectedPerson.name
        })
      }

  render() {
    const {
      nav: { active: navActive, enabled: navEnabled, responsive }
    } = this.props;
    const includeNav = (navActive && navEnabled);
    let nav;
    if (includeNav) {
      nav = <NavSidebar />;
    }
    const priority = (includeNav && responsive === 'single' ? 'left' : 'right');

    let welcomeMsg = '';

    if(!this.state.name)
    {
      welcomeMsg = 'Welcome to the GradBook';
    }
    else
    {
      welcomeMsg = '';
    }

    return (
      <App centered={false}>
          <div style={{position: 'fixed', zIndex: '3'}}>
              <RedTitle />
          </div>
          <Split separator={false} flex='right' fixed='true' id='split' id='scrollGrads' colorIndex='light-2' priority='left'>
              <Box id="scrollGrads" colorIndex='light-1' pad='medium' direction='row' basis='small' style={{paddingTop: '100px'}}>
                <ScrollBar onChange={this.changeName} people={people}/>
              </Box>
              <Box id='gradBox' colorIndex='light-1' pad='small' justify='center' align='center' full='vertical'>
                <TextWindow selectedPerson={this.state.name} people={people} welcome={welcomeMsg}/>
              </Box>
          </Split>
      </App>
    );
  }
}

Main.defaultProps = {
  nav: {
    active: true, // start with nav active
    enabled: true, // start with nav disabled
    responsive: 'multiple'
  }
};

Main.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.shape({
    active: PropTypes.bool,
    enabled: PropTypes.bool,
    responsive: PropTypes.string
  })
};

const select = state => ({
  nav: state.nav
});

export default connect(select)(Main);
