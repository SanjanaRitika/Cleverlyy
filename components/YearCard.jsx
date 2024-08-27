// components/YearCard.jsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const YearCard = ({ year, highestScore, onSolveSeriouslyPress, onSolveCasuallyPress, onViewPaperPress, onViewMarkSchemePress, onViewBothPress, onViewNotesPress, casuallyButtonBorderColor,borderColor, seriouslyButtonColor }) => {
  return (
    <View style={[styles.card, { borderColor: borderColor || '#7B61FF' }]}>
      <View style={styles.header}>
        <Text style={styles.yearText}>{year}</Text>
        <TouchableOpacity style={styles.checkIcon}>
          {/* Add your check icon here */}
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.seriouslyButton, { backgroundColor: seriouslyButtonColor || '#7B61FF' }]} onPress={onSolveSeriouslyPress}>
          <Text style={styles.buttonText}>Solve Seriously</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.casuallyButton, { borderColor: casuallyButtonBorderColor }]} onPress={onSolveCasuallyPress}>
        <Text style={styles.buttonText}>Solve Casually</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.linksContainer}>
        <TouchableOpacity onPress={onViewPaperPress}>
          <Text style={styles.linkText}>View Paper</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onViewMarkSchemePress}>
          <Text style={styles.linkText}>View Mark Scheme</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onViewBothPress}>
          <Text style={styles.linkText}>View Both</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={onViewNotesPress}>
        <Text style={styles.notesLink}>View Notes</Text>
      </TouchableOpacity>
      <Text style={styles.highestScoreText}>Highest Score: {highestScore}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#000000',
    padding: 15,
    borderRadius: 10,
    width: '25%',
    marginBottom: 20,
    borderWidth: .4, // or any width you prefer
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  yearText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  checkIcon: {
    // Add styles for the check icon
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  seriouslyButton: {
    padding: 10,
    borderRadius: 55,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },
  casuallyButton: {
    backgroundColor: '#000000',
    padding: 10,
    borderRadius: 55,
    flex: 1,
    alignItems: 'center',
    borderWidth: 3, 
    borderColor: '#7B61FF'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  linkText: {
    color: 'white',
  },
  notesLink: {
    color: '#7B61FF',
    textDecorationLine: 'underline'
  },
  highestScoreText: {
    color: '#4CAF50',
    position: 'absolute', // Add this line
    right: 10,            // Add this line, adjust the value as needed
    bottom: 10,
  },
});

export default YearCard;

