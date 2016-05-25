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

const BLURRY_FACE="http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Header message="Playing From Charts" />
        <AlbumArt url={BLURRY_FACE} />
        <TrackDetails title="Stressed Out" artist="Twenty One Pilots" />
        <SeekBar trackLength={273} currentPosition={156} />
        <Controls paused={true}/>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'rgb(4,4,4)',
  },
};
