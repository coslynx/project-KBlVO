import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addActivity, getActivities } from '../redux/actions/activityActions';

const ActivityTracking = () => {
  const [activityName, setActivityName] = useState('');
  const dispatch = useDispatch();
  const activities = useSelector(state => state.activities);

  useEffect(() => {
    dispatch(getActivities());
  }, []);

  const handleAddActivity = () => {
    dispatch(addActivity(activityName));
    setActivityName('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Activity Tracking</Text>
      <TextInput
        style={styles.input}
        value={activityName}
        placeholder="Enter activity name"
        onChangeText={text => setActivityName(text)}
      />
      <Button title="Add Activity" onPress={handleAddActivity} />
      <View>
        {activities.map(activity => (
          <Text key={activity.id}>{activity.name}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
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
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default ActivityTracking;