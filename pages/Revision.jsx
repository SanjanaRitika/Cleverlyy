
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import * as Progress from 'react-native-progress';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState, useEffect } from 'react';  // Include useEffect here
import { Link } from 'expo-router';
import { Platform } from 'react-native';
import { SafeAreaView } from 'react-native';



const firstCardChapters = [
 
  {
    name: 'Chemical Formulae, Equations',
    topics: [
      'Word & Chemical Equations',
      'Calculate Relative Mass',
      'Moles, Mass & RFM',
      'Calculate Reacting Masses',
      'Calculate Percentage Yield',
      'Experiment: Finding Formulae of Compounds',
      
    ],
  },
  {
    name: 'Metallic Bonds',
    topics: [
      'Word & Chemical Equations',
      'Calculate Relative Mass',
      'Moles, Mass & RFM',
      'Calculate Reacting Masses',
      'Calculate Percentage Yield',
      'Experiment: Finding Formulae of Compounds',
      'Practical: Determine the Formula of a Metal Oxide',
      'Empirical & Molecular Formulae',
      'Calculate Concentrations of Solutions',
    ],
  },
  {
    name: 'State of Matter',
    topics: [
      'Word & Chemical Equations',
      'Calculate Relative Mass',
      'Moles, Mass & RFM',
      'Calculate Reacting Masses',
      'Calculate Percentage Yield',
      'Experiment: Finding Formulae of Compounds',
      'Practical: Determine the Formula of a Metal Oxide',
      'Empirical & Molecular Formulae',
      'Calculate Concentrations of Solutions',
    ],
  },
  {
    name: 'Covalent Bond',
    topics: [
      'Word & Chemical Equations',
      'Calculate Relative Mass',
      'Moles, Mass & RFM',
      'Calculate Reacting Masses',
      'Calculate Percentage Yield',
      'Experiment: Finding Formulae of Compounds',
      'Practical: Determine the Formula of a Metal Oxide',
      'Empirical & Molecular Formulae',
      'Calculate Concentrations of Solutions',
    ],
  },
  {
    name: 'Electrolysis',
    topics: [
      'Word & Chemical Equations',
      'Calculate Relative Mass',
      'Moles, Mass & RFM',
      'Calculate Reacting Masses',
      'Calculate Percentage Yield',
      'Experiment: Finding Formulae of Compounds',
      'Practical: Determine the Formula of a Metal Oxide',
      'Empirical & Molecular Formulae',
      'Calculate Concentrations of Solutions',
    ],
  },
  {
    name: 'The periodic Table',
    topics: [
      'Word & Chemical Equations',
      'Calculate Relative Mass',
      'Moles, Mass & RFM',
      'Calculate Reacting Masses',
      'Calculate Percentage Yield',
      'Experiment: Finding Formulae of Compounds',
      'Practical: Determine the Formula of a Metal Oxide',
      'Empirical & Molecular Formulae',
      'Calculate Concentrations of Solutions',
    ],
  },
  // Additional chapters...
];

