import axios from 'axios';

const url = "https://data.buffalony.gov/resource/d6g9-xbgu.json"

export const fetchData = async() => {
  try {
    const response = await axios.get(url)
    // console.log(response)
    return response.data
  } catch(error){}
};