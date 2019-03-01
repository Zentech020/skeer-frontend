import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, AsyncStorage } from 'react-native';
import { SearchBar, ListItem } from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
const uuidv1 = require('uuid/v1');

import { getList, filterList } from '../actions';




class SearchScreen extends Component {

  static navigationOptions = {
    title: 'Search',
    headerStyle: {
      backgroundColor: '#7645C1',
    },
    headerTitleStyle: {
      color: 'white'
    },
    headerTruncatedBackTitle: 'Nah',
  }

  constructor(props) {
    super(props);


    this.state = {
      search: '',
      onSearch: false,
      newList: [],
      list: [],
    }

    this.props.getList().then((data) => {
      this.setState({ list: data.result.data })
    })
  }


  updateSearch = search => {
    this.setState({ search, onSearch: true });
    this.setNewList(this.state.search);
  };

  onClear = () => {
    this.setState({
      onSearch: false,
    })
  }

  setNewList = (search) => {
    let filteredItems = [];

    filteredItems = this.state.list.filter(item => {
      return item.toLowerCase().includes(search.toLowerCase());
    })

    if (filteredItems) {
      this.setState({
        newList: filteredItems
      })
    }
  }

  onAddProduct = async (product) => {

    alert(`added ${product}`)

    let products_name = {
      name: product,
      id: uuidv1(),
    }
    // console.log(products_name);

    AsyncStorage.getItem('savedProducts')
      .then((products) => {
        console.log("saved products ", products);
        const p = products ? JSON.parse(products) : [];
        p.push(products_name);
        AsyncStorage.setItem('savedProducts', JSON.stringify(p));
      });
  }
  render() {
    const { search, onSearch, newList, list } = this.state;

    console.log('default list', list);
    console.log('new list ', newList)
    console.log('search status', onSearch)


    return (
      <View>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={search}
          style={styles.search}
          inputContainerStyle={{ marginTop: 0 }}
          showLoading={onSearch}
          lightTheme={true}
          onClear={() => this.onClear()}
        />
        {onSearch ? (
          <ScrollView>
            {
              newList.map((l, i) => (
                <ListItem
                  key={i}
                  leftAvatar={{ source: { uri: 'https://logo.clearbit.com/coca-cola.ru' } }}
                  title={l}
                  subtitle={l.subtitle}
                  rightIcon={<Icon name="add-box" size={30} color="#008000"
                    onPress={() => this.onAddProduct(l)}
                  />
                  }
                />
              ))
            }
          </ScrollView>
        ) : (
            <ScrollView>
              {
                list.map((l, i) => (
                  <ListItem
                    key={i}
                    leftAvatar={{ source: { uri: 'https://logo.clearbit.com/coca-cola.ru' } }}
                    title={l}
                    subtitle={l.subtitle}
                    rightIcon={<Icon name="add-box" size={30} color="#008000"
                      onPress={() => this.onAddProduct(l)}
                    />
                    }
                  />
                ))
              }
            </ScrollView>
          )
        }

      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    list: state.list,
    newList: state.newList
  };
}


export default connect(
  mapStateToProps,
  { getList, filterList }
)(SearchScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  searchContainer: {
    backgroundColor: 'purple',
  },
})