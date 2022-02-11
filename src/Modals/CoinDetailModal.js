import React, {useState} from 'react';
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Modal,
  TextInput,
  Keyboard,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CoinDetailModal = ({Visibility, Data, closeModal}) => {



  return (
    <Modal
      animationType={'slide'}
      transparent={true}
      visible={Visibility}
      onRequestClose={() => {
        console.log('Modal has been closed.');
      }}>
        <View style={styles.modal}>
 
        <View style={{ backgroundColor: '#ECF5FF', paddingLeft: 20, paddingRight:40, paddingTop: 20, paddingBottom: 15, borderTopLeftRadius: 10, borderTopRightRadius: 10}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.text}><Text>Rank</Text> <Text style={{color: 'green', fontWeight: '900'}}> 1 </Text></Text>
              <Icon
                  onPress={closeModal}
                  style={{alignSelf: 'flex-end', marginRight: 17}}
                  color="#33909F"
                  size={24}
                  name="edit"
               />
          </View>
          <Text style={styles.name}>Bitcoin</Text>
        </View>

        <View style={{ justifyContent: 'center', marginTop: 30, marginBottom: 40, marginRight: 40, marginLeft: 40}}>

        </View>

        </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    height: '50%',
    bottom: 0,
    backgroundColor: '#fefefe',
    width: '100%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    position: 'absolute',
  },
  text: {
    fontSize: 15,
    width: '100%',  
    color: 'grey',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    width: '100%',
  },
  container: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    width: '100%',
    height: 60,
    backgroundColor: '#0158ff',
  },
  inputText: {
    marginTop: 20,
    paddingLeft: 10,
    borderRadius: 8,
    height: 50,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: '#dcecef',
    marginBottom: 20,
  },
  inputCode: {
    marginTop: 10,
    borderRadius: 8,
    textAlign: 'center',
    height: 50,
    marginLeft: 3,
    marginRight: 7,
    borderWidth: 1,
    borderColor: '#dcecef',
    marginBottom: 20,
  },
});

export default CoinDetailModal;
