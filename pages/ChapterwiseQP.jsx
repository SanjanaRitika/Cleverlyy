import React, { useState,useEffect } from 'react';
import { ImageBackground } from 'react-native';

import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView ,Alert} from 'react-native';
import * as Progress from 'react-native-progress';
import { Dropdown } from 'react-native-element-dropdown'; // Import the dropdown component
import { Link } from 'expo-router';










const Resources = () => {
  // State to manage selected category (Edexcel or Cambridge)
  const [selectedCategory, setSelectedCategory] = useState('Cambridge');
  
  // State to manage selected exam option (IGCSE, O-Levels, A-Levels)
  const [selectedExam, setSelectedExam] = useState(null);

  // State to manage selected subject
  const [selectedSubject, setSelectedSubject] = useState(null);

  // Categories (Edexcel, Cambridge)
  const categories = ['Edexcel', 'Cambridge'];

  // Exam options under each category
  const examOptions = ['IGCSE', 'O-Levels', 'A-Levels'];

  // Subjects corresponding to each exam option
  const subjects = {
    'IGCSE': ['Mathematics', 'Physics', 'Chemistry', 'Biology'],
    'O-Levels': [
      'Accounting', 'Additional Mathematics', 'Bengali', 'Biology', 
      'Business Studies', 'Chemistry', 'Commerce', 'Computer Science', 
      'Economics', 'English Language', 'Mathematics D', 'Physics'
    ],
    'A-Levels': ['Mathematics', 'Physics', 'Chemistry', 'Economics'],
  };







  const [orientation, setOrientation] = useState('portrait');
   const isLandscape = orientation === 'landscape';

   const updateOrientation = () => {
    const { width, height } = Dimensions.get('window');
    if (width > height) {
      setOrientation('landscape');
    } else {
      setOrientation('portrait');
    }
  };

  useEffect(() => {
    // Add event listener for orientation changes
    const subscription = Dimensions.addEventListener('change', updateOrientation);

    // Set initial orientation
    updateOrientation();

    return () => {
      // Cleanup the event listener
      subscription?.remove();
    };
  }, []);

  
  

  return (
    <>

 <ScrollView style={styles.container}>
      <View style={styles.container}>



      <Text style={styles.mtitle}>All the Resources You’ll ever Need chapterwiseQP</Text>
      <Text style={styles.subtitle}>
        From concise and detailed revision notes that simplify complex concepts to chapterwise and yearwise question
        papers that allow you to practice with real exam questions, you’ll find all the tools necessary to master the syllabus.
      </Text>
      <View style={styles.mseparator} /> 




        {/* Category Tabs */}
        <View style={styles.tabs}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.tabButton,
                selectedCategory === category && styles.selectedTab,
              ]}
              onPress={() => {
                setSelectedCategory(category); 
                setSelectedExam(null); // Reset exam selection when changing the category
                setSelectedSubject(null); // Reset subject when changing category
              }}
            >
              <Text style={styles.tabText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </View>
       
 <View style={styles.contentContainer}>

        {/* Display exam options based on selected category */}
        <View style={styles.optionsContainer}>
          {examOptions.map((option) => (
            <TouchableOpacity
              key={option}
              style={[
                styles.optionButton,
                selectedExam === option && styles.selectedOption, // Highlight selected exam
              ]}
              onPress={() => {
                setSelectedExam(option);  // Set selected exam
                setSelectedSubject(null); // Reset subject when changing exam
              }}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
        

        <View style={styles.separator} />




        {/* Display subjects for the selected exam */}
        {selectedExam ? (
  <View style={styles.subjectsContainer}>
    {subjects[selectedExam].map((subject) => (
      <TouchableOpacity
        key={subject}
        style={[
          styles.subjectButton,
          selectedSubject === subject && styles.selectedSubjectButton,  // Highlight selected subject
        ]}
        onPress={() => setSelectedSubject(subject)}  // Set selected subject
      >
        <Text style={styles.subjectText}>{subject}</Text>
      </TouchableOpacity>
    ))}
  </View>
) : (
  <View style={styles.selectExamContainer}>
    <Text style={styles.selectExamText}>Please select an exam type to view subjects.</Text>
  </View>
)}



        {/* Separator */}
        <View style={styles.separator} />

        {/* Dynamic Title and Cards */}
        {selectedSubject && (
          <View>
            {/* Dynamic Section Title */}
            <View style={styles.titleContainer}>
            <Text style={styles.sectionTitle}>
              {`${selectedCategory} ${selectedExam} ${selectedSubject}`}
            </Text>
            </View>
</View>


)}



{selectedCategory && selectedExam && selectedSubject && (
    <ImageBackground 
    source={require('../../assets/images/resource.png')}  // Specify the path to your image
    style={styles.actionContainer}  // Use the same style for the container
    imageStyle={{ borderRadius: 15 }}  // Optional: Apply border-radius to the image
  >
          <View style={[styles.actionContainer, isLandscape ? styles.landscapeContainer : styles.portraitContainer]}>
            {/* Action Card */}
            <View style={[styles.actionCard, isLandscape ? styles.landscapeCard : styles.portraitCard]}>
              <Text style={styles.actionTitle}>Actions</Text>

              <TouchableOpacity style={styles.actionButton}>
                <Text style={styles.actionText}>Add to Your Subjects</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.actionButton}>
                <Text style={styles.actionText}>Create Notebook</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.actionButton}>
                <Text style={styles.actionText}>See thread in Forum</Text>
              </TouchableOpacity>
            </View>

            {/* View All Button */}
            

          </View>
          </ImageBackground>

        )}











      </View>
      
      </View>
    </ScrollView>
    <Link href="/pages/RevisionQP" style={styles.navButton}>
    <Text style={styles.navButtonText}>RevisionQP</Text>
  </Link>
    
    
   </>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
   
  },
  selectExamContainer: {
    padding: 16,
    alignItems: 'center',  // Center the text
    justifyContent:'center',
    minHeight: 250, 
  },
  selectExamText: {
    fontSize: 20,
    color: '#888',  // Light gray text
  },
  selectSubjectContainer: {
    padding: 20,
    alignItems: 'center',  // Center the text
    justifyContent:'center',
    minHeight: 250, 
  },
  selectSubjectText: {
    fontSize: 16,
    color: '#888',  // Light gray color for the message
  },
  
  
  contentContainer: {
    backgroundColor: '#fff',  // White background for this section only
    padding: 16,              // Optional: Add padding to give some spacing
          
    minHeight: 200,           // Ensures the background is visible even when there's little content
    elevation: 2,             // Optional: Add shadow for a card effect
    minHeight: 500, 
  },
  
  mtitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000', // Black color for the title
    textAlign: 'left',
   
   
    marginLeft:10,
  },
  
  subtitle: {
    textAlign: 'left',
    color: '#666', // Dark grey for the subtitle
    paddingHorizontal: 20, // Side padding for better text wrapping
    fontSize: 16, // Smaller font size than the title
    marginBottom: 10,
    marginTop: 20,
  },
  mseparator: {
    height: 0.5,
    backgroundColor: '#000',
        marginVertical: 10,
        marginBottom:40,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 0,
  },
  tabButton: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    width: '50%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  selectedTab: {
    backgroundColor: 'white',
  },
  tabText: {
    fontSize: 16,
  },
  optionsContainer: {
    padding: 20,
    marginVertical: 20,
    paddingBottom: 25,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 0,
    marginBottom: 0,
  },
  optionButton: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    width: '25%',
  },
  selectedOption: {
    backgroundColor: '#cbc2ff', // Highlight selected exam
  },
  optionText: {
    fontSize: 16,
  },
  subjectsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 20,
    backgroundColor: 'white',
    paddingTop: 25,
    paddingBottom: 25,
    marginTop: 0,
    marginBottom: 0,
    
  },
  subjectButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  selectedSubjectButton: {
    backgroundColor: '#cbc2ff', // Purple background for selected subject
  },
  
  subjectText: {
    fontSize: 16,
  },
  separator: {
    height: 0.5,
    backgroundColor: '#000',
    marginVertical: 0,
  },
  titleContainer: {
    padding: 20,    // Add padding to the container
    backgroundColor: 'white',   // Background color for the container
    
   //paddingTop:10,
    marginTop: 0,
    marginBottom: 0,
  },
  
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    //backgroundColor: 'pink',
    marginTop: 0,
    marginTop: 0,
  },







  actionContainer: {
    //backgroundColor: 'pink',

    
    padding: 20,
    marginVertical: 20,
    borderRadius: 10,
    elevation: 2,
    justifyContent: 'flex-end',  // Align content to the left
    alignItems: 'flex-end',  // Align content to the top
  },
  landscapeContainer: {
    flexDirection: 'row', // Ensures proper layout in landscape mode
    justifyContent: 'space-between',
  },
  portraitContainer: {
    flexDirection: 'column', // Default layout for portrait
  },
  actionCard: {
    backgroundColor: '#e4e0fe',

    borderRadius: 10,
    padding: 20,
    elevation: 2,
  },
  landscapeCard: {
    width: '30%', // Card takes 30% of the container width in landscape mode
  },
  portraitCard: {
    width: '80%', // Card takes 80% of the container width in portrait mode
    alignSelf: 'center', // Aligns the card to the center
  },
  actionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  actionButton: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    elevation: 1,
  },
  actionText: {
    fontSize: 16,
  },
 
 
  
  
  
 
});

export default Resources;
