import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { getExpertInsights } from '../redux/actions/expertActions';

const ExpertInsightsScreen = ({ expertInsights, getExpertInsights }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExpertInsights = async () => {
      try {
        await getExpertInsights();
        setLoading(false);
      } catch (error) {
        console.error('Error fetching expert insights: ', error);
      }
    };

    fetchExpertInsights();
  }, [getExpertInsights]);

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading expert insights...</Text>
      ) : (
        <View>
          {expertInsights.map(insight => (
            <Text key={insight.id}>{insight.text}</Text>
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

const mapStateToProps = state => ({
  expertInsights: state.expert.insights,
});

const mapDispatchToProps = {
  getExpertInsights,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpertInsightsScreen);