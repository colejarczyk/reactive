import React from 'react';
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import './MenuDrawer.css';

export default class MenuDrawer extends React.Component {

  static propTypes = {
    open: PropTypes.bool.isRequired,
  };

  render() {
    return (
        <Drawer className="menu-drawer" open={this.props.open}  docked={false} onRequestChange={this.props.hide}>
          <h3 className="menu-drawer-header">Categories</h3>
          <MenuItem className="menu-drawer-item" onTouchTap={this.props.hide}>Skirts</MenuItem>
          <MenuItem className="menu-drawer-item" onTouchTap={this.props.hide}>Shoes</MenuItem>
          <MenuItem className="menu-drawer-item" onTouchTap={this.props.hide}>Bags</MenuItem>
          <MenuItem className="menu-drawer-item" onTouchTap={this.props.hide}>Jeans</MenuItem>
        </Drawer>
    );
  }
};
