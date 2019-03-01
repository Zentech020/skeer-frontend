import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import placeholder from '../assets/images/placeholder.png';



import { Fonts } from '../utils/Fonts';
const HEIGHT = Dimensions.get('window').height



class AboutScreen extends Component {
  static navigationOptions = {
    title: 'Feedback',
    headerStyle: {
      backgroundColor: '#7645C1',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.feedBackTitle}>About Skeer & Us</Text>
        <Text style={styles.feedBackSubTitle}>Skeer</Text>
        <Text style={styles.feedBackDesc}>Nam commodo suscipit quam. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Phasellus tempus.Praesent adipiscing. Vestibulum fringilla pede sit amet augue.</Text>
        <Text style={styles.feedBackSubTitle}>Us</Text>
        <Text style={styles.feedBackDesc}>Nam commodo suscipit quam. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Phasellus tempus.Praesent adipiscing. Vestibulum fringilla pede sit amet augue.</Text>
        <Image style={styles.aboutImage} source={placeholder} />

        <Button
          style={styles.btn}
          title="Leave your feedback"
          type="outline"
        />

      </ScrollView>
    );
  }
}


export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 50,
  },
  feedBackTitle: {
    fontSize: 30,
    fontFamily: Fonts.PoppinsSemiBold,
    textAlign: 'center',
  },
  feedBackSubTitle: {
    fontSize: 22,
    fontFamily: Fonts.PoppinsSemiBold,
    textAlign: 'center',
    paddingVertical: 20,
  },
  feedBackDesc: {
    fontSize: 16,
    fontFamily: Fonts.PoppinsRegular,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  btn: {
    marginTop: 30,
  },
  aboutImage: {
    height: 200,
  }
})