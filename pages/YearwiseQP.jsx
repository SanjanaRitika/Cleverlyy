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

  // Function to detect orientation
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
      // Cleanup the event listener using the remove method
      subscription?.remove();
    };
  }, []);


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


            <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.actionButton}>
        <Text style={styles.actionButtonText}>Add to Your Subjects</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.actionButton}>
        <Text style={styles.actionButtonText}>Syllabus - 5070</Text>
      </TouchableOpacity>
    </View>
</View>


)}



{selectedSubject && (
  <View style={isLandscape ? styles.flexContainerLandscape : styles.flexContainerPortrait}>
    {/* Picker for selecting the year */}
    <Picker
      selectedValue={selectedYear}
      onValueChange={(itemValue) => setSelectedYear(itemValue)}
      style={[
        styles.picker, 
        isLandscape ? styles.pickerLandscape : styles.pickerPortrait // Conditional styles
      ]}
    >
      {['2016', '2017', '2018', '2019', '2020', '2021'].map((year) => (
        <Picker.Item key={year} label={year} value={year} />
      ))}
    </Picker>

    {/* Card (Variant & Paper Layout) */}
    <View style={[
      styles.cardContainer, 
      isLandscape ? styles.cardLandscape : styles.cardPortrait // Conditional styles for card width
    ]}>
      {variants.map((variant, index) => (
        <View key={index} style={isLandscape ? styles.variantRowLandscape : styles.variantRowPortrait}>
          {/* Variant text and papers in the same row in landscape, column in portrait */}
          <Text style={styles.variantText}>{variant}</Text>
          <View style={styles.paperRow}>
            {papers.map((paper, i) => (
             <TouchableOpacity 
             key={i} 
             style={styles.paperButton}
             onPress={() => {
               setSelectedPaper(paper);  // Set the selected paper
               setCardVisible(true);     // Show the action card
             }}
           >
             <Text style={styles.paperText}>{paper}</Text>
           </TouchableOpacity>
           
            ))}
          </View>
        </View>
      ))}

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
)}






      </View>
      
      </View>


     
    </ScrollView>
    <Link href="/pages/ThinkTank" style={styles.navButton}>
  <Text style={styles.navButtonText}>ThinkTank</Text>
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







  flexContainerPortrait: {
    flex: 1,
    flexDirection: 'column', // Column layout for portrait
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  flexContainerLandscape: {
    flex: 1,
    flexDirection: 'row', // Row layout for landscape
    justifyContent: 'space-between',
    padding: 20,
  },

  picker: {
    height: 300,
    backgroundColor: '#F8F2FF',
    borderRadius: 5,
    alignSelf: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
   
   
  },

  // Width styles for different orientations
  pickerPortrait: {
    width: '80%',  // Picker width for portrait mode
  },

  pickerLandscape: {
    width: '20%',  // Picker width for landscape mode
  },

  // Styles for the card
  cardContainer: {
    backgroundColor: '#F4ECFF',
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
    width: '80%', 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    
  },

  cardPortrait: {
    width: '100%', // Card width for portrait mode
  },

  // Style for card in landscape mode
  cardLandscape: {
    width: '70%', // Card width for landscape mode
  },

  // Style for variant row in portrait mode
  variantRowPortrait: {
    flexDirection: 'column', // Make the variant text and paper buttons stack in a column
    alignItems: 'center', // Center them horizontally
    marginBottom: 20,
  },

  // Style for variant row in landscape mode
  variantRowLandscape: {
    flexDirection: 'row', // Keep variant text and paper buttons in a row for landscape
    alignItems: 'center', // Center them vertically
    marginBottom: 20,
  },

  variantText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginRight: 10, // Space between variant text and paper buttons in landscape mode
  },

  paperRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1, // Take the remaining space in the row
    flexWrap: 'wrap', // Allow the buttons to wrap to the next line
    width: '100%', // Ensure it takes up the full width
    backgroundColor:'white',
    borderRadius: 10,
    padding:10,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    
  },

  paperButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 5,
    marginVertical: 5, // Space between buttons in portrait mode
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
    padding: 20,
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
    padding: 10,
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
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
  },

  closeButtonText: {
    fontSize: 16,
    color: 'red',
  },



  

 
 
});

export default YearwiseQP;
