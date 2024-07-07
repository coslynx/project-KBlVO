import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { useSelector } from 'react-redux';
import { fetchUserData } from '../../services/dataService';

const DataAnalysisDashboard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchUserData();
      setUserData(data);
    };
    
    fetchData();
  }, []);

  const chartData = {
    labels: userData ? userData.dates : [],
    datasets: [
      {
        data: userData ? userData.steps : [],
      },
    ],
  };

  return (
    <View style={styles.container}>
      {userData ? (
        <LineChart
          data={chartData}
          width={400}
          height={220}
          yAxisLabel="Steps"
          chartConfig={{
            backgroundGradientFrom: '#fff',
            backgroundGradientTo: '#fff',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          bezier
          style={styles.chart}
        />
      ) : (
        <Text>Loading data...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
});

export default DataAnalysisDashboard;