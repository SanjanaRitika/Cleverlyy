import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Make sure to have this package installed
import * as Progress from 'react-native-progress';

const PaperCard = ({ title,onStartPress,imageSource }) => {
  return (
    <View style={styles.card}>
    <View style={styles.header}>
      <Image 
        source={imageSource}  // Adjust the path according to your folder structure
        style={styles.iconStyle}
      />
      <Text style={styles.title} >{title}</Text>
    </View>
    <Progress.Bar progress={1}
    width={250} 
    height={5} 
    
    borderWidth={4}
    borderRadius={10}
    color="#8c52ff"
    style={styles.progressBar} />

      
      
      <View style={styles.feature}>
        <Icon name="hand-pointing-right" size={35} color="#4A90E2" />
        <Text style={styles.featureText}>Interactive paper solving - timed practice & solved paper retrieval</Text>
      </View>

      <View style={styles.feature}>
        <Icon name="robot" size={35} color="#4A90E2" />
        <Text style={styles.featureText}>AI Checking along with suggestions in seconds for Solved paper</Text>
      </View>

      <View style={styles.feature}>
        <Icon name="file-document-edit" size={35} color="#4A90E2" />
        <Text style={styles.featureText}>Tracking, Markschemes, note taking, Grade boundaries with yearly coverage</Text>
      </View>

      <TouchableOpacity onPress={onStartPress} style={styles.button}>
        <Text style={styles.buttonText}>Start Solving</Text>
      </TouchableOpacity>

      <Icon name="information-outline" size={24} color="#4A90E2" style={styles.infoIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    margin: 150,
    alignItems: 'center',
    borderWidth: .5,
    borderColor: 'black',
    width: '28%',
    height: '61%',
    position: 'relative',

  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  iconStyle: {
    width: 100,  // Adjust size as needed
    height: 100, // Adjust size as needed
    marginRight: 20, // Space between the icon and the title
  },
  
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
    marginTop: 30,
    flexShrink: 1,
  },
 
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  featureText: {
    marginLeft: 10,
    color: '#555',
    fontSize: 14,
    flex: 1,
  },
  button: {
    backgroundColor: '#8c7bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  progressBar: {
    flex: 3,
    marginHorizontal: 10,
    marginTop: 0,
    marginBottom: 5,
   
   
   },
   
  infoIcon: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  }
});

export default PaperCard;
