// components/VariantCard.jsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // For icons like the edit icon

const VariantCard = ({ title, papers, score, onViewGradeBoundaryPress }) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity style={styles.gradeBoundaryButton} onPress={onViewGradeBoundaryPress}>
          <Text style={styles.buttonText}>View Grade Boundary</Text>
        </TouchableOpacity>
      </View>
      {papers.map((paper, index) => (
        <View key={index} style={styles.paperRow}>
          <FontAwesome name={paper.selected ? "check-circle" : "circle-o"} size={24} color={paper.selected ? "green" : "white"} />
          <Text style={styles.paperText}>{paper.name}</Text>
          <Text style={styles.score}>{paper.score || '-'}</Text>
          <TouchableOpacity>
            <FontAwesome name="edit" size={24} color="white" />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#000000',
    padding: 15,
    width: '60%',
    borderRadius: 10,
    marginBottom: 20,
    borderColor: '#7B61FF', // Optional border color similar to the title text
    borderWidth: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    color: '#FFD700',
    fontSize: 20,
    fontWeight: 'bold',
  },
  gradeBoundaryButton: {
    backgroundColor: '#7B61FF',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  paperRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  paperText: {
    color: 'white',
    fontSize: 16,
    flex: 1,
    marginLeft: 10,
  },
  score: {
    color: 'green',
    fontSize: 20,
    marginRight: 10,
  },
});

export default VariantCard;
