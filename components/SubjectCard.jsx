import React from 'react';
import * as Progress from 'react-native-progress';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dimensions } from 'react-native';


const screenWidth = Dimensions.get('window').width;

const SubjectCard = ({ subject, code, award, progressData, onPress, iconName, iconColor, onInfoPress, onEditPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.card}>
            <View style={styles.header}>
                <Icon name={iconName} size={70} color={iconColor} style={styles.iconStyle} />
                <View style={styles.topRightIcons}>
                    <TouchableOpacity onPress={onInfoPress}>
                        <Icon name="information-outline" size={24} color="#000" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onEditPress}>
                        <Icon name="pencil-outline" size={24} color="#000" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.headerText}>{subject}</Text>
                <Text style={styles.subHeader}>{code} | {award}</Text>
            </View>
            {progressData.map((item, index) => (
                <View key={index} style={styles.progressContainer}>
                    <Text style={styles.progressLabel}>{item.label}</Text>
                    <Progress.Bar
                        progress={ item.value / item.max}
                        width={null}
                        height={5}
                        color={item.color}
                        style={styles.progressBar}
                        borderWidth={0}
                        borderRadius={10}
                        unfilledColor="#ebebeb"
                    />
                    <Text style={styles.progressPercentage}>{Math.round((item.value / item.max) * 100)}%  {item.value}/{item.max}</Text>
        
                </View>
            ))}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        margin: 10,
        width: '31%',
        borderWidth: .4,
        borderColor: '#7e79c2',
    },
    textContainer: {
        alignItems: 'flex-end', // Aligns text to the right
        justifyContent: 'center',
    
       

    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: -20
        
        
    },
    topRightIcons: {
        marginLeft: 'auto',  // Pushes the icons to the right
        flexDirection: 'row',
        marginBottom: 11
        
       
    },
    headerText: {
        color: '#5a55b2',
        fontSize: 24,
        fontWeight: 'bold',
        
    },
    subHeader: {
        color: '#926240',
        fontSize: 16
    },
    progressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        maxHeight: 50,
        marginBottom: 4
    },
    progressLabel: {
        color: '#926240',
        flex: 1,
        fontSize: 16
    },
    progressBar: {
        flex: 3,
        marginHorizontal: 10,
       

       
    },
    
    progressText: {
        color: '#000',
        fontSize: 16
    }
});

export default SubjectCard;
