import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';  // Ensure this package is installed

const SimpleSidebar = () => {
  const [isResourcesOpen, setResourcesOpen] = useState(false);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'view-dashboard', submenu: false },
    { id: 'subjects', label: 'Subjects', icon: 'book-outline', submenu: false },
    { id: 'resources', label: 'Resources', icon: 'folder', submenu: false },
    { id: 'yearwise', label: 'Year-wise', icon: 'calendar-today', submenu: true },
    { id: 'chapterwise', label: 'Chapter-wise', icon: 'book-open-variant', submenu: true },
    { id: 'revisionnotes', label: 'Revision Notes', icon: 'notebook-outline', submenu: true },
    { id: 'progress', label: 'Progress', icon: 'chart-line', submenu: false },
    { id: 'notes', label: 'Notes', icon: 'notebook', submenu: false },
    { id: 'check', label: 'AI Check', icon: 'robot', submenu: false },
    { id: 'calendars', label: 'Calendars', icon: 'calendar-month', submenu: false },
    { id: 'forum', label: 'Forum', icon: 'forum', submenu: false },
    { id: 'tips', label: 'Tips & Hints', icon: 'lightbulb-on', submenu: false },
    // Add more items as necessary
  ];

  const toggleResources = () => {
    setResourcesOpen(!isResourcesOpen);
  };

  return (
    <View style={styles.sidebar}>
      <ScrollView style={styles.scrollView}>
        {menuItems.map(item => {
          if (item.submenu && !isResourcesOpen) {
            return null; // Hide submenu items unless resources are open
          }

          const itemStyle = item.submenu ? styles.submenuItem : styles.menuItem;

          return (
            <TouchableOpacity
              key={item.id}
              style={itemStyle}
              onPress={() => item.label === 'Resources' ? toggleResources() : console.log(`${item.label} clicked`)}
            >
              <Icon name={item.icon} size={24} color="#fff" style={styles.icon} />
              <Text style={styles.text}>{item.label}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    backgroundColor: '#121212',
    width: 200, // Adjust width as necessary
  },
  scrollView: {
    paddingHorizontal: 15,
    paddingVertical: 70,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  submenuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginLeft: 20,  // Indent submenu items
  },
  text: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },
  icon: {
    width: 30,
  }
});

export default SimpleSidebar;

