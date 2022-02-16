import React,{useEffect, useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import CoinItem from '../components/CoinItem';
import axios from 'axios';

const {height, width} = Dimensions.get('window');

const Home = () => {
    const [currencies, setCurrencies] = useState([])
    const [count, setCount] = useState(0)
    const [symbolArray, setSymbolArray] = useState([]);

    const ws = new WebSocket('wss://stream.binance.com:9443/ws');
    const msg = {
      method: 'SUBSCRIBE',
      params: symbolArray,
      id: 1,
    };
    
    ws.onopen = () => {
      ws.send(JSON.stringify(msg));
    };

    ws.onmessage = async (e) => {
      // a message was received
      let d =  await JSON.parse(e.data);
      if(d.s)
      {
      setData(d)
      }
    // setCurrencies(updatedList)    
    
    };

   const setData = async (data) => {
    // console.log('Result', data.c, data.s)

    const promises =  await currencies.map((item) => 
    {
      if (item.symbol == data.s){
        item.current_price = data.c;
        item.percentChange = data.P
        console.log(item);

        return item;
      }
      return item
    });
      if(currencies.length)
      {
        setCurrencies(promises)
      }

   } 

    useEffect(() => {
      ws.onopen = () => {
      ws.send(JSON.stringify(msg));
  }
      },[symbolArray]);
    

    useEffect(() => {
      _fetchCrytocoins();
      },[]);

    const _fetchCrytocoins = async () => {
        const URL = `https://api.binance.com/api/v3/exchangeInfo`;
        const res = await axios.get(URL);
        var data = res.data.symbols;
        let sliceData = data.slice(0,50);
        var arr = [];
        var currArray = [];
        for(var i = 0; i < sliceData.length; i ++)
        {
          if(sliceData[i].isMarginTradingAllowed && sliceData[i].status === "TRADING")
          {
          var p = sliceData[i].symbol;
          var item = {
            "symbol" : sliceData[i].symbol,
          }
          var symbol = p.toLowerCase() + "@ticker";
          console.log('Forlopp -----> ', symbol)
          arr.push(symbol)
          currArray.push(item)
        }
        }
       
        setSymbolArray(arr)
        setCurrencies(currArray) 
      };


  
    return (
        <SafeAreaView>

         <Text style={styles.header}>Market</Text> 
            <FlatList
            style={{paddingBottom: 200}}
            data={currencies}
            keyExtractor={item => item.symbol}
            renderItem={({item}) => (
              <CoinItem id={item.symbol} symbol={item.symbol} price={item.current_price} logo={item.image} percentage={item.percentChange} />
            )}
            />
                       
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header : {
      marginTop: 20, 
      marginBottom: 20, 
      fontSize: 24, 
      fontWeight: '900', 
      marginLeft: 15
    }
})

export default Home;