import axios from 'axios';


export const getMarketData = async () => {

try {
  const URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=7d';
  const response = await axios.get(URL);

} catch (error) {
  console.log('error', error.message)
}

}


export default getMarketData; //Exporting Instance