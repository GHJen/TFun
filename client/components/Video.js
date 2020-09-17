import React, {Component} from 'react';
import RainbowLoader from './RainbowLoader'
import {connect} from 'react-redux';
import {gotModel, gotPredictions} from '../store';

class Video extends Component {
  constructor() {
    super();
    this.streamRef = React.createRef();
    this.state = {
      isLoading: true,
    }
  }
  async componentDidMount() {
    const stream = await navigator.mediaDevices.getUserMedia({ 'video': true, 'audio': false });
    this.streamRef.current.srcObject = stream;
    const video = document.querySelector('video')
    video.onloadeddata = (event) => {
      this.props.gotPredictions(this.props.model, video);
    };
    this.setState({isLoading: false});
  }

  render() {
    const {isLoading} = this.state;
    console.log('from component video', isLoading)
    return (
      <div id='videoDiv'>
      <RainbowLoader className={isLoading ? '' : 'hidden'} />
      <video autoPlay ref={this.streamRef} className={isLoading ? 'hidden' : ''} />
      <p>{this.props.prediction}</p>
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

export default connect(mSTP, mDTP)(Video);
