import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CoinItem = (props) => {

    const percentage =  props.percentage ? Math.sign(props.percentage) : 0
    return (
        <View style={{justifyContent: 'space-between', flexDirection: 'row', marginBottom: 20}}>

        <View style={{flexDirection: 'row'}}>
            <Image resizeMode="contain" source={{uri : "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"}} style = {{width: 30, height: 30, marginLeft: 15}} />
            <View style={{marginLeft: 10}}>
                <Text>{props.id}</Text>
                {/* <Text>{props.symbol}</Text> */}
            </View>
        </View>  

        <View style={{marginRight: 15}}>
           <View style={{ flexDirection: 'row'}}>
                <Icon name="dollar" style={{marginTop: 2}} />
                <Text>{props.price}</Text>
           </View> 

           <View>
               <Text style={{color: percentage === 1 ? 'green' : 'red', fontSize: 10, textAlign: 'right'}}>{props.percentage + "%"}</Text>
           </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container : {
        padding: 10, 
    },
    textStyle: {
        fontSize: 20,
        color: 'black',
        fontWeight: '900'
    }

})


export default CoinItem;