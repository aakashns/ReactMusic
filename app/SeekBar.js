import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

var Slider = require('react-native-slider');

const minutesAndSeconds = (position) => (
  [Math.floor(position / 60), position % 60]
);

const SeekBar = ({
  trackLength,
  currentPosition,
  onSeek,
}) => {
  const elapsed = minutesAndSeconds(currentPosition);
  const remaining = minutesAndSeconds(trackLength - currentPosition);
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.text}>
          {elapsed[0] + ":" + elapsed[1]}
        </Text>
        <View style={{flex: 1}} />
        <Text style={styles.text}>
          {"-" + remaining[0] + ":" + remaining[1]}
        </Text>
      </View>
      <Slider
        maximumValue={trackLength}
        onSlidingComplete={onSeek}
        value={currentPosition}
        style={styles.slider}
        minimumTrackTintColor='#fff'
        maximumTrackTintColor='rgba(255, 255, 255, 0.14)'
        thumbStyle={styles.thumb}
        trackStyle={styles.track}/>
    </View>
  );
};

export default SeekBar;

const styles = StyleSheet.create({
  slider: {
    marginTop: -12,
  },
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
  track: {
    height: 2,
    borderRadius: 1,
  },
  thumb: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  text: {
    color: 'rgba(255, 255, 255, 0.72)',
    fontSize: 12,
  }
});
