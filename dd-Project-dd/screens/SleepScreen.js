import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getSleepData, updateSleepData } from '../redux/actions/sleepActions';

const SleepScreen = () => {
  const sleepData = useSelector(state => state.sleepData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSleepData());
  }, []);

  const handleUpdateSleep = () => {
    const updatedSleepData = // Logic to update sleep data
    dispatch(updateSleepData(updatedSleepData));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sleep Tracking</Text>
      <Text>Total Hours Slept: {sleepData.totalHours}</Text>
      <Text>Average Sleep Quality: {sleepData.averageQuality}</Text>
      <Button title="Update Sleep Data" onPress={handleUpdateSleep} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default SleepScreen;