const secondCardChapters = [
  {
    name: 'Group 1 (Alkali Metals)',
    topics: [
      'Word & Chemical Equations',
      'Calculate Relative Mass',
      'Moles, Mass & RFM',
      'Calculate Reacting Masses',
      'Calculate Percentage Yield',
      'Experiment: Finding Formulae of Compounds',
      'Practical: Determine the Formula of a Metal Oxide',
      'Empirical & Molecular Formulae',
      'Calculate Concentrations of Solutions',
    ],
  },
  {
    name: 'Group 7 (Halogens)',
    topics: [
      'Word & Chemical Equations',
      'Calculate Relative Mass',
      'Moles, Mass & RFM',
      'Calculate Reacting Masses',
      'Calculate Percentage Yield',
      'Experiment: Finding Formulae of Compounds',
      'Practical: Determine the Formula of a Metal Oxide',
      'Empirical & Molecular Formulae',
      'Calculate Concentrations of Solutions',
    ],
  },
  {
    name: 'Gases in the atmosphere',
    topics: [
      'Word & Chemical Equations',
      'Calculate Relative Mass',
      'Moles, Mass & RFM',
      'Calculate Reacting Masses',
      'Calculate Percentage Yield',
      'Experiment: Finding Formulae of Compounds',
      'Practical: Determine the Formula of a Metal Oxide',
      'Empirical & Molecular Formulae',
      'Calculate Concentrations of Solutions',
    ],
  },
  {
    name: 'Reactivity Series',
    topics: [
      'Word & Chemical Equations',
      'Calculate Relative Mass',
      'Moles, Mass & RFM',
      'Calculate Reacting Masses',
      'Calculate Percentage Yield',
      'Experiment: Finding Formulae of Compounds',
      'Practical: Determine the Formula of a Metal Oxide',
      'Empirical & Molecular Formulae',
      'Calculate Concentrations of Solutions',
    ],
  },
  {
    name: 'Extraction & Uses of Metals',
    topics: [
      'Word & Chemical Equations',
      'Calculate Relative Mass',
      'Moles, Mass & RFM',
      'Calculate Reacting Masses',
      'Calculate Percentage Yield',
      'Experiment: Finding Formulae of Compounds',
      'Practical: Determine the Formula of a Metal Oxide',
      'Empirical & Molecular Formulae',
      'Calculate Concentrations of Solutions',
    ],
  },
  {
    name: 'Acids, Alkalis & Titrations',
    topics: [
      'Word & Chemical Equations',
      'Calculate Relative Mass',
      'Moles, Mass & RFM',
      'Calculate Reacting Masses',
      'Calculate Percentage Yield',
      'Experiment: Finding Formulae of Compounds',
      'Practical: Determine the Formula of a Metal Oxide',
      'Empirical & Molecular Formulae',
      'Calculate Concentrations of Solutions',
    ],
  },
 
  // Additional chapters...
];


