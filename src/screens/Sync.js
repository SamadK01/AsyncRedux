import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Sync() {
  const navigation = useNavigation();

  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const loadData = async () => {
    const savedData = await AsyncStorage.getItem('data');
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  };

  const saveData = async newData => {
    const updatedData = [...data, newData];
    await AsyncStorage.setItem('data', JSON.stringify(updatedData));
    setData(updatedData);
    setInputValue('');
  };

  const renderItem = ({item}) => {
    return (
      <View>
        <Text>{item}</Text>
      </View>
    );
  };

  return (
    <View
      style={{justifyContent: 'center', alignItems: 'center', marginTop: 100}}>
      <TextInput
        style={styles.txxtinput}
        value={inputValue}
        onChangeText={setInputValue}
        placeholder="Enter data"
      />
   
      <TouchableOpacity
        style={styles.txxtbtn}
        onPress={() => saveData(inputValue)}>
        <Text style={{color: 'white'}}>Save Data</Text>
      </TouchableOpacity>
      <FlatList data={data} renderItem={renderItem} />

      <TouchableOpacity
        style={styles.txxtbtn}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text style={{color: 'white'}}>Check Cart Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  txxtbtn: {
    padding: 13,
    backgroundColor: 'black',
    borderRadius: 5,
    marginTop: 50,
    marginBottom:10
  },
  txxtinput: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 48,
    backgroundColor: 'white',
  },
  btn:{
    marginTop:10
  }
});
