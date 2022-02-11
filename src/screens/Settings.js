import React, {Component} from 'react';
import {
  TextInput,
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class Settings extends Component {

  render() {
    return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>

              {/* ---------------------- Account & Number ------------------- */}
              <View style={{marginLeft: 20, marginTop: 20}}>
              <Text style={{fontSize: 20, fontWeight: '900', fontFamily: 'Axiforma-Regular'}}>my account</Text>
              <Text style={{fontSize: 15, color: '#707070',fontFamily: 'Axiforma-Book', marginTop: 10}}>9812111495</Text>
              <Text style={{fontSize: 15, color: 'red',fontFamily: 'Axiforma-Book', marginTop: 10}}>₹6000</Text>
              </View>

              {/* --------------------- my information --------------- */}
              <View style={{marginLeft: 20, marginTop: 40}}>
              <Text style={{color: '#A9A9A9',fontFamily: 'Axiforma-Regular'}}>my information</Text>

              <View style={{flexDirection: 'row', marginTop: 15}}>
                <View style={styles.settingIconContainer}>
              <Icon
                color="#33909F"
                size={24}
                style={{ padding: 5}}
                name="user"
              />
              </View>
              <Text style={styles.settingName}>my name</Text>
              </View>

              <View style={{flexDirection: 'row', marginTop: 15}}>
                <View style={styles.settingIconContainer}>
              <Icon
                color="#33909F"
                size={24}
                style={{ padding: 5}}
                name="google-wallet"
              />
              </View>
              <Text style={styles.settingName}>my wallet</Text>
              </View>

              <View style={{flexDirection: 'row', marginTop: 15}}>
                <View style={styles.settingIconContainer}>
              <Icon
                color="#33909F"
                size={24}
                style={{ padding: 5}}
                name="home"
              />
              </View>
              <Text style={styles.settingName}>my payments</Text>
              </View>

              <View style={{flexDirection: 'row', marginTop: 15}}>
                <View style={styles.settingIconContainer}>
              <Icon
                color="#33909F"
                size={24}
                style={{ padding: 5}}
                name="phone"
              />
              </View>
              <Text style={styles.settingName}>my number</Text>
              </View>

              <View style={{flexDirection: 'row', marginTop: 15}}>
                <View style={styles.settingIconContainer}>
              <Icon
                color="#33909F"
                size={24}
                style={{ padding: 5}}
                name="clipboard"
              />
              </View>
              <Text style={styles.settingName}>Identity Proof</Text>
              </View>
              </View>


              {/* ----------------------- Other information ------------------- */}

              <View style={{marginLeft: 20, marginTop: 40}}>
              <Text style={{color: '#A9A9A9', fontFamily: 'Axiforma-Regular'}}>other information</Text>

              <View style={{flexDirection: 'row', marginTop: 15}}>
                <View style={styles.settingIconContainer}>
              <Icon
                color="#33909F"
                size={24}
                style={{ padding: 5}}
                name="edit"
              />
              </View>
              <Text style={styles.settingName}>password change</Text>
              </View>

              <View style={{flexDirection: 'row', marginTop: 15}}>
                <View style={styles.settingIconContainer}>
              <Icon
                color="#33909F"
                size={24}
                style={{ padding: 5}}
                name="gitlab"
              />
              </View>
              <Text style={styles.settingName}>log out</Text>
              </View>
              </View>
            </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
      settingName : {
        alignSelf: 'center', 
        marginLeft: 20, 
        fontFamily: 'Axiforma-Regular'
      },
      settingIconContainer: {
        backgroundColor: '#F0F0F0', 
        borderRadius: 10
      }

}); 