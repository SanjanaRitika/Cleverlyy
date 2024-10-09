import React, { useState } from 'react';

import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView ,Alert} from 'react-native';
import * as Progress from 'react-native-progress';
import { Dropdown } from 'react-native-element-dropdown'; // Import the dropdown component
import { Link } from 'expo-router';

const { width } = Dimensions.get('window');
//"orientation": "landscape",

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



      <Text style={styles.mtitle}>All the Resources You’ll ever Need</Text>
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





{selectedExam && !selectedSubject ? (
  <View style={styles.selectSubjectContainer}>
    <Text style={styles.selectSubjectText}>Please select a subject to view resources.</Text>
  </View>
) : selectedSubject ? (
  <View>
    {/* Render your cards */}
    <View style={styles.cardsWrapper}>
      {/* Left side (Chapterwise + Revision Notes stacked vertically) */}
      <View style={styles.leftCards}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Chapterwise Question Paper</Text>
          <Progress.Bar progress={0.7} width={null} color="#8c52ff" />
          <View style={styles.inlineText}>
            <Text style={styles.cardSubtitle}>Start Now</Text>
            <Text style={styles.cardFooter}>0/84</Text>
          </View>
          <TouchableOpacity 
            style={styles.arrowButton} 
            onPress={() => handleButtonPress('Chapterwise Resource')}
          >
            <Text style={styles.arrowButtonText}>➔</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Revision Notes</Text>
          <Progress.Bar progress={0.7} width={null} color="#8c52ff" />
          <View style={styles.inlineText}>
            <Text style={styles.cardSubtitle}>Start Now</Text>
            <Text style={styles.cardFooter}>0/84</Text>
          </View>
          <TouchableOpacity 
            style={styles.arrowButton} 
            onPress={() => handleButtonPress('Revision Notes Resource')}
          >
            <Text style={styles.arrowButtonText}>➔</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Right side (Yearwise Question Paper) */}
      <View style={styles.rightCard}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Yearwise Question Paper</Text>
          <Progress.Bar progress={0.7} width={null} color="#8c52ff" />
          <View style={styles.inlineText}>
            <Text style={styles.cardSubtitle}>Start Now</Text>
            <Text style={styles.cardFooter}>0/84</Text>
          </View>
          <Text style={styles.cardExtra}>👑 Digitally Solvable PDF with AI Checking</Text>

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

          <TouchableOpacity 
            style={styles.arrowButton} 
            onPress={() => handleButtonPress('Yearwise Resource')}
          >
            <Text style={styles.arrowButtonText}>➔</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </View>
) : null}


      </View>
      
      </View>
    </ScrollView>
    <Link href="/pages/OtherResources" style={styles.navButton}>
    <Text style={styles.navButtonText}>OtherResources</Text>
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
    flexDirection: 'row', // Side by side arrangement of left and right cards
    justifyContent: 'space-between',
    backgroundColor:'white'
  },
  leftCards: {
    flexDirection: 'column', // Stack cards vertically
    width: '45%',
   
    paddingLeft:18,
  },
  rightCard: {
    width: '45%', // Single right card
    
    paddingRight:18,
  },
  card: {
    backgroundColor: '#f7f6fb',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    borderWidth: .4, // or any width you prefer
    borderColor: '#7B61FF',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  inlineText: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Ensures the two text items are spread apart
    alignItems: 'center', // Aligns text vertically centered
  },
  
  cardSubtitle: {
    fontSize: 14,
    marginBottom: 8,
  },
  cardFooter: {
    fontSize: 12,
    color: '#888',
  },
  cardExtra: {
    fontSize: 12,
    color: '#6A0DAD',
    marginTop: 10,
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
