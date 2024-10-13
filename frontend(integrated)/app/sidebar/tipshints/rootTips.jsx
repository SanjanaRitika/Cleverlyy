import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet, Dimensions ,ScrollView } from 'react-native';
import { Video } from 'expo-av'; // Importing Video from expo-av
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const categories = ['Exam Guides', 'Revision', 'Physics', 'Chemistry','Mathmatics', 'Computer Science', 'Biology'];

const videos = [
  { id: 1, title: 'Physics Exam Guide', category: 'Exam Guides', thumbnail: 'path-to-image-1', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', type: 'watch' ,date: '13 August 2024', duration: '10 min read' },
  { id: 2, title: 'Chemistry Exam Guide', category: 'Exam Guides', thumbnail: 'path-to-image-2', videoUrl: 'https://www.w3schools.com/html/movie.mp4', type: 'watch',date: '13 August 2024', duration: '10 min read' },
  { id: 3, title: 'Biology Exam Guide', category: 'Exam Guides', thumbnail: 'path-to-image-3', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', type: 'watch' ,date: '13 August 2024', duration: '10 min read'},
  { id: 4, title: 'Revision Techniques', category: 'Exam Guides', thumbnail: 'path-to-image-4', videoUrl: 'https://www.w3schools.com/html/movie.mp4', type: 'watch',date: '13 August 2024', duration: '10 min read' },
  { id: 5, title: 'Biology Exam Guide', category: 'Exam Guides', thumbnail: 'path-to-image-3', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', type: 'watch' ,date: '13 August 2024', duration: '10 min read'},
  { id: 6, title: 'Physics Exam Guide', category: 'Revision', thumbnail: 'path-to-image-1', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', type: 'watch' ,date: '13 August 2024', duration: '10 min read' },
  { id: 7, title: 'Chemistry Exam Guide', category: 'Revision', thumbnail: 'path-to-image-2', videoUrl: 'https://www.w3schools.com/html/movie.mp4', type: 'watch',date: '13 August 2024', duration: '10 min read' },
  { id: 8, title: 'Biology Exam Guide', category: 'Revision', thumbnail: 'path-to-image-3', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', type: 'watch' ,date: '13 August 2024', duration: '10 min read'},
  { id: 9, title: 'Biology Exam Guide', category: 'Revision', thumbnail: 'path-to-image-3', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', type: 'watch' ,date: '13 August 2024', duration: '10 min read'},
];


const ThinkTank = () => {
  
  const [selectedCategory, setSelectedCategory] = useState('Exam Guides');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const screenWidth = Dimensions.get('window').width; // Get screen width

 
  const cardWidth = screenWidth / 3 - 20; // For 3 columns with some margin



  const filteredVideos = videos.filter(video => video.category === selectedCategory);

  const renderHeader = () => (
    <>
      {/* Title and Video Player Section */}
      <View style={styles.topSection}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>How to revise effectively for your physics exam: Exam Guides</Text>
          <Text style={styles.subtitle}>10 min read | 13 August 2024</Text>
        </View>


        <View style={styles.videoContainer}>
        <Video
  source={{ uri: selectedVideo }} // Use the selected video URL
  style={styles.videoPlayer}
  useNativeControls
  resizeMode="contain"
  isLooping
/>

         <TouchableOpacity style={styles.playButton} onPress={() => console.log('Play pressed')}>
    <Icon name="play-circle-outline" size={60} color="#fff" />
  </TouchableOpacity>
        </View>
      </View>

      {/* Category Section */}
      <View style={styles.categoriesContainer}>
      <ScrollView
  horizontal={true} // Enable horizontal scrolling
  showsHorizontalScrollIndicator={false} // Optionally hide the scroll indicator
  contentContainerStyle={styles.categoriesContainer} // Style for scroll content
>
        {categories.map(category => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.activeCategory,
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
</ScrollView>


      </View>

      <View>
 
      <View style={styles.separator} />

 
</View>

    </>
    
  );
  
  return (
    
    <FlatList
    ListHeaderComponent={renderHeader}
    data={filteredVideos}
    keyExtractor={item => item.id.toString()}
    renderItem={({ item }) => (
      <View style={[styles.videoCard, { width: cardWidth }]}> 
        <View style={styles.dateTimeContainer}>
          <Text style={styles.dateTimeText}>{`${item.duration} | ${item.date}`}</Text>
        </View>
        <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
        <Text style={styles.videoTitle}>{item.title}</Text>
        <Text style={styles.videoTags}>Tags: {item.category}</Text>
        <TouchableOpacity style={styles.playButton} onPress={() => setSelectedVideo(item.videoUrl)}>
          <Icon name="play-circle-outline" size={50} color="#fff" />
        </TouchableOpacity>
      </View>
    )}
    numColumns={3} // Set 3 columns
    contentContainerStyle={{ paddingHorizontal: 10 }}
    key={3} // Force re-render if numColumns changes

    
  />
  
  );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  titleContainer: {
    width: '50%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
  },
  videoContainer: {
    width: '45%', // Adjust width to your preference
    height: 200,  // Adjust height to your preference
    position: 'relative', // Allows absolute positioning of the play button
   //backgroundColor:'pink',
   
   

  },
  videoPlayer: {
    width: '100%',
    height: '100%',
    backgroundColor:'grey',
    borderRadius: 20,
    
  },
  playButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -30 }, { translateY: -30 }], // Center the button
    zIndex: 1, // Ensure it stays on top
  },
  categoriesContainer: {
    marginVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  // backgroundColor:'red'
  },

  categoryButton: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    marginHorizontal: 5,
    borderColor: '#756cca',
    borderWidth: 0.5,
  
    
   
  },
  separator: {
    height: .5, // Increase the height to make it more noticeable
    backgroundColor: '#756cca', // Make it black for better visibility (you can change this to a color that suits your design)
   // marginVertical: 0, // Space around the separator
    marginBottom:10,
    width: '100%', // Full width of the separator
   
  },

  activeCategory: {
    backgroundColor: '#756cca',
  },
  categoryText: {
    color: 'black',
  },
  suggestionsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  videoCard: {
    margin: 10,
    borderRadius: 20,
    padding: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,  // Elevation for shadow
  },
  thumbnail: {
    width: '100%',
    height: 120,
    borderRadius: 25,
    backgroundColor: 'grey',
  },
  videoTitle: {
    fontSize: 16,
    marginTop: 10,
  },
  videoTags: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
  listContent: {
    paddingHorizontal: 10,
  },
 
});

export default ThinkTank;
