// pages/yearwiseResources.jsx
// pages/yearwiseResources.jsx
// pages/yearwiseResources.jsx
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import React from "react";
import YearCard from "../../components/YearCard"; 
import GradeBoundaryCard from '../../components/GradeBoundaryCard';
import VariantCard from '../../components/VariantCard';
import MostSolvedCard from '../../components/MostSolvedCard';
import { Link } from 'expo-router';


const data = [
  { exam: "Edexcel - 2018", subject: "Chemistry", highestScore: "87%", solvedBy: "2.5k" },
  { exam: "Edexcel - 2020", subject: "Chemistry", highestScore: "87%", solvedBy: "2.47k" },
  { exam: "Edexcel - 2023", subject: "Chemistry", highestScore: "87%", solvedBy: "2.4k" },
  { exam: "Edexcel - 2021", subject: "Chemistry", highestScore: "87%", solvedBy: "2.39k" },
  { exam: "Edexcel - 2022", subject: "Chemistry", highestScore: "87%", solvedBy: "2.3k" },
  { exam: "Edexcel - 2019", subject: "Chemistry", highestScore: "87%", solvedBy: "1.7k" },
];

const variantData = {
  title: "Chemistry - 2022",
  papers: [
    { name: "Paper 1", selected: true, score: 85 },
    { name: "Paper 2", selected: false, score: 92 },
    { name: "Paper 3", selected: true, score: 88 }
  ],
  onViewGradeBoundaryPress: () => console.log("View Grade Boundary Pressed"),
};



const YearwiseResources = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Yearwise Resources</Text>
      </View>
      
      <ScrollView contentContainerStyle={styles.cardContainer}>
      
        
        <YearCard
          year="2020"
          highestScore="87%"
          seriouslyButtonColor="#7B61FF"         // Custom Solve Seriously button color
          casuallyButtonBorderColor="#7B61FF" 
          onSolveSeriouslyPress={() => console.log('Solve Seriously pressed')}
          onSolveCasuallyPress={() => console.log('Solve Casually pressed')}
          onViewPaperPress={() => console.log('View Paper pressed')}
          onViewMarkSchemePress={() => console.log('View Mark Scheme pressed')}
          onViewBothPress={() => console.log('View Both pressed')}
          onViewNotesPress={() => console.log('View Notes pressed')}
        />
        <YearCard
          year="2021"
          highestScore="85%"
          seriouslyButtonColor="#895731"         
          casuallyButtonBorderColor="#895731"
          onSolveSeriouslyPress={() => console.log('Solve Seriously pressed')}
          onSolveCasuallyPress={() => console.log('Solve Casually pressed')}
          onViewPaperPress={() => console.log('View Paper pressed')}
          onViewMarkSchemePress={() => console.log('View Mark Scheme pressed')}
          onViewBothPress={() => console.log('View Both pressed')}
          onViewNotesPress={() => console.log('View Notes pressed')}
        />
        <YearCard
          year="2022"
          highestScore="90%"
          seriouslyButtonColor="#5a4f60"         
          casuallyButtonBorderColor="#5a4f60"
          onSolveSeriouslyPress={() => console.log('Solve Seriously pressed')}
          onSolveCasuallyPress={() => console.log('Solve Casually pressed')}
          onViewPaperPress={() => console.log('View Paper pressed')}
          onViewMarkSchemePress={() => console.log('View Mark Scheme pressed')}
          onViewBothPress={() => console.log('View Both pressed')}
          onViewNotesPress={() => console.log('View Notes pressed')}
        />
        <YearCard
          year="2023"
          highestScore="90%"
          seriouslyButtonColor="#5a55b2"         
          casuallyButtonBorderColor="#5a55b2"
          onSolveSeriouslyPress={() => console.log('Solve Seriously pressed')}
          onSolveCasuallyPress={() => console.log('Solve Casually pressed')}
          onViewPaperPress={() => console.log('View Paper pressed')}
          onViewMarkSchemePress={() => console.log('View Mark Scheme pressed')}
          onViewBothPress={() => console.log('View Both pressed')}
          onViewNotesPress={() => console.log('View Notes pressed')}
        />
        
        
       
        <GradeBoundaryCard />
       
<MostSolvedCard data={data} /> 
<VariantCard
        title={variantData.title}
        papers={variantData.papers}
        onViewGradeBoundaryPress={variantData.onViewGradeBoundaryPress}
      />

      </ScrollView>
      <Link href="/pages/Dashboard" style={styles.navButton}>
  <Text style={styles.navButtonText}>Dashboard</Text>
</Link>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#1e1e1e",
  },
  titleContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "7%",
    marginBottom: "3%",
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  cardContainer: {
    paddingVertical: 20,
    justifyContent: 'space-between', 
    flexDirection: 'row',      // Arrange cards in a row
    flexWrap: 'wrap', 
    justifyContent: 'flex-start',

   
  },
 
  sectionTitle: {
    width: '100%',           // Ensure the title takes up full width
    color: '#FFD700',         // Adjust color to match the design
    fontSize: 20,             // Adjust size to match the design
    fontWeight: 'bold',
    marginTop: 20,            // Add some margin above the title
    marginBottom: 10, 
  },
  
  
});

export default YearwiseResources;

