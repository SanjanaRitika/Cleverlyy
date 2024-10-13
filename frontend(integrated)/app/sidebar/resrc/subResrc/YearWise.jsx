import React, { useState,useEffect } from 'react';
import { ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView ,Alert} from 'react-native';
import { Link } from 'expo-router';
const YearwiseQP = () => {
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

  const variantDetails = [
    ['11', '21', '31', '41'],  // Variant 1
    ['12', '22', '32', '42'],  // Variant 2
    ['13', '23', '33', '43'],  // Variant 3
  ];
  

  

  
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


  


  const [selectedSession, setSelectedSession] = useState('Oct/Nov');

  const [selectedYear, setSelectedYear] = useState('2019');  // Default year
  const variants = ['Variant 1', 'Variant 2', 'Variant 3'];
  const papers = ['Paper 1', 'Paper 2', 'Paper 3', 'Paper 4'];
  const sessions = ['Oct/Nov', 'May/June', 'Jan/Feb'];



  const [isCardVisible, setCardVisible] = useState(false);
const [selectedPaper, setSelectedPaper] = useState(null);  // To store the selected paper


  const handlePaperClick = () => {
    setCardVisible(true); // Show the card
  };

  // Function to hide the card
  const closeCard = () => {
    setCardVisible(false); // Hide the card
  };
  


  
  return (
    <>

 <ScrollView style={styles.container}>
      <View style={styles.container}>



      <Text style={styles.mtitle}>All the Resources You’ll ever Need(yearwiseQP)</Text>
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
  <View style={styles.rowContainer}>
    {/* Year Picker for Years (beside the session and variant containers) */}
    <View style={styles.yearPickerContainer}>
      <Picker
        selectedValue={selectedYear}
        onValueChange={(itemValue) => setSelectedYear(itemValue)}
        style={[styles.picker, { flex: 1 }]}  // Style for wheel picker
      >
        {['2016', '2017', '2018', '2019', '2020', '2021'].map((year) => (
          <Picker.Item key={year} label={year} value={year} />
        ))}
      </Picker>
    </View>

    {/* Column Layout: Session and Variant Containers */}
    <View style={styles.columnContainer}>
      {/* Session Selector */}
      <View style={styles.sessionContainer}>
        {['Jan/Feb', 'May/June', 'Oct/Nov'].map((session) => (
          <TouchableOpacity
            key={session}
            onPress={() => setSelectedSession(session)}  // Set the selected session
            style={[
              styles.sessionButton,
              selectedSession === session && styles.selectedSessionButton,  // Highlight selected session
            ]}
          >
            <Text
              style={selectedSession === session ? styles.selectedSessionText : styles.sessionText}
            >
              {session}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Variants and Papers Layout */}
      <View style={styles.variantsContainer}>
        {variants.map((variant, index) => (
          <View key={index} style={styles.variantCard}>
            {/* Container for Variant Text and Papers in One Row */}
            <View style={styles.variantRowContainer}>
              <View style={styles.variantTextContainer}>
                <Text style={styles.variantText}>{`Variant ${index + 1}`}</Text>
                <Text style={styles.variantDetailsText}>
                  {`(${variantDetails[index].join(',')})`}  {/* Show variant details like 11,21,31 */}
                </Text>
              </View>

              {/* Papers for the Variant */}
              <View style={styles.papersContainer}>
                {papers.map((paper, i) => (
                  <TouchableOpacity
                    key={i}
                    style={styles.paperButton}
                    onPress={() => {
                      setSelectedPaper(paper);  // Handle paper selection
                      setCardVisible(true);     // Show any action if needed
                    }}
                  >
                    <Text style={styles.paperText}>{paper}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
        ))}

        {/* View All Button */}
        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>

      {isCardVisible && (
  <View style={styles.overlay}>
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Actions for {selectedPaper}</Text>

      <TouchableOpacity style={styles.actionButton}>
        <Text style={styles.actionText}>View Paper</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <Text style={styles.actionText}>View Markscheme</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <Text style={styles.actionText}>View Both</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <Text style={styles.actionText}>View Grade Boundary</Text>
      </TouchableOpacity>

      {/* Close Button */}
      <TouchableOpacity style={styles.closeButton} onPress={() => setCardVisible(false)}>
        <Text style={styles.closeButtonText}>Close</Text>
      </TouchableOpacity>
    </View>
  </View>
)}
    </View>
  </View>
)}


      </View>
      
      </View>


     
    </ScrollView>
   
    
    
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








  
  rowContainer: {
    flexDirection: 'row',  // Layout year picker beside the session + variant containers
    paddingVertical: 20,
    justifyContent: 'center',
  },
  yearPickerContainer: {
    flex: .20,  // Take 30% of the width for the year picker
    justifyContent: 'center',
    //backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    marginRight: 20,  // Add some space between the picker and the column container
  },
  picker: {
    flex: 1,  // Make the picker take up the full space of its container
    backgroundColor: '#F8F2FF',  // Optional: background color
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  columnContainer: {
    flex: 0.7,  // Take 70% of the width for session + variant containers
    flexDirection: 'column',  // Stack sessionContainer and variantsContainer vertically
  },
  sessionContainer: {
    flexDirection: 'row',  // Display sessions in a row
    justifyContent: 'space-around',  // Spread the buttons evenly
   // marginBottom: 20,  // Space below the session selector
    paddingHorizontal: 20,
    //backgroundColor: 'pink',
  },
  sessionButton: {
    padding: 10,
    //backgroundColor: '#f0f0f0',  // Default background for unselected session
    borderRadius: 5,
    width:'25%',
    borderBottomRightRadius:0,
    borderBottomLeftRadius:0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  selectedSessionButton: {
    backgroundColor: '#F4ECFF',  // Highlight background for selected session
  },
  sessionText: {
    fontSize: 16,
    color: '#000',
  },
  selectedSessionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  variantsContainer: {
    flexDirection: 'column',  // Layout the variants in a column
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#F4ECFF',
    borderRadius: 10,
   
  },
  variantCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  variantRowContainer: {
    flexDirection: 'row',  // Make variant text and papers in one row
    justifyContent: 'space-between',  // Space between variant text and papers
    alignItems: 'center',  // Vertically center the items
  },
  variantTextContainer: {
    flex: 1,  // Make sure the variant text container takes the necessary space
    marginRight: 10,  // Add some margin between the variant text and the papers
  },
  variantText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  variantDetailsText: {
    fontSize: 14,
    color: '#666',
  },
  papersContainer: {
    flexDirection: 'row',  // Horizontal layout for papers
    flexWrap: 'wrap',  // Allow papers to wrap to the next line if needed
  },
  paperButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    margin: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  paperText: {
    fontSize: 16,
  },
  viewAllButton: {
    backgroundColor: '#cbc2ff',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 10,
  },
  viewAllText: {
    fontSize: 16,
    color: 'white',
  },





  overlay: {
    position: 'absolute',  // Ensure the overlay covers the entire screen
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',  // Centers vertically
    alignItems: 'center',      // Centers horizontally
    backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Dim background for focus
  },

  card: {
    width: 200,
    //height:300,
    padding: 10,
    backgroundColor: '#F4ECFF',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,  // Elevation for shadow
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  actionButton: {
    backgroundColor: '#ffffff',
    padding: 4,
    borderRadius: 10,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },

  actionText: {
    fontSize: 16,
  },

  closeButton: {
    marginTop: 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },

  closeButtonText: {
    fontSize: 16,
    color: 'red',
  },


  
 
 
});

export default YearwiseQP;
