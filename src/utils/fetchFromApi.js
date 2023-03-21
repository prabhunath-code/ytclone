import axios from 'axios'


const BASE_URL='https://youtube-v31.p.rapidapi.com'


const options = {
  
    url: BASE_URL,
    params: { maxResults: '50' },
    headers: {
      'X-RapidAPI-Key': "fb03f9a08dmsh85ad58d147c8143p1553f8jsn79233ca35117" ,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

 export const fetchFromApi= async (url)=>{
 const {data}=   await axios.get(`${BASE_URL}/${url}`,options)

 return data;
 }

