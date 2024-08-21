import React, { useState } from 'react';
import { Modal, View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';
import ChatBot from './ComponentsAll/chatbot'; // Update with the correct path to your ChatBot file

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text>Welcome to our chat bot</Text>
      
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => setModalVisible(true)}
      >
        <Image source={require('./ComponentsAll/bot.png')} style={styles.image} />
      </TouchableOpacity>
      
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity 
              onPress={() => setModalVisible(false)} 
              style={styles.closeButton}
            >
              <Text style={styles.closeText}>X</Text>
            </TouchableOpacity>
            <ChatBot />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    padding: 5,
    borderRadius: 50,
    zIndex: 1000,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    width: '90%',
    height: '90%',
    backgroundColor: 'white',
    padding: 10,
    position: 'relative', // Ensures that the closeButton is positioned relative to this container
    borderRadius: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    left: 10,
     // Temporary color for visibility
    padding: 10,
    borderRadius: 20,
    zIndex: 1100, // Ensure it's above other elements
  },
  closeText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
