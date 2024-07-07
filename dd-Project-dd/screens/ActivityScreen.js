import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { updateActivity } from '../redux/actions/activityActions';

const ActivityScreen = () => {
  const [activityName, setActivityName] = useState('');
  const [activityDuration, setActivityDuration] = useState('');
  const dispatch = useDispatch();
  const activities = useSelector(state => state.activities);

  const handleAddActivity = () => {
    if (activityName && activityDuration) {
      dispatch(updateActivity({ name: activityName, duration: activityDuration }));
      setActivityName('');
      setActivityDuration('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Activity</Text>
      <TextInput
        style={styles.input}
        placeholder="Activity Name"
        value={activityName}
        onChangeText={text => setActivityName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Duration (in minutes)"
        value={activityDuration}
        onChangeText={text => setActivityDuration(text)}
        keyboardType="numeric"
      />
      <Button title="Add Activity" onPress={handleAddActivity} />
      <View>
        {activities.map(activity => (
          <Text key={activity.id}>{activity.name} - {activity.duration} minutes</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default ActivityScreen;