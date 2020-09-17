import React, {Component} from 'react';
import {withRouter, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';
import VideoWrap from './components/VideoWrap'

class Routes extends Component {
  componentDidMount() {
    // this.props.loadInitialData()
  }

  render() {
    // const {isLoggedIn} = this.props
    return (
      <Switch>
        {/* <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
          <Switch>
            <Route exact path="/" component={UserHome} />
            <Route path="/home" component={UserHome} />
            <Route exact path="/entries" component={UserEntries} />
            <Route path="/entries/create" component={CreateEntry} />
            <Route path="/lessons" component={AllLessons} />
            <Route path="/prompts" component={UserPrompts} />
          </Switch> */}
        {/* Displays our Login component as a fallback */}
        <Route component={VideoWrap} />
      </Switch>
    )
  }
}

export default Routes;
