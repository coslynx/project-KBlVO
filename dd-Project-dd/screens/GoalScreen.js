import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setGoal, updateGoal } from '../redux/actions/goalActions';

const GoalScreen = () => {
  const [goal, setGoal] = useState('');
  const dispatch = useDispatch();
  const currentGoal = useSelector(state => state.goalReducer.goal);

  useEffect(() => {
    setGoal(currentGoal);
  }, [currentGoal]);

  const handleSaveGoal = () => {
    dispatch(setGoal(goal));
  };

  const handleUpdateGoal = () => {
    dispatch(updateGoal(goal));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Set Your Goal</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your goal"
        value={goal}
        onChangeText={setGoal}
      />
      <View style={styles.buttonContainer}>
        <Button title="Save Goal" onPress={handleSaveGoal} />
        <Button title="Update Goal" onPress={handleUpdateGoal} />
      </View>
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
    width: '80%',
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
});

export default GoalScreen;