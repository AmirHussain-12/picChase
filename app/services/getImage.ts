import axios from 'axios';
import Config from 'react-native-config';


export const getImages = (searchTerm: string)=>{
const url = `${Config.BASE_URL}/?key=${Config.API_KEY}&q=${searchTerm}&image_type=photo&per_page=20`;
   return axios.get(url)
}
  