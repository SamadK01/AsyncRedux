import {
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {removeItemFromCart} from '../../redux/action/Actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Cart() {
  const item = useSelector(state => state);

  const dataString = JSON.stringify(item);
  // console.log('data-------->',dataString)
  AsyncStorage.setItem('myArray', dataString)
    .then(() => console.log('Successfully Added-->'))
    .catch(error => console.log(`Error storing data : ${error}`));

  const dispatch = useDispatch();
  const removeItem = index => {
    dispatch(removeItemFromCart(index));
  };

  AsyncStorage.getItem('myArray')
    .then(data => {
      const parsedData = JSON.parse(data);
      console.log('----Get Data--->', parsedData);
    })
    .catch(error => console.log(`Error reteriving data : ${error}`));

  const renderItem = ({item, index, parsedData}) => {
    return (
      <View>
        <View style={styles.main_div}>
          <Image
            style={{width: 90, height: 80, borderRadius: 10}}
            source={item.img}
          />
          <Text style={styles.txxt}>{item.title} </Text>
          <Text style={{position: 'absolute', right: 10, top: 12}}>
            {' '}
            Pkr - {item.price}{' '}
          </Text>
          <TouchableOpacity
            onPress={() => {
              removeItem(index);
            }}
            style={styles.plus_icon}>
            <Text style={{color: 'white'}}>Remove From Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <>
      <Text style={styles.first_hed}>Selected List</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={item}
        renderItem={renderItem}
      />
    </>
  );
}
// CSS Code
const styles = StyleSheet.create({
  txxt: {
    fontSize: 17,
    color: 'green',
    fontWeight: '600',
    marginTop: 10,
    marginLeft: 30,
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  main_div: {
    backgroundColor: 'white',
    marginBottom: 20,
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    elevation: 2,
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 10,
  },

  plus_icon: {
    backgroundColor: 'red',
    height: 30,
    width: 135,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    position: 'absolute',
    right: 16,
  },
  cart_btn: {
    backgroundColor: '#FFD200',
    borderRadius: 10,
    padding: 10,
  },

  first_hed: {
    textAlign: 'center',
    fontSize: 30,
    marginTop: 10,
    marginBottom: 10,
    color: 'black',
    fontWeight: '800',
  },
});
