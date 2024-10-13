import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Progress from 'react-native-progress';
import { Link } from 'expo-router';
import { useRouter } from 'expo-router'; 



const SubjectCard = () => {

  const router = useRouter();  // Initialize router

  const handleStartSolving = () => {
    router.push('/sidebar/subjects/Rev/revi');  // Navigate to Revision page
  };
  const handleGoToChapterwise = () => {
    router.push('/sidebar/subjects/ChapterWise/chapterwise');  // Navigate to Papers page
  };

  // Function for handling navigation to Yearwise.jsx
  const handleGoToYearwise = () => {
    router.push('/sidebar/subjects/YearwiseQP/yearwiseQP');  // Navigate to Yearwise page
  };
  const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);

  const [isLandscape, setIsLandscape] = useState(Dimensions.get('window').width > Dimensions.get('window').height);

useEffect(() => {
  const updateOrientation = () => {
    const { width, height } = Dimensions.get('window');
    setIsLandscape(width > height);
  };

  const subscription = Dimensions.addEventListener('change', updateOrientation);

  return () => {
    subscription?.remove();
  };
}, []);
const containerStyle = isLandscape ? styles.rowLayout : styles.columnLayout;






  // Listener for orientation changes
  useEffect(() => {
    const updateDimensions = () => {
      setScreenWidth(Dimensions.get('window').width);
    };

    const subscription = Dimensions.addEventListener('change', updateDimensions);

    return () => {
      // Clean up the event listener on component unmount
      subscription?.remove();
    };
  }, []);

  // Determine the width based on orientation
  const cardWidth = screenWidth > 600 ? '30%' : '80%';  // Use '60%' in landscape, '90%' in portrait


  


  

useEffect(() => {
  const updateOrientation = () => {
    const { width, height } = Dimensions.get('window');
    setIsLandscape(width > height);
  };

  const subscription = Dimensions.addEventListener('change', updateOrientation);

  return () => {
    subscription?.remove();
  };
}, []);




  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>


