import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar,
} from 'react-native';
import Header from './Header';
import AlbumArt from './AlbumArt';
import TrackDetails from './TrackDetails';
import SeekBar from './SeekBar';
import Controls from './Controls';
import Video from 'react-native-video';

const BLURRY_FACE="http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg";
const BLURRY_FACE_MP3 = "http://dl.fazmusics.in/Ali/music/aban/hot%20100%20.7%20nov%202015(128)/Twenty%20One%20Pilots%20-%20Stressed%20Out.mp3";

const TRACKS = [
  {
    title: 'Stressed Out',
    artist: 'Twenty One Pilots',
    albumArtUrl: BLURRY_FACE,
    audioUrl: BLURRY_FACE_MP3,
  }
];

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      paused: true,
      totalLength: 10,
      currentPosition: 0,
    };
  }

  setDuration(data) {
    // console.log(totalLength);
    this.setState({totalLength: Math.floor(data.duration)});
  }

  setTime(data) {
    // console.log(currentPosition);
    this.setState({currentPosition: Math.floor(data.currentTime)});
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Header message="Playing From Charts" />
        <AlbumArt url={BLURRY_FACE} />
        <TrackDetails title="Stressed Out" artist="Twenty One Pilots" />
        <SeekBar
          trackLength={this.state.totalLength}
          currentPosition={this.state.currentPosition} />
        <Controls
          onPressPlay={() => this.setState({paused: false})}
          onPressPause={() => this.setState({paused: true})}
          paused={this.state.paused}/>
        <Video source={{uri: BLURRY_FACE_MP3}} // Can be a URL or a local file.
          paused={this.state.paused}               // Pauses playback entirely.
          resizeMode="cover"           // Fill the whole screen at aspect ratio.
          repeat={true}                // Repeat forever.
          onLoadStart={this.loadStart} // Callback when video starts to load
          onLoad={this.setDuration.bind(this)}    // Callback when video loads
          onProgress={this.setTime.bind(this)}    // Callback every ~250ms with currentTime
          onEnd={this.onEnd}           // Callback when playback finishes
          onError={this.videoError}    // Callback when video cannot be loaded
          style={styles.audioElement} />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'rgb(4,4,4)',
  },
  audioElement: {
    height: 0,
    width: 0,
  }
};
