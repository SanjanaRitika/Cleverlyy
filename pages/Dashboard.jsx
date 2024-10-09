import React from 'react';
import { View, ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import SubjectCard from '../../components/SubjectCard'; // Adjust the import path as necessary
import { Link } from 'expo-router';

const Dashboard = () => {
    const subjectCards = [
        {
            subject: "Chemistry",
            code: "4CH1",
            award: "Science (Double Award) 4SD0",
            iconName: "atom", // existing icon for chemistry
            iconColor: "#5a55b2",
            progressData: [
                { label: 'Year', value: 10, max: 10, color: '#59af64' },
                { label: 'Chapt ', value: 20, max: 20, color: '#59af64' },
                { label: 'Revise ', value: 35, max: 35, color: '#5954b1' }
            ]
        },
        {
            subject: "Physics",
            code: "4PH1",
            award: "Science (Double Award) 4SD0",
            iconName: "cog", // icon like the uploaded one for physics
            iconColor: "#d2c27d",
            progressData: [
                { label: 'Year', value: 10, max: 10, color: '#59af64' },
                { label: 'Chapt', value: 20, max: 20, color: '#59af64' },
                { label: 'Revise', value: 35, max: 35, color: '#5954b1' }
            ]
        },
        {
            subject: "Biology:Double Science",
            code: "4BI1",
            award: "Science (Double Award) 4SD0",
            iconName: "leaf", // icon like the uploaded one for physics
            iconColor: "lime",
            progressData: [
                { label: 'Year', value: 10, max: 10, color: '#59af64' },
                { label: 'Chapt', value: 20, max: 20, color: '#59af64' },
                { label: 'Revise', value: 35, max: 35, color: '#5954b1' }
            ]
        },
        {
            subject: "Maths:Core",
            code: "4CH1",
            award: "Science (Double Award) 4SD0",
            iconName: "calculator", // existing icon for chemistry
            iconColor: "grey",
            progressData: [
                { label: 'Year', value: 10, max: 10, color: '#59af64' },
                { label: 'Chapt', value: 20, max: 20, color: '#59af64' },
                { label: 'Revise', value: 35, max: 35, color: '#5954b1' }
            ]
        },
        {
            subject: "Economics",
            code: "4PH1",
            award: "Science (Double Award) 4SD0",
            iconName: "chart-line", // icon like the uploaded one for physics
            iconColor: "brown",
            progressData: [
                { label: 'Year', value: 10, max: 10, color: '#59af64' },
                { label: 'Chapte', value: 20, max: 20, color: '#59af64' },
                { label: 'Revise', value: 35, max: 35, color: '#5954b1' }
            ]
        },
        {
            subject: "Physics",
            code: "4PH1",
            award: "Science (Double Award) 4SD0",
            iconName: "flask", // icon like the uploaded one for physics
            iconColor: "orange",
            progressData: [
                { label: 'Year', value: 10, max: 10, color: '#59af64' },
                { label: 'Chapt', value: 20, max: 20, color: '#59af64' },
                { label: 'Revise', value: 35, max: 35, color: '#5954b1' }
            ]
        },
        {
            subject: "Biology:Double Science",
            code: "4BI1",
            award: "Science (Double Award) 4SD0",
            iconName: "leaf", // icon like the uploaded one for physics
            iconColor: "lime",
            progressData: [
                { label: 'Year', value: 10, max: 10, color: '#59af64' },
                { label: 'Chapt', value: 20, max: 20, color: '#59af64' },
                { label: 'Revise', value: 35, max: 35, color: '#5954b1' }
            ]
        },
       
        
        // Add more subjects as needed
    ];

    const handleContinue = () => {
        console.log("Continue button clicked");
        // Additional logic for continuing from where the user left off
    };
    const handleAddEdit = () => {
        console.log("Add/Edit button clicked");
        // Logic for adding or editing subjects
    };
    
    const handleSort = () => {
        console.log("Sort button clicked");
        // Logic for sorting subjects
    };
    
    

    return (
        <ScrollView contentContainerStyle={styles.container}>
             <Text style={styles.title}>My Subjects</Text>
            <Text style={styles.subtitle}>
                Click on the subject card and solve papers, revise notes and excel in the examination.
            </Text>


            <View style={styles.buttonRow}>
    <View style={styles.leftButtonGroup}>
        <TouchableOpacity onPress={handleContinue} style={styles.button}>
            <Text style={styles.buttonText}>Continue from where you've left</Text>
        </TouchableOpacity>
    </View>
    <View style={styles.rightButtonGroup}>
        <TouchableOpacity onPress={handleAddEdit} style={styles.button}>
            <Text style={styles.buttonText}>Add/Edit Subject</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSort} style={styles.button}>
            <Text style={styles.buttonText}>Sort by</Text>
        </TouchableOpacity>
    </View>
    
</View>
<View style={styles.horizontalLine}></View>
<Text style={styles.title2}>INTERNATIONAL GCSE </Text>


            <View style={styles.cardContainer}>
                {subjectCards.map((subject, index) => (
                    <SubjectCard
                        key={index}
                        subject={subject.subject}
                        code={subject.code}
                        award={subject.award}
                        iconName={subject.iconName}
                        iconColor={subject.iconColor}
                        progressData={subject.progressData}
                        onPress={() => console.log('Pressed', subject.subject)}
                    />
                ))}
            </View>
            <Link href="/pages/Papers" style={styles.navButton}>
  <Text style={styles.navButtonText}>papers/revision</Text>
</Link>
        </ScrollView>

        
        
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10, // Adjust padding as needed
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#5a55b2', // Purple color similar to your design
        alignSelf: 'center', // Center title in the screen
        marginTop: 20, // Space from the top of the screen
        marginBottom: 20,
    },
    subtitle: {
        textAlign: 'center', // Center align the subtitle
        color: '#000', // Purple color similar to your design
        marginBottom: 20, // Space before the cards start
    },
    title2: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#5a55b2', // Purple color similar to your design
        alignSelf: 'Left', // Center title in the screen
        marginTop: 20, // Space from the top of the screen
        marginBottom: 10,
    },
    cardContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between' // Ensures spacing between cards
    },
    card: {
        margin: 5, // Margin around each card
        width: '30%', // Approximately 30% for 3 cards per row, adjust based on padding/margin
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
        paddingHorizontal: 20, // Add horizontal padding to the overall row for better spacing
    },
    leftButtonGroup: {
        flexDirection: 'row', // Ensures buttons inside this view are aligned horizontally
        right: 300,
    },
    rightButtonGroup: {
        flexDirection: 'row', // Ensures buttons inside this view are aligned horizontally
        left: 300,
    },
    button: {
        backgroundColor: '#5a55b2', // Button color
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginLeft: 10, // Space between buttons in the right group
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    horizontalLine: {
        height: 2, // Height of the line
        backgroundColor: '#CBC3E3', // Color of the line
        width: '100%', // Makes the line stretch across the buttonRow
        marginTop: 20, // Spacing above the line
        marginBottom: 10,
    },
   
    
});

export default Dashboard;