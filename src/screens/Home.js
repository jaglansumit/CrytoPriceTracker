import React,{useEffect} from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useState } from 'react/cjs/react.development';
import CoinDetailModal from '../Modals/CoinDetailModal';
import CoinItem from '../components/CoinItem';
import axios from 'axios';

const {height, width} = Dimensions.get('window');

const Home = () => {
    const [currencies, setCurrencies] = useState([])

    useEffect(() => {
        _fetchCrytocoins();

        setInterval(async () => {
         console.log('Interval')
         _fetchCrytocoins();
        },2000);
   
      },[]);

    const _fetchCrytocoins = async () => {
        const URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=500&page=1&sparkline=true&price_change_percentage=7d`;
        const res = await axios.get(URL);
        console.log('Await R ------> ')
        let data = res.data;
        setCurrencies(data);
      };  

  
    return (
        <SafeAreaView>

         <Text style={{marginTop: 20, marginBottom: 20, fontSize: 24, fontWeight: '900', marginLeft: 15}}>Market</Text> 
            <FlatList
            data={currencies}
            keyExtractor={item => item.id}
            initialNumToRender={5}
            maxToRenderPerBatch={10}
            renderItem={({item}) => (
              <CoinItem id={item.id} symbol={item.symbol} price={item.current_price} logo={item.image} percentage={item.price_change_percentage_24h} />
            )}
            />
            
        <CoinDetailModal Visibility={false} />
           
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    flex : 1
})

export default Home;