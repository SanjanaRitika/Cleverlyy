// components/MostSolvedCard.jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MostSolvedCard = ({ data }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Most Solved Question Paper</Text>
      {data.map((item, index) => (
        <View key={index} style={styles.itemBox}>
          <View style={styles.leftContainer}>
            <Text style={styles.examText}>{item.exam}</Text>
            <Text style={styles.subjectText}>{item.subject}</Text>
          </View>
          <View style={styles.rightContainer}>
            <Text style={styles.highestScoreText}>Highest Score: {item.highestScore}</Text>
            <Text style={styles.solvedByText}>Solved by {item.solvedBy}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#000000',
    width: '45%',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    borderColor: '#333',  // Optional border
    borderWidth: 1,
  },
  title: {
    color: '#FFD700',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  itemBox: {
    backgroundColor: '#2e2e2e',
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#333',  // Optional border for each box
    borderWidth: 1,
  },
  leftContainer: {
    flexDirection: 'column',
  },
  examText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  subjectText: {
    color: '#7B61FF',
    fontSize: 14,
  },
  rightContainer: {
    alignItems: 'flex-end',
  },
  highestScoreText: {
    color: '#4CAF50',
    fontSize: 16,
  },
  solvedByText: {
    color: '#4CAF50',
    fontSize: 14,
  },
});

export default MostSolvedCard;
