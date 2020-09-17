import React, {Component} from 'react';
import RainbowLoader from './RainbowLoader'
import {connect} from 'react-redux';
import {gotModel, gotPredictions} from '../store';
import Video from './Video'

class VideoWrap extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,

    }
  }
  componentDidMount() {
    this.props.gotModel();
    this.setState({isLoading: false});
  }

  render() {
    const {isLoading} = this.state;
    if (isLoading || !this.props.model) return (
      <div className='videoWrap'>
        <RainbowLoader />
      </div>
    );
    return (
      <div className='videoWrap'>
        <Video />
      </div>
    )
  }
}

const mSTP = state => {
  return {
    model: state.model.model,
    prediction: state.model.prediction,
  }
}
const mDTP = dispatch => {
  return {
    gotModel: () => dispatch(gotModel()),
    gotPredictions: (model, video) => dispatch(gotPredictions(model, video))
  }
}

export default connect(mSTP, mDTP)(VideoWrap);
