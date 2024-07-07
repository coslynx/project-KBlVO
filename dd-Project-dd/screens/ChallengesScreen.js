import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchChallenges, completeChallenge } from '../redux/actions/challengeActions';

const ChallengesScreen = () => {
  const challenges = useSelector(state => state.challenges);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChallenges());
  }, []);

  const handleCompleteChallenge = (challengeId) => {
    dispatch(completeChallenge(challengeId));
  };

  return (
    <View>
      <Text>Challenges Screen</Text>
      {challenges.map(challenge => (
        <View key={challenge.id}>
          <Text>{challenge.title}</Text>
          <Text>{challenge.description}</Text>
          <Button title="Complete" onPress={() => handleCompleteChallenge(challenge.id)} />
        </View>
      ))}
    </View>
  );
};

export default ChallengesScreen;