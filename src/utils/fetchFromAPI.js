import axios from "axios";
export const BASE_URL="https://youtube-v31.p.rapidapi.com";
const options = {
    params:{
        maxResults:50,
    },
    headers: {
        'X-RapidAPI-Key': '24c8219664msh753f25b09ba6008p12b37cjsn8090b3837b54',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      },
};

export const fetchFromAPI = async (url) =>{
    const {data} = await axios.get(`${BASE_URL}/${url}`, options)
    return data;
}