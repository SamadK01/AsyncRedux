import {
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {data} from '../data/data';
import {useDispatch} from 'react-redux';
import {addItemToCart} from '../../redux/action/Actions';
import {useNavigation} from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const addItem = item => {
    dispatch(addItemToCart(item));
    //console.log('data--->', item)
  };

  const renderItem = ({item, index}) => {
    return (
      <View>
        <View style={styles.main_div}>
          <Image   style={{width: 90, height: 80, borderRadius: 10}}  source={item.img}  />
          <Text style={styles.txxt}>{item.title} </Text>
          <Text style={{position: 'absolute', right: 10, top: 12}}>   Pkr - {item.price}{' '}  </Text>
          <TouchableOpacity  onPress={() => { navigation.navigate('Cart');
              addItem(item);
            }}
            style={styles.plus_icon}>
            <Text>Add To Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <>
      <Text style={styles.first_hed}>All Item List</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
      />
    </>
  );
}
// CSS Code
const styles = StyleSheet.create({
  txxt: {
    fontSize: 17,
    color: 'black',
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
    backgroundColor: '#FFD200',
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
