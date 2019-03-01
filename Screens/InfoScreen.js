import React, { Component } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { List, ListItem, SearchBar, Icon } from "react-native-elements";
import AppIntroSlider from 'react-native-app-intro-slider';

import slider2 from '../assets/images/slider-2.png';
import slider3 from '../assets/images/slider-3.png';
import slider4 from '../assets/images/slider-4.png';


class InfoScreen extends Component {
  static navigationOptions = {
    title: 'Info',
    headerStyle: {
      backgroundColor: '#7645C1',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false
    }
  }

  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
    alert('done');
  }

  _renderNextButton = () => {
    return (
      <View>
        <Text style={styles.nextBtn}>Next</Text>
      </View>
    );
  }

  _renderSkipButton = () => {
    return (
      <View>
        <Text style={styles.skipBtn}>Skip</Text>
      </View>
    );
  }

  _renderDoneButton = () => {
    return (
      <View>
        <Text style={styles.doneBtn}>Done</Text>
      </View>
    )
  }
  render() {


    const slides = [
      {
        key: '1',
        title: 'Select the product you want in the sale!',
        titleStyle: styles.titleStyle,
        textStyle: styles.textStyle,
        image: require('../assets/images/slider-1.png'),
        imageStyle: styles.image,
        backgroundColor: '#fff',
      },
      {
        key: '2',
        title: 'Put them in your wanted list',
        titleStyle: styles.titleStyle,
        textStyle: styles.textStyle,
        image: require('../assets/images/slider-2.png'),
        imageStyle: styles.image,
        backgroundColor: '#fff',
      },
      {
        key: '3',
        title: 'Wait… Just do other stuff',
        titleStyle: styles.titleStyle,
        textStyle: styles.textStyle,
        image: require('../assets/images/slider-3.png'),
        imageStyle: styles.image,
        backgroundColor: '#fff',
      },
      {
        key: '4',
        title: 'Once the product is in the sale, you will be notified',
        titleStyle: styles.titleStyle,
        textStyle: styles.textStyle,
        image: require('../assets/images/slider-4.png'),
        imageStyle: styles.image,
        backgroundColor: '#fff',
      }
    ];




    return (
      <AppIntroSlider
        slides={slides}
        onDone={this._onDone}
        style={styles.sliderContainer}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
        renderSkipButton={this._renderSkipButton}
        renderNextButton={this._renderNextButton}
        renderDoneButton={this._renderDoneButton}
      />
    );
  }
}


export default InfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  sliderContainer: {
    marginTop: -80,
  },
  titleStyle: {
    color: 'black',
    marginTop: 20,
  },
  textStyle: {
    color: 'black',
  },
  dot: {
    backgroundColor: 'rgba(137,42,226,0.7)',
  },
  activeDot: {
    backgroundColor: '#892AE2'
  },
  skipBtn: {
    color: '#000'
  },
  nextBtn: {
    color: '#000',
  },
  doneBtn: {
    color: '#000',
  }
})