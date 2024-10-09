import React, { useState,useEffect } from 'react';

import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView ,Alert} from 'react-native';
import * as Progress from 'react-native-progress';
import { Dropdown } from 'react-native-element-dropdown'; // Import the dropdown component
import { Link } from 'expo-router';




const { width, height,screenWidth } = Dimensions.get('window');

// Determine if the device is in portrait or landscape mode
const isPortrait = height > width;




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



  const handleButtonPress = (resourceType) => {
    if (resourceType === 'Yearwise Resource') {
      // Check if year and session are selected for Yearwise card
      if (!selectedYear || !selectedSession) {
        Alert.alert('Error', 'Please select both Year and Session.');
        return;
      }
    }
  
    // For other resources, no year/session validation needed
    if (selectedCategory && selectedExam && selectedSubject) {
      // Perform navigation or action
      Alert.alert(
        `Navigating to ${resourceType}`,
        `Category: ${selectedCategory}\nExam: ${selectedExam}\nSubject: ${selectedSubject}`
      );
    } else {
      Alert.alert('Error', 'Please make sure all selections (Category, Exam, and Subject) are made.');
    }
  };





  const [isPortrait, setIsPortrait] = useState(true);
  const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);

  useEffect(() => {
    const handleOrientationChange = () => {
      const { width, height } = Dimensions.get('window');
      setIsPortrait(height > width);  // Update orientation status
      setScreenWidth(width);  // Update the screen width
    };

    // Add an event listener for orientation changes
    const subscription = Dimensions.addEventListener('change', handleOrientationChange);

    // Initial check
    handleOrientationChange();

    // Clean up the event listener on component unmount
    return () => {
      if (subscription && subscription.remove) {
        subscription.remove();
      }
    };
  }, []);
  

  


  const [selectedYear, setSelectedYear] = useState(null);
const [selectedSession, setSelectedSession] = useState(null);

const years = [
  { label: '2022', value: '2022' },
  { label: '2021', value: '2021' },
  { label: '2020', value: '2020' },
];

const sessions = [
  { label: 'January/February', value: 'Jan/Feb' },
  { label: 'May/June', value: 'May/Jun' },
  { label: 'October/November', value: 'Oct/Nov' },
];




  

  

  return (
    <>

 <ScrollView style={styles.container}>
      <View style={styles.container}>



      <Text style={styles.mtitle}>All the Resources You’ll ever Need (other resources)</Text>
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





{selectedSubject && (
   <View style={[styles.cardsWrapper, { flexDirection: isPortrait ? 'column' : 'row' }]}>
    
    {/* Left Column (Specimen Paper and Learning Guides) */}
    <View style={styles.leftColumn}>
      {/* Specimen Paper Card */}
      <View style={[styles.card, { width: isPortrait ? screenWidth * 0.65 : screenWidth * 0.25 }]}>
      <Text style={styles.cardTitle}>
        {/* Add your icon here, you can replace the emoji with an image */}
        📄 Specimen Paper
      </Text>

      {/* Papers */}
      <TouchableOpacity style={styles.paperButton}>
        <Text style={styles.paperText}>Paper 1</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.paperButton}>
        <Text style={styles.paperText}>Paper 2</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.paperButton}>
        <Text style={styles.paperText}>Paper 3</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.paperButton}>
        <Text style={styles.paperText}>Paper 4</Text>
      </TouchableOpacity>

      {/* Examiner's Report */}
      <TouchableOpacity style={styles.paperButton}>
        <Text style={styles.paperText}>Examiner's Report</Text>
      </TouchableOpacity>
    </View>
      
      {/* Learning Guides Card */}
      
    </View>
    
    {/* Center Column (Grade Boundary) */}
    <View style={styles.centerColumn}>
    <View style={[styles.card, { width: isPortrait ? screenWidth * 0.65 : screenWidth * 0.25 }]}>
        <Text style={styles.cardTitle}>Grade Boundary</Text>
        <Dropdown
          style={styles.dropdown}
          data={years}
          labelField="label"
          valueField="value"
          placeholder="Select year"
          value={selectedYear}
          onChange={(item) => setSelectedYear(item.value)}
        />
        <Dropdown
          style={styles.dropdown}
          data={sessions}
          labelField="label"
          valueField="value"
          placeholder="Select session"
          value={selectedSession}
          onChange={(item) => setSelectedSession(item.value)}
        />
        <TouchableOpacity style={styles.arrowButton} onPress={() => handleButtonPress('Grade Boundary')}>
          <Text style={styles.arrowButtonText}>➔</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.card, { width: isPortrait ? screenWidth * 0.65 : screenWidth * 0.25 }]}>
        <Text style={styles.cardTitle}>Learning Guides</Text>
        <TouchableOpacity style={styles.arrowButton} onPress={() => handleButtonPress('Learning Guides')}>
          <Text style={styles.arrowButtonText}>➔</Text>
        </TouchableOpacity>
      </View>
    </View>
    
    {/* Right Column (Recommended Books) */}
    <View style={styles.rightColumn}>
    <View style={[styles.card, { width: isPortrait ? screenWidth * 0.65 : screenWidth * 0.25 }]}>
        <Text style={styles.cardTitle}>Recommended Books</Text>
        <Text style={styles.cardSubtitle}>• Hodder Cambridge O Level Chemistry Student's Book</Text>
        <Text style={styles.cardSubtitle}>• Oxford Cambridge IGCSE® & O Level Complete Chemistry</Text>
        <Text style={styles.cardSubtitle}>• Cambridge IGCSE (R) & O Level Chemistry: Exam Success Practical Workbook</Text>
        <Text style={styles.cardSubtitle}>• Hodder Cambridge O Level Chemistry Student's Book</Text>
        <Text style={styles.cardSubtitle}>• Oxford Cambridge IGCSE® & O Level </Text>
        
      </View>
    </View>

  </View>
)}
    


      </View>
      
      </View>
    </ScrollView>
    <Link href="/pages/ChapterwiseQP" style={styles.navButton}>
    <Text style={styles.navButtonText}>ChapterwiseQP</Text>
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


 
  cardsWrapper: {
    justifyContent: 'center',   // Centers items vertically if needed
    alignItems: 'center',       // Centers cards horizontally in the container
    //paddingHorizontal: -10,
    marginTop: 20,
    
  },
  
  
  // Style for the left column containing two stacked cards (Specimen Paper, Learning Guides)
  leftColumn: {
    flexDirection: 'column',    // Stacks cards vertically
    width: '35%',               // Occupies about 35% of the width
    
  },
  
  // Style for the single card in the center column (Grade Boundary)
  centerColumn: {
    width: '25%',               // Takes up 25% of the width
    justifyContent: 'space-between', // Adds space within the column
   paddingLeft:120,
   paddingRight:120,
  
  },
  
  // Style for the right column with Recommended Books card
  rightColumn: {
    width: '35%',               // Occupies 35% of the width
    
    
  },
  
  // Individual card styling
  card: {
    alignSelf: 'center',
    backgroundColor: '#e4e0fe',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,

    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    borderWidth: 0.4,           // Or any width you prefer
    borderColor: '#7B61FF',
   // alignSelf: 'center',   // Ensure the card is centered horizontally
   // width: isPortrait ? screenWidth * 0.95 : screenWidth * 0.3,  // 95% width in portrait, 30% width in landscape
  },
 
  
  paperButton: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginVertical: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
  paperText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
  },






  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  
  arrowButton: {
    backgroundColor: '#6A0DAD',
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  arrowButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  dropdown: {
    
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginVertical: 8,
    backgroundColor: '#fff',
  },
  
 
});

export default Resources;
