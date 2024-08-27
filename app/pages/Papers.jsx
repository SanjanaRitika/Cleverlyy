import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PaperCard from '../../components/PaperCard'; 

const Papers = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cambridge Chemistry : O level</Text>
  <Text style={styles.subtitle}>
    From concise and detailed revision notes that simplify complex concepts to chapterwise and yearwise question
    papers that allow you to practice with real exam questions, you’ll find all the tools necessary to master the syllabus.
  </Text>
      <View style={styles.cardContainer}>
      <PaperCard title="Chapterwise Revision Notes"
       imageSource={require('../../assets/images/canva1.png')}
       onStartPress={() => console.log('Started Chapterwise')} />
        <PaperCard title="Yearwise Question Paper" 
         imageSource={require('../../assets/images/canva2.png')}
        onStartPress={() => console.log('Started Yearwise')} />
        <PaperCard title="Chapterwise Question Paper"
         imageSource={require('../../assets/images/canva.png')}
         onStartPress={() => console.log('Started Condensed')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5'
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20, // Add some space between the text and the cards
  },
  cardContainer: {
    flexDirection: 'row', // Aligns children (cards) in a row
    justifyContent: 'space-around', // Evenly spaces the cards within the container
    alignItems: 'center', // Aligns cards vertically
    width: '100%' // Ensures the container takes full width of its parent
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#000', // Black color for the title
    textAlign: 'left',
    marginTop: 70, // Space from the top
    marginBottom: 10, // Space before the subtitle
  },
  
  subtitle: {
    textAlign: 'left',
    color: '#666', // Dark grey for the subtitle
    paddingHorizontal: 20, // Side padding for better text wrapping
    fontSize: 16, // Smaller font size than the title
  }
});

export default Papers;
//
//'../assets/images/canva.png'