import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Card, ListItem, Button, Icon } from 'react-native-elements'

import Heineken from '../assets/images/heineken.jpg';
import Ariel from '../assets/images/ariel.jpg';
import Cola from '../assets/images/cola.jpg';
import HeinekenLogo from '../assets/images/HeinekenLogo.png';
import MacAd from '../assets/images/mac_ad.jpg';

import { Fonts } from '../utils/Fonts';

const WIDTH = Dimensions.get('window').width


class HomeScreen extends Component {

  static navigationOptions = {
    title: 'Your Deals',
    headerStyle: {
      backgroundColor: '#7645C1',
    },
    headerTitleStyle: {
      color: 'white'
    },
    headerTruncatedBackTitle: 'Nah',
  }

  onNavigate = () => {
    this.props.navigation.push('SingleDeal');
  }

  render() {
    return (

      <ScrollView contentContainerStyle={{ backgroundColor: 'white', }}>
        <View
          style={{ marginTop: 10 }}
        >
          <Card
            style={{ marginTop: 10 }}
            image={MacAd}>
            <Text style={styles.cardTitle}>
              Mcdonals advertisement
          </Text>
            <Text style={{ marginBottom: 10 }}>
              The idea with React Native Elements is more about component structure than actual design.</Text>
            <Button
              onPress={() => this.onNavigate()}
              buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: '#7645C1', }}
              title='VIEW AD' />
          </Card>
        </View>
        <View
          style={{ marginTop: 10 }}
        >
          <Card
            style={{ marginTop: 10 }}
            image={Cola}>
            <Text style={styles.cardTitle}>
              Coca cola six pack
          </Text>
            <Text style={{ marginBottom: 10 }}>
              The idea with React Native Elements is more about component structure than actual design.</Text>
            <View style={styles.cardSpecs}>
              <Text style={styles.oldPrice}>👴🏻  $12,99</Text>
              <Text style={styles.newPrice}>🆕  $8,99</Text>
              <Text style={styles.store}>🏬  AH</Text>
            </View>
            <Button
              onPress={() => this.onNavigate()}
              buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: '#7645C1', }}
              title='VIEW NOW' />
          </Card>
        </View>

        <View
          style={{ marginTop: 10 }}
        >
          <Card
            style={styles.card}
            image={Ariel}>
            <Text style={styles.cardTitle}>
              Ariel 3 pod in 1
          </Text>
            <Text style={{ marginBottom: 10 }}>
              The idea with React Native Elements is more about component structure than actual design.</Text>
            <View style={styles.cardSpecs}>
              <Text style={styles.oldPrice}>👴🏻  $12,99</Text>
              <Text style={styles.newPrice}>🆕  $8,99</Text>
              <Text style={styles.store}>🏬  AH</Text>
            </View>
            <Button
              onPress={() => this.onNavigate()}
              buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: '#7645C1', }}
              title='VIEW NOW' />
          </Card>
        </View>

        <View
          style={{ marginTop: 10 }}
        >
          <Card
            image={Heineken}>
            <Text style={styles.cardTitle}>
              Heineken 6 pack
          </Text>
            <Text style={{ marginBottom: 10 }}>
              The idea with React Native Elements is more about component structure than actual design.</Text>
            <View style={styles.cardSpecs}>
              <Text style={styles.oldPrice}>👴🏻  $12,99</Text>
              <Text style={styles.newPrice}>🆕  $8,99</Text>
              <Text style={styles.store}>🏬  AH</Text>
            </View>
            <Button
              onPress={() => this.onNavigate()}
              buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: '#7645C1', }}
              title='VIEW NOW' />
          </Card>
        </View>
      </ScrollView>


    )
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  card: {
    paddingTop: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontFamily: Fonts.PoppinsSemiBold,
  },
  cardSpecs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
    width: WIDTH / 1.5,
  },
  Header: {
    marginTop: 30,
  },

  HeaderTitle: {
    fontFamily: Fonts.PoppinsSemiBold,
    fontSize: 20,
    marginLeft: 20,
  },


})