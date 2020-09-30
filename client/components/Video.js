import React, {Component} from 'react';
import RainbowLoader from './RainbowLoader'
import {connect} from 'react-redux';
import {gotModel, gotPredictions} from '../store';
import Learn from './Learn';
import Color from './Color';
import Music from './Music';

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
    const {prediction, game} = this.props
    return (
      <div id='videoDiv'>
        {isLoading && <RainbowLoader />}
        <video autoPlay ref={this.streamRef} className = {isLoading ? 'hidden' : ''} />
        <p> {prediction ? '' : 'Wave to start!'} </p>
        {game.name==='' ? <h3>Choose a game above to start!</h3> : ''}
        {game.name === 'learn' ? <Learn /> : ''}
        {game.name === 'color' ? <Color /> : ''}
        {game.name === 'music' ? <Music /> : ''}
      </div>
    )
  }
}
const mSTP = state => {
  return {
    model: state.model.model,
    prediction: state.model.prediction,
    game: state.game
  }
}
const mDTP = dispatch => {
  return {
    gotModel: () => dispatch(gotModel()),
    gotPredictions: (model, video) => dispatch(gotPredictions(model, video))
  }
}

export default connect(mSTP, mDTP)(Video);
