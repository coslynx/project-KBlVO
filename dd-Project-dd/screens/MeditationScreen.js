import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMeditationData } from '../services/meditationService';

const MeditationScreen = () => {
  const [meditationData, setMeditationData] = useState(null);
  const dispatch = useDispatch();
  const meditation = useSelector(state => state.meditation);

  useEffect(() => {
    dispatch(fetchMeditationData());
  }, []);

  useEffect(() => {
    if (meditation.data) {
      setMeditationData(meditation.data);
    }
  }, [meditation]);

  return (
    <View>
      {meditationData ? (
        <View>
          <Text>{meditationData.title}</Text>
          <Text>{meditationData.description}</Text>
          <Text>{meditationData.duration}</Text>
        </View>
      ) : (
        <Text>Loading meditation data...</Text>
      )}
    </View>
  );
};

export default MeditationScreen;