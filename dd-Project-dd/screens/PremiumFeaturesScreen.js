import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPremiumFeatures } from '../redux/actions/premiumFeaturesActions';

const PremiumFeaturesScreen = () => {
  const [loading, setLoading] = useState(true);
  const premiumFeatures = useSelector(state => state.premiumFeatures);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPremiumFeatures());
    setLoading(false);
  }, []);

  return (
    <View>
      {loading ? (
        <Text>Loading Premium Features...</Text>
      ) : (
        <View>
          <Text>Available Premium Features:</Text>
          {premiumFeatures.map(feature => (
            <Text key={feature.id}>{feature.name}</Text>
          ))}
          <Button title="Purchase Premium" onPress={() => alert('Purchase Premium Feature')} />
        </View>
      )}
    </View>
  );
};

export default PremiumFeaturesScreen;