import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { fetchWearableData } from '../../redux/actions/wearableActions';

const WearableDeviceIntegration = ({ wearableData, fetchWearableData }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWearableData();
  }, []);

  useEffect(() => {
    if (wearableData) {
      setLoading(false);
    }
  }, [wearableData]);

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading wearable device data...</Text>
      ) : (
        <View>
          <Text>Wearable Device Data:</Text>
          {wearableData.map((data, index) => (
            <Text key={index}>{data}</Text>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = (state) => ({
  wearableData: state.wearableData,
});

const mapDispatchToProps = {
  fetchWearableData,
};

export default connect(mapStateToProps, mapDispatchToProps)(WearableDeviceIntegration);