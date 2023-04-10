import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import useAsyncStorage from '../customHook/useAsyncStorage';

const SyncCustom = () => {
  const [name, setName, removeName] = useAsyncStorage('name', '');

  const handleNameChange = value => {
    setName(value);
  };

  const handleClearName = () => {
    removeName();
  };

  return (
    <View>
      <TextInput
        style={{borderColor: 'black', borderWidth: 2}}
        value={name}
        onChangeText={handleNameChange}
      />
      <Text>{name}</Text>
      <Button title="Clear Name" onPress={handleClearName} />
    </View>
  );
};

export default SyncCustom;
