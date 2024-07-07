import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSleepData, saveSleepData } from '../../redux/actions/sleepActions';

const SleepTracking = () => {
  const dispatch = useDispatch();
  const sleepData = useSelector(state => state.sleep.data);
  const [sleepHours, setSleepHours] = useState(0);

  useEffect(() => {
    dispatch(fetchSleepData());
  }, []);

  const handleSaveSleepData = () => {
    dispatch(saveSleepData(sleepHours));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Track Your Sleep</Text>
      <Text>Your current sleep hours: {sleepData.hours}</Text>
      <Text>Enter new sleep hours:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={sleepHours}
        onChangeText={value => setSleepHours(value)}
      />
      <Button title="Save" onPress={handleSaveSleepData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 20,
    width: 200,
  },
});

export default SleepTracking;