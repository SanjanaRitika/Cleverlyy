import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet, Dimensions ,ScrollView } from 'react-native';
import { Video } from 'expo-av'; // Importing Video from expo-av
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const categories = ['Exam Guides', 'Revision', 'Physics', 'Chemistry','Mathmatics', 'Computer Science', 'Biology'];

const videos = [
  { id: 1, title: 'Physics Exam Guide', category: 'Exam Guides', thumbnail: 'path-to-image-1', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', type: 'watch' ,date: '13 August 2024', duration: '10 min read' },
  { id: 2, title: 'Chemistry Exam Guide', category: 'Exam Guides', thumbnail: 'path-to-image-2', videoUrl: 'https://www.w3schools.com/html/movie.mp4', type: 'watch',date: '13 August 2024', duration: '10 min read' },
  { id: 3, title: 'Biology Exam Guide', category: 'Exam Guides', thumbnail: 'path-to-image-3', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4', type: 'watch' ,date: '13 August 2024', duration: '10 min read'},
  { id: 4, title: 'Revision Techniques', category: 'Revision', thumbnail: 'path-to-image-4', videoUrl: 'https://www.w3schools.com/html/movie.mp4', type: 'watch',date: '13 August 2024', duration: '10 min read' },
  // Add more videos...
];


const ThinkTank = () => {
  const [selectedCategory, setSelectedCategory] = useState('Exam Guides');
  const [selectedVideo, setSelectedVideo] = useState(null);


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
      <View style={styles.separator} />
    </>
  );

  return (
    <FlatList
      ListHeaderComponent={renderHeader} // Use this to add non-scrolling header content
      data={filteredVideos}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.videoCard}>
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
      numColumns={2} // Adjust based on your design
      contentContainerStyle={styles.listContent}
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
    marginVertical: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryButton: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    marginHorizontal: 5,
  },
  separator: {
    height: 1, // Height of the line
    backgroundColor: '#ccc', // Color of the line
    //marginVertical: 10, // Space around the line
    width: '100%', // Line width to span the entire container
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
    width: Dimensions.get('window').width / 2 - 80,
    //width:'40%',
    margin: 10,
    backgroundColor: 'grey',
    borderRadius: 20,
    padding: 10,
    backgroundColor:'white'
  },
  thumbnail: {
    width: '100%',
    height: 120,
    borderRadius: 25,
    backgroundColor:'grey'
  },
  videoTitle: {
    fontSize: 16,
    //fontWeight: 'bold',
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
