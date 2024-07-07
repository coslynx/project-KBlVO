import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

const GoalSetting = () => {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    // Fetch goals data from the server
    const fetchGoals = async () => {
      try {
        const response = await fetch('http://example.com/goals');
        const data = await response.json();
        setGoals(data);
      } catch (error) {
        console.error('Error fetching goals: ', error);
      }
    };

    fetchGoals();
  }, []);

  const addGoal = async (newGoal) => {
    try {
      const response = await fetch('http://example.com/goals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newGoal),
      });
      const data = await response.json();
      setGoals([...goals, data]);
    } catch (error) {
      console.error('Error adding goal: ', error);
    }
  };

  return (
    <View>
      <Text>Goal Setting Section</Text>
      {goals.map((goal, index) => (
        <Text key={index}>{goal.title}</Text>
      ))}
      <Button title="Add Goal" onPress={() => addGoal({ title: 'New Goal' })} />
    </View>
  );
};

export default GoalSetting;