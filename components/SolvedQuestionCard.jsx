// components/SolvedQuestionCard.jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SolvedQuestionCard = ({ exam, subject, highestScore, solvedBy }) => {
  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.examText}>{exam}</Text>
        <Text style={styles.subjectText}>{subject}</Text>
      </View>
      <View style={styles.statsContainer}>
        <Text style={styles.highestScoreText}>Highest Score: {highestScore}</Text>
        <Text style={styles.solvedByText}>Solved by {solvedBy}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#2e2e2e',
    padding: 15,
    borderRadius: 10,
    width: '45%',
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
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
  statsContainer: {
    alignItems: 'flex-end',
  },
  highestScoreText: {
    color: '#4CAF50',
    fontSize: 14,
  },
  solvedByText: {
    color: '#4CAF50',
    fontSize: 14,
  },
});

export default SolvedQuestionCard;
