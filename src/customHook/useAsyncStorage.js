import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useAsyncStorage = (key, defaultValue) => {
  const [state, setState] = useState(defaultValue);

  useEffect(() => {
    AsyncStorage.getItem(key)
      .then(value => {
        if (value !== null) {
          setState(JSON.parse(value));
        }
      })
      .catch(error => console.log(error));
  }, []);

  const setValue = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
      setState(value);
    } catch (error) {
      console.log(error);
    }
  };

  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem(key);
      setState(defaultValue);
    } catch (error) {
      console.log(error);
    }
  };

  return [state, setValue, removeValue];
};

export default useAsyncStorage;