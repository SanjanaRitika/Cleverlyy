// components/GradeBoundaryCard.jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GradeBoundaryCard = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Grade Boundary</Text>
      <View style={styles.boundaryContainer}>
        <View style={styles.boundaryColumn}>
          <Text style={styles.boundaryText}>90%-100%   A*</Text>
          <Text style={styles.boundaryText}>70%-80%   B*</Text>
          <Text style={styles.boundaryText}>50%-60%   C*</Text>
          <Text style={styles.boundaryText}>Below 40%   NQ</Text>
        </View>
        <View style={styles.boundaryColumn}>
          <Text style={styles.boundaryText}>80%-90%   A</Text>
          <Text style={styles.boundaryText}>60%-70%   B</Text>
          <Text style={styles.boundaryText}>40%-50%   C</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#000000',
    padding: 15,
     width: '25%',
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    color: '#FFD700',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  boundaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boundaryColumn: {
    flex: 1,
  },
  boundaryText: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
  },
});

export default GradeBoundaryCard;
