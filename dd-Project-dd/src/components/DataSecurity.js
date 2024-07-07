import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DataSecurity = () => {
    return (
        <View style={styles.container}>
            <Text>Data Security Component</Text>
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

export default DataSecurity;