<Text style={styles.mtitle}><Text style={styles.premium}>Go Premium</Text>. Solve Chapterwise Qps right in Cleverlyy.</Text>
      <Text style={styles.subtitle}>
        From concise and detailed revision notes that simplify complex concepts to chapterwise and yearwise question
        papers that allow you to practice with real exam questions, you’ll find all the tools necessary to master the syllabus.
      </Text>
      <View style={styles.mseparator} /> 


      <View style={isLandscape ? styles.rowLayout : styles.columnLayout}>
      <View style={[styles.card, { width: cardWidth }]}>
        {/* Image at the top */}
        <Image 
          source={require('../../../assets/images/canva.png')}  // Replace with your image source
          style={styles.topImage}
        />

        {/* Title */}
        <Text style={styles.title}>Chapterwise Revison Notes</Text>

        {/* Progress Bar */}
        <View style={styles.progressContainer}>
          <Text style={styles.progressLabel}>Start Now</Text>
          <Progress.Bar 
            progress={0}  // Set the correct progress value here
            width={250} 
            height={8} 
            color="#8c52ff" 
            unfilledColor="#e0e0e0" 
            borderRadius={10}
            style={styles.progressBar} 
          />
          <Text style={styles.progressValue}>0/84</Text>
        </View>

        {/* Features */}
        <View style={styles.featureContainer}>
          <View style={styles.feature}>
            <Icon name="hand-pointing-right" size={28} color="#4A90E2" />
            <Text style={styles.featureText}>
              <Text style={styles.highlightText}>Interactive</Text> paper solving - timed practice & solved paper 
              <Text style={styles.highlightText}> retrieval</Text>
            </Text>
          </View>

          <View style={styles.feature}>
            <Icon name="robot" size={28} color="#4A90E2" />
            <Text style={styles.featureText}>
              <Text style={styles.highlightText}>AI Checking</Text> along with 
              <Text style={styles.highlightText}> suggestions</Text> in seconds for Solved paper
            </Text>
          </View>

          <View style={styles.feature}>
            <Icon name="file-document-edit" size={28} color="#4A90E2" />
            <Text style={styles.featureText}>
              <Text style={styles.highlightText}>Tracking</Text>, Markschemes, 
              <Text style={styles.highlightText}> note taking</Text>, 
              Grade boundaries with <Text style={styles.highlightText}>yearly</Text> coverage
            </Text>
          </View>
        </View>

        {/* Start Solving Button */}
        <TouchableOpacity style={styles.startButton} onPress={handleStartSolving}>
      <Text style={styles.startButtonText}>Start Revising</Text>
    </TouchableOpacity>

        {/* Info Icon */}
        <Icon name="information-outline" size={24} color="#4A90E2" style={styles.infoIcon} />
      </View>






      <View style={[styles.card, { width: cardWidth }]}>
        {/* Image at the top */}
        <Image 
          source={require('../../../assets/images/canva2.png')}  // Replace with your image source
          style={[styles.topImage, { top: -50, }]}
        />

        {/* Title */}
        <Text style={styles.title}>Yearwise Question Paper</Text>

        {/* Progress Bar */}
        <View style={styles.progressContainer}>
          <Text style={styles.progressLabel}>Start Now</Text>
          <Progress.Bar 
            progress={0}  // Set the correct progress value here
            width={250} 
            height={8} 
            color="#8c52ff" 
            unfilledColor="#e0e0e0" 
            borderRadius={10}
            style={styles.progressBar} 
          />
          <Text style={styles.progressValue}>0/84</Text>
        </View>

        {/* Features */}
        <View style={styles.featureContainer}>
          <View style={styles.feature}>
            <Icon name="hand-pointing-right" size={28} color="#4A90E2" />
            <Text style={styles.featureText}>
              <Text style={styles.highlightText}>Interactive</Text> paper solving - timed practice & solved paper 
              <Text style={styles.highlightText}> retrieval</Text>
            </Text>
          </View>

          <View style={styles.feature}>
            <Icon name="robot" size={28} color="#4A90E2" />
            <Text style={styles.featureText}>
              <Text style={styles.highlightText}>AI Checking</Text> along with 
              <Text style={styles.highlightText}> suggestions</Text> in seconds for Solved paper
            </Text>
          </View>

          <View style={styles.feature}>
            <Icon name="file-document-edit" size={28} color="#4A90E2" />
            <Text style={styles.featureText}>
              <Text style={styles.highlightText}>Tracking</Text>, Markschemes, 
              <Text style={styles.highlightText}> note taking</Text>, 
              Grade boundaries with <Text style={styles.highlightText}>yearly</Text> coverage
            </Text>
          </View>
        </View>

        {/* Start Solving Button */}
        <TouchableOpacity style={styles.startButton} onPress={handleGoToYearwise}>
          <Text style={styles.startButtonText}>Start Solving</Text>
        </TouchableOpacity>

        {/* Info Icon */}
        <Icon name="information-outline" size={24} color="#4A90E2" style={styles.infoIcon} />
      </View>







      <View style={[styles.card, { width: cardWidth }]}>
        {/* Image at the top */}
        <Image 
          source={require('../../../assets/images/canva1.png')}  // Replace with your image source
          style={[styles.topImage, { top: -50 }]}  //, left: '50%',transform: [{ translateX: 50 }]
        />

        {/* Title */}
        <Text style={styles.title}>Chapterwise Question Paper</Text>

        {/* Progress Bar */}
        <View style={styles.progressContainer}>
          <Text style={styles.progressLabel}>Start Now</Text>
          <Progress.Bar 
            progress={0}  // Set the correct progress value here
            width={250} 
            height={8} 
            color="#8c52ff" 
            unfilledColor="#e0e0e0" 
            borderRadius={10}
            style={styles.progressBar} 
          />
          <Text style={styles.progressValue}>0/84</Text>
        </View>

        {/* Features */}
        <View style={styles.featureContainer}>
          <View style={styles.feature}>
            <Icon name="hand-pointing-right" size={28} color="#4A90E2" />
            <Text style={styles.featureText}>
              <Text style={styles.highlightText}>Interactive</Text> paper solving - timed practice & solved paper 
              <Text style={styles.highlightText}> retrieval</Text>
            </Text>
          </View>

          <View style={styles.feature}>
            <Icon name="robot" size={28} color="#4A90E2" />
            <Text style={styles.featureText}>
              <Text style={styles.highlightText}>AI Checking</Text> along with 
              <Text style={styles.highlightText}> suggestions</Text> in seconds for Solved paper
            </Text>
          </View>

          <View style={styles.feature}>
            <Icon name="file-document-edit" size={28} color="#4A90E2" />
            <Text style={styles.featureText}>
              <Text style={styles.highlightText}>Tracking</Text>, Markschemes, 
              <Text style={styles.highlightText}> note taking</Text>, 
              Grade boundaries with <Text style={styles.highlightText}>yearly</Text> coverage
            </Text>
          </View>
        </View>

        {/* Start Solving Button */}
        <TouchableOpacity style={styles.startButton} onPress={handleGoToChapterwise}>
          <Text style={styles.startButtonText}>Start Studying</Text>
        </TouchableOpacity>


        {/* Info Icon */}
        <Icon name="information-outline" size={24} color="#4A90E2" style={styles.infoIcon} />
      </View>
      </View>


     
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rowLayout: {
    flexDirection: 'row',
    justifyContent: 'space-around',  // Adjust spacing as needed
    alignItems: 'center',
  },
  columnLayout: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: 'white',
  },
  card: {
    paddingTop: 70, // Make enough space for the bottom half of the image inside the card
    marginBottom:40,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    margin: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  
  topImage: {
    width: 120, // Adjust width as needed
    height: 120, // Adjust height as needed
    position: 'absolute', // To allow positioning outside of the card
    top: -60, // Move half of the image (60px) outside of the card
    left: '50%', // Center the image horizontally
    transform: [{ translateX: -60 }], // Translate the image back by half its width to center
  },
  
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
   
    paddingBottom:20
  },
  progressLabel: {
    fontSize: 14,
    color: '#666',
  },
  progressBar: {
    flex: 1,
    marginHorizontal: 10,
   // paddingBottom:20
  },
  progressValue: {
    fontSize: 14,
    color: '#666',
  },
  featureContainer: {
    width: '100%',
    marginBottom: 20,
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  featureText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#555',
    flexShrink: 1,
    paddingBottom:20,
    //paddingTop:20,
  },
  highlightText: {
    color: '#8c52ff',
    fontWeight: 'bold',
  },
  startButton: {
    backgroundColor: '#8c52ff',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 40,
    marginBottom: 10,
  },
  startButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoIcon: {
    position: 'absolute',
    bottom: 15,
    right: 15,
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
    marginBottom:40
  },
 
});

export default SubjectCard;
