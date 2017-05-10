import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import './HomeContainer.css';
import TopBar from '../../../components/TopBar/TopBar';
import MenuDrawer from '../../../components/MenuDrawer/MenuDrawer';
import Tiles from '../components/Tiles/Tiles';

class HomeContainer extends Component {

  static propTypes = {
    categories: PropTypes.array.isRequired,
    products: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleOnLeftIconButtonTouchTap = () => {
    this.setState({open: !this.state.open});
  };

  handleHideMenuDrawer = () => {
    this.setState({open: false});
  };

  render() {
    return (
        <div>
          <TopBar
              handleOnLeftIconButtonTouchTap={this.handleOnLeftIconButtonTouchTap}/>
          <MenuDrawer open={this.state.open} hide={this.handleHideMenuDrawer}/>
          <Tiles />
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.categories,
    products: state.products,
  };
}

export default connect(mapStateToProps)(HomeContainer);