const Revision = () => {
  
  const [expandedChapters, setExpandedChapters] = useState({});
  const [completedTopics, setCompletedTopics] = useState({});
  const [progressFirstCard, setProgressFirstCard] = useState(0);
const [progressSecondCard, setProgressSecondCard] = useState(0);

useEffect(() => {
  const totalTopicsFirstCard = firstCardChapters.reduce((acc, chapter) => acc + chapter.topics.length, 0);
  const totalCompletedFirstCard = firstCardChapters.reduce((acc, chapter) => {
      return acc + (completedTopics[chapter.name] ? completedTopics[chapter.name].length : 0);
  }, 0);
  setProgressFirstCard(totalTopicsFirstCard > 0 ? totalCompletedFirstCard / totalTopicsFirstCard : 0);
}, [completedTopics]);

useEffect(() => {
  const totalTopicsSecondCard = secondCardChapters.reduce((acc, chapter) => acc + chapter.topics.length, 0);
  const totalCompletedSecondCard = secondCardChapters.reduce((acc, chapter) => {
      return acc + (completedTopics[chapter.name] ? completedTopics[chapter.name].length : 0);
  }, 0);
  setProgressSecondCard(totalTopicsSecondCard > 0 ? totalCompletedSecondCard / totalTopicsSecondCard : 0);
}, [completedTopics]);



  ;

  const toggleChapter = (chapterName) => {
    setExpandedChapters((prev) => ({
      ...prev,
      [chapterName]: !prev[chapterName],
    }));
  };

  const toggleTopic = (chapterName, topicIndex) => {
    setCompletedTopics((prev) => {
      const chapterCompleted = prev[chapterName] || [];
      if (chapterCompleted.includes(topicIndex)) {
        return {
          ...prev,
          [chapterName]: chapterCompleted.filter((index) => index !== topicIndex),
        };
      } else {
        return {
          ...prev,
          [chapterName]: [...chapterCompleted, topicIndex],
        };
      }
    });
  };

  return (
    <>
    <ScrollView style={styles.container}>

       <View style={styles.headerContainer}>
       <Text style={styles.pageTitle}>
  Cambridge Chemistry : O Level - <Text style={styles.revisionNotes}>Revision Notes</Text>
</Text>

        <Text style={styles.pageSubtitle}>Expertly curated notes simplify complex topics, highlighting key concepts for exam success.</Text>
        <TouchableOpacity onPress={() => console.log('Navigating to full syllabus')}>
          <Text style={styles.pageLink}>See Full Syllabus</Text>
          <View style={styles.mseparator} /> 
        </TouchableOpacity>
      </View>
      

      {/* Outer card wrapping all chapter cards */}
      <View style={styles.cardsContainer}>




      <View style={styles.outerCard }>
  <View style={styles.titleWithProgress}>
    <Text style={styles.outerCardTitle}>1. Principles of Chemistry</Text>
    <Progress.Circle
      size={35}
      progress={progressFirstCard}
      color="#756cca"
      unfilledColor="#ccc"
      borderWidth={0}
      thickness={8}
    />
  </View>
  <View style={styles.separator} />
  {firstCardChapters.map((chapter, index) => {
  // Calculate the number of completed topics for the chapter
  const completedCount = completedTopics[chapter.name] ? completedTopics[chapter.name].length : 0;
  // Calculate the progress as a fraction
  const chapterProgress = chapter.topics.length > 0 ? completedCount / chapter.topics.length : 0;

  return (
    <View key={index}>
      <TouchableOpacity
        onPress={() => toggleChapter(chapter.name)}
        style={styles.chapterContainer}
      >


<View style={styles.progressContainer}>
  <View style={{
    ...styles.progressBarGradient,
    width: `${chapterProgress * 100}%`  // Use chapterProgress here
  }}>
    <LinearGradient
      colors={['#f7f3fb', '#efe8f8', '#e1d6f5']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{ flex: 1, height: '100%' }}
    />
  </View>
  <Text style={styles.chapterName}>{chapter.name}</Text>
  <Text style={{
    ...styles.dropDownIcon,
    backgroundColor: chapterProgress === 1 ? '#ffffff' : '#756cca' , // Change color when progress is full
    color: chapterProgress === 1 ? '#e1d7f5' : 'white'  // Change text color when progress is full
  }}>
    {expandedChapters[chapter.name] ? '▲' : '▼'}
  </Text>
</View>



      </TouchableOpacity>
      {expandedChapters[chapter.name] && (
        <View style={styles.topicsContainer}>
          {chapter.topics.map((topic, topicIndex) => (
            <TouchableOpacity
              key={topicIndex}
              onPress={() => toggleTopic(chapter.name, topicIndex)}
              style={styles.topicItem}
            >
              <Text style={[
                styles.topicText,
                completedTopics[chapter.name]?.includes(topicIndex) ? 'black' : 'grey'
              ]}>
                {completedTopics[chapter.name]?.includes(topicIndex) ? '☑' : '☐'} {topic}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
})}

  
</View>
      
<View style={styles.outerCard}>
  <View style={styles.titleWithProgress}>
    <Text style={styles.outerCardTitle}>2. Inorganic Chemistry</Text>
    <Progress.Circle
      size={35}
      progress={progressSecondCard}
     color="#756cca"
      unfilledColor="#ccc"
      borderWidth={0}
      thickness={8}
    />
  </View>
  <View style={styles.separator} />
  {secondCardChapters.map((chapter, index) => {
  // Calculate the number of completed topics for the chapter
  const completedCount = completedTopics[chapter.name] ? completedTopics[chapter.name].length : 0;
  // Calculate the progress as a fraction
  const chapterProgress = chapter.topics.length > 0 ? completedCount / chapter.topics.length : 0;

  return (
    <View key={index}>
      <TouchableOpacity
        onPress={() => toggleChapter(chapter.name)}
        style={styles.chapterContainer}
      >


<View style={styles.progressContainer}>
  <View style={{
    ...styles.progressBarGradient,
    width: `${chapterProgress * 100}%`  // Use chapterProgress here
  }}>
    <LinearGradient
      colors={['#f7f3fb', '#efe8f8', '#e1d6f5']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{ flex: 1, height: '100%' }}
    />
  </View>
  <Text style={styles.chapterName}>{chapter.name}</Text>
  <Text style={{
    ...styles.dropDownIcon,
    backgroundColor: chapterProgress === 1 ? '#ffffff' : '#756cca' , // Change color when progress is full
    color: chapterProgress === 1 ? '#e1d7f5' : 'white'  // Change text color when progress is full
  }}>
    {expandedChapters[chapter.name] ? '▲' : '▼'}
  </Text>
</View>



      </TouchableOpacity>
      {expandedChapters[chapter.name] && (
        <View style={styles.topicsContainer}>
          {chapter.topics.map((topic, topicIndex) => (
            <TouchableOpacity
              key={topicIndex}
              onPress={() => toggleTopic(chapter.name, topicIndex)}
              style={styles.topicItem}
            >
              <Text style={[
                styles.topicText,
                completedTopics[chapter.name]?.includes(topicIndex) ? 'black' : 'grey'
              ]}>
                {completedTopics[chapter.name]?.includes(topicIndex) ? '✅' : '☑'} {topic}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
})}
</View>


      </View>
<Link href="/pages/Resources" style={styles.navButton}>
        <Text style={styles.navButtonText}>Resources</Text>
      </Link>

      
    </ScrollView>
    <Link href="/pages/Resources" style={styles.navButton}>
    <Text style={styles.navButtonText}>Resources</Text>
  </Link>
  </>
    
    
  );
 
  
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
 },
  cardsContainer: {
    flexDirection: 'row', // Align children horizontally
    justifyContent: 'center', 
    alignItems:'center'
    //backgroundColor:'black',
    
  },
  headerContainer: {
    padding: 20,
  
  },
  pageTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  pageSubtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  revisionNotes: {
    color: 'hsl(260,100%,66%)',  // Purple color for "Revision Notes"
    fontWeight: 'bold', // Optional: if you want "Revision Notes" to also be bold
  },
  pageLink: {
    fontSize: 16,
    color: '#0000FF',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
  horizontalLine: {
    height: 2, // Height of the line
    backgroundColor: '#CBC3E3', // Color of the line
    width: '100%', // Makes the line stretch across the buttonRow
    marginTop: 20, // Spacing above the line
    marginBottom: 10,
},

  outerCard: {
    
    backgroundColor: '#fcfcfc', // Light grey or another color that fits your design
    borderRadius: 30,
    margin: 16,
    padding: 10,
    borderWidth: .5,
    borderColor: 'grey',
    shadowOpacity: 0.3,
    shadowRadius: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    //elevation: 3,
    height: 1000,
    //alignItems: 'center',
    width: '45%',
   //Height: ,
    overflow: 'hidden',
   // word-wrap: break-word,
   flexShrink: 1,  // Allow the card to shrink based on content
   flexGrow: 0,
  },
  outerCardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    paddingBottom: 10,  // Add some padding below the title for spacing
    paddingTop: 10, 
    paddingLeft:20,
   },

  chapterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 7,
    
    
  },
 
  chapterName: {
    position: 'absolute',
    width: '100%',
    //textAlign: 'center', // This will center the text over the bar
    color: '#333234', // Ensure the text is visible over the progress color
    paddingLeft:20,
    top: '50%', // Centers the text vertically
    transform: [{ translateY: -8 }], // Adjust based on your font size to align it perfectly centered
  },
  dropDownIcon: {
    position: 'absolute', // Use absolute positioning
    right: 11,             // Align to the right side of the container
    top: '50%',           // Center vertically
    transform: [{ translateY: -15 }], // Adjust this value to center the icon based on its size
    fontSize: 16,
    width: 30,  // Width of the icon
    height: 30, // Height of the icon
    borderRadius: 15, // Make it round
    backgroundColor: '#756cca', // Background color
    color: 'white',
    textAlign: 'center',
    lineHeight: 28, // Vertically center the text inside the circle
    overflow: 'hidden',
    
  },
  topicsContainer: {
    marginTop: 10,
    
  },
  topicItem: {
    paddingVertical: 8,
  },
  topicText: {
    fontSize: 16,
  },
  completedTopic: {
    textDecorationLine: 'line-through',
    color: 'green',
  },
  progressContainer: {
    position: 'relative',
    width: '100%',
    height: 65,  // Or the height you prefer for your progress bar
    flexDirection: 'row', 
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    
   
    },
 progressText: {
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    color: 'white',  // Ensure it contrasts with the progress bar color
    fontSize: 6,  // Adjust as needed for visibility
  },
  progressBarGradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: 10, // Match the borderRadius of your progress bar if needed
    overflow: 'hidden',
  },
  progressBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    margin: 0, // Ensure no margin is affecting the position
    flex: 1, // This will make the progress bar expand to fill the container
    height: '0%', // Make sure the height matches the container
  
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 20, // Adjust the vertical spacing as needed
  },
  mseparator: {
    height: 1,
    width:1100,
    backgroundColor: 'grey',
    marginVertical: 20, // Adjust the vertical spacing as needed
  },
  titleWithProgress: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  
  
  
});

export default Revision;
