import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import HeinekenLogo from '../assets/images/HeinekenLogo.png';
import Banner from '../assets/images/Banner.png';

import { Fonts } from '../utils/Fonts';


class SingleDealScreen extends Component {

  static navigationOptions = {
    title: 'Ariel Pods 3-in-1 White',
    headerStyle: {
      backgroundColor: '#7645C1',
      height: 40,
    },
    headerTitleStyle: {
      color: 'white'
    },
  }

  render() {
    return (
      <Grid>
        <Row style={styles.one} size={20}>
          <Grid style={styles.Header}>
            <Col style={styles.HeaderImage} size={30}>
              <Image source={HeinekenLogo} />
            </Col>
            <Col style={styles.HeaderContent} size={70}>
              <Grid>
                <Row size={10} style={{ height: 30 }}>
                  <Text style={styles.HeaderTitle}>Ariel Pods 3-in-1 White</Text>
                </Row>

                <Row size={10} style={{ height: 30 }}>
                  <Text style={styles.HeaderDescriptionText}>Flat discounts on every food purchase on above 50$. TC Apply</Text>
                </Row>

                <Row size={10} style={{ height: 30 }}>
                  <Col style={styles.blueLabel} size={30}><Text>AH</Text></Col>
                  <Col style={styles.redLabel} size={30}><Text>Heineken</Text></Col>
                  <Col style={styles.yellowLabel} size={30}><Text>4 days</Text></Col>
                </Row>
              </Grid>
            </Col>
          </Grid>
        </Row>
        <Row style={styles.BannerImage} size={25}>
          <Image source={Banner} />
        </Row>
        <Row style={styles.three} size={30}>
          <Grid style={styles.Info}>
            <Row style={styles.infoRow}>
              <Col><Text style={styles.InfoHeaderText}>Korting details</Text></Col>
            </Row>

            <Row style={styles.infoRow}>
              <Col style={styles.InfoLabel}><Text style={styles.InfoLabelText}>Winkel</Text></Col>
              <Col style={styles.InfoAnswer}><Text style={styles.InfoAnswerText}>Jumbo</Text></Col>
            </Row>

            <Row style={styles.infoRow}>
              <Col style={styles.InfoLabel}><Text style={styles.InfoLabelText}>Verloop tijd</Text></Col>
              <Col style={styles.InfoAnswer}><Text style={styles.InfoAnswerText}>4 dagen</Text></Col>

            </Row>

            <Row style={styles.infoRow}>
              <Col style={styles.InfoLabel}><Text style={styles.InfoLabelText}>Oude prijs</Text></Col>
              <Col style={styles.InfoAnswer}><Text style={styles.InfoAnswerText}>$12,99</Text></Col>

            </Row>

            <Row style={styles.infoRow}>
              <Col style={styles.InfoLabel}>
                <Text style={styles.InfoLabelText}>Nieuwe prijs</Text>
              </Col>
              <Col style={styles.InfoAnswer}><Text style={styles.InfoAnswerText}>$9,99</Text></Col>
            </Row>
          </Grid>
        </Row>
      </Grid>
    )
  }
}

export default SingleDealScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  one: {
    backgroundColor: 'white'
  },
  BannerImage: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  three: {
    backgroundColor: 'white',
  },
  Header: {
    marginTop: 20,
    marginRight: 20,
  },
  HeaderImage: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  HeaderContent: {
    justifyContent: 'flex-start',
  },
  HeaderTitle: {
    fontSize: 20,
    fontFamily: Fonts.PoppinsSemiBold,
  },
  HeaderDescriptionText: {
    fontFamily: Fonts.PoppinsRegular,
    fontSize: 12,
    color: '#71828A',
  },
  blueLabel: {
    backgroundColor: '#E3F0FC',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    borderRadius: 30,
    marginRight: 7,
  },
  redLabel: {
    backgroundColor: '#FAE8EC',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    borderRadius: 30,
    marginRight: 7,
  },
  yellowLabel: {
    backgroundColor: '#FFF9E3',
    justifyContent: 'center',
    height: 30,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 7,
  },
  Info: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    padding: 10,
    backgroundColor: 'white',
    borderColor: "#E7ECEE",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  infoRow: {
    marginLeft: 20,
    marginRight: 20,
  },
  InfoAnswer: {
    alignItems: 'flex-end',
  },

  InfoHeaderText: {
    fontFamily: Fonts.PoppinsSemiBold,
    fontSize: 14,
  },
  InfoLabelText: {
    fontFamily: Fonts.PoppinsRegular,
    fontSize: 13,
    color: '#71828A',
  },
  InfoAnswerText: {
    fontFamily: Fonts.PoppinsRegular,
    fontSize: 13,
    color: 'black',
  },

})