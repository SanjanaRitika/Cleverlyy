import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import * as Progress from 'react-native-progress';
import { Link } from 'expo-router';

import { SafeAreaView } from 'react-native';




const firstCardChapters = [
  { name: 'Chemical Formulae, Equations', progress: 0.7 },
  { name: 'Acids, Bases and Salts', progress: 0.4 },
  { name: 'Electrochemistry', progress: 0.5 },
  { name: 'Chemical Formulae, Equations, Calculations', progress: 0.7 },
  { name: 'Acids, Bases and Salts', progress: 0.4 },
  { name: 'Electrochemistry', progress: 0.5 },
  { name: 'Chemical Formulae, Equations, Calculations', progress: 0.7 },
  { name: 'Acids, Bases and Salts', progress: 0.4 },
  { name: 'Electrochemistry', progress: 0.5 },
  
  // More chapters specific to Principles of Chemistry
];

const secondCardChapters = [
  { name: 'Organic Chemistry and Analysis', progress: 0.8 },
  { name: 'Hydrocarbons', progress: 0.3 },
  { name: 'Polymers', progress: 0.6 },
  { name: 'Chemical Formulae, Equations, Calculations', progress: 0.7 },
  { name: 'Acids, Bases and Salts', progress: 0.4 },
  { name: 'Electrochemistry', progress: 0.5 },
  { name: 'Chemical Formulae, Equations, Calculations', progress: 0.7 },
  { name: 'Acids, Bases and Salts', progress: 0.4 },
  { name: 'Electrochemistry', progress: 0.5 },
  // More chapters specific to Inorganic Chemistry('../../assets/images/canva1.png')
];


const Papers = () => {
  return (
    <ScrollView style={styles.container}>
         
        <Text style={styles.mtitle}><Text style={styles.premium}>Go Premium</Text>. Solve Chapterwise Qps right in Cleverlyy.</Text>
      <Text style={styles.subtitle}>
        From concise and detailed revision notes that simplify complex concepts to chapterwise and yearwise question
        papers that allow you to practice with real exam questions, you’ll find all the tools necessary to master the syllabus.
      </Text>
      <View style={styles.mseparator} /> 
      

      <View style={styles.cardsContainer}>
        {/* First Card */}
        <View style={styles.card}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Principles of Chemistry</Text>
            <Progress.Circle
              size={30}
              progress={0.75}
              showsText={true}
              thickness={4}
              color={'#8c7bff'}
            />
          </View>
          <View style={styles.separator} />
          <View style={styles.innerCard}>
          {firstCardChapters.map((chapter, index) => (
            <View key={index}>
              <TouchableOpacity onPress={() => console.log(`Clicked on ${chapter.name}`)}>
                <Text style={styles.chapterName}>{chapter.name}</Text>
              </TouchableOpacity>
              <Progress.Bar progress={chapter.progress} width={null}  unfilledColor="#ffffff" color={'#8c7bff'} style={styles.progressBar} />
            </View>
          ))}
        </View>
        </View>



        {/* Second Card */}
        <View style={styles.card}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Inorganic Chemistry</Text>
            <Progress.Circle
              size={30}
              progress={0.75}
              showsText={true}
              thickness={4}
              color={'#8c7bff'}
            />
          </View>
          <View style={styles.separator} />
          <View style={styles.innerCard}>
          {secondCardChapters.map((chapter, index) => (
            <View key={index}>
              <TouchableOpacity onPress={() => console.log(`Clicked on ${chapter.name}`)}>
                <Text style={styles.chapterName}>{chapter.name}</Text>
              </TouchableOpacity>
              <Progress.Bar progress={chapter.progress} width={null} color={'#8c7bff'}  unfilledColor="#ffffff" style={styles.progressBar} />
            </View>
          ))}
        </View>
        </View>
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Background color of the scroll view
  },
  cardsContainer: {
    flexDirection: 'row', // Set direction of children to horizontal
    paddingHorizontal: 8, // Adjust padding as necessary
    justifyContent: 'center',
  },
  card: {
    width: '40%',
    backgroundColor: '#fff',
    borderRadius: 25,
    marginVertical: 30,
    marginHorizontal: 16,
    padding: 20,
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
    //alignItems: 'center',
  },
  innerCard: {
    backgroundColor: '#f7f7f7',  // Set a contrasting background or keep it similar to the outer card
    borderRadius: 5,          // Optional rounded corners
    padding: 10,              // Padding inside the inner card
    marginVertical: 10,       // Vertical spacing for breathing room within the outer card
    shadowOpacity: 0.2,       // Subtle shadow for depth
    shadowRadius: 4,          // Soft shadow
    shadowColor: '#000',      // Shadow color
    shadowOffset: { width: 0, height: 2 },  // Shadow offset
    elevation: 3,             // Elevation for Android
  },
  
  chapterName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  progressBar: {
    height: 7, // You can adjust the height of the progress bar
    marginBottom: 40, // Space between progress bars
    borderColor: '#f7f7f7',
   
    
    
  },
  titleContainer: {
    flexDirection: 'row', // Aligns children in a row
    alignItems: 'center', // Centers items vertically in the container
    justifyContent: 'space-between', // Spreads children evenly
    padding: 10, // Optional padding around the container
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10, // Adds spacing between the title and the progress circle
  },
  
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10, // Adjust the vertical spacing as needed
  },
  mtitle: {
    fontSize: 35,
    //fontWeight: 'bold',
    color: '#000', // Black color for the title
    textAlign: 'center',
    marginTop: 35, // Space from the top
    marginBottom: 10, // Space before the subtitle
    marginLeft:10,
  },
  
  subtitle: {
    textAlign: 'center',
    color: '#666', // Dark grey for the subtitle
    paddingHorizontal: 20, // Side padding for better text wrapping
    fontSize: 16, // Smaller font size than the title
    marginBottom: 10,
    marginTop: 35,
  },
  premium: {
    color: 'hsl(260,100%,66%)',  // Purple color for "Revision Notes"
    fontWeight: 'bold', // Optional: if you want "Revision Notes" to also be bold
  },
  mseparator: {
    height: 1,
    width:1100,
    backgroundColor: 'grey',
    marginVertical: 20, // Adjust the vertical spacing as needed
  },
 
  
  
  
  
});

export default Papers;
