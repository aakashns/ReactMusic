import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const Controls = ({
  paused,
  shuffleOn,
  repeatOn,
  onPressPlay,
  onPressPause,
  onBack,
  onForward,
  onShuffle,
  onRepeat,
}) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onShuffle}>
      <Image style={styles.secondaryControl}
        source={require('../img/ic_shuffle_white.png')}/>
    </TouchableOpacity>
    <View style={{width: 40}} />
    <TouchableOpacity onPress={onBack}>
      <Image source={require('../img/ic_skip_previous_white_36pt.png')}/>
    </TouchableOpacity>
    <View style={{width: 20}} />
    {!paused ?
      <TouchableOpacity onPress={onPressPause}>
        <View style={styles.playButton}>
          <Image source={require('../img/ic_pause_white_48pt.png')}/>
        </View>
      </TouchableOpacity> :
      <TouchableOpacity onPress={onPressPlay}>
        <View style={styles.playButton}>
          <Image source={require('../img/ic_play_arrow_white_48pt.png')}/>
        </View>
      </TouchableOpacity>
    }
    <View style={{width: 20}} />
    <TouchableOpacity onPress={onForward}>
      <Image source={require('../img/ic_skip_next_white_36pt.png')}/>
    </TouchableOpacity>
    <View style={{width: 40}} />
    <TouchableOpacity onPress={onRepeat}>
      <Image style={styles.secondaryControl}
        source={require('../img/ic_repeat_white.png')}/>
    </TouchableOpacity>
  </View>
);

export default Controls;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
  playButton: {
    height: 72,
    width: 72,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 72 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryControl: {
    opacity: 0.72,
    height: 18,
    width: 18,
  }
})
