import axios from 'axios'

const API_URL = `https://project3-three-lyart.vercel.app/`;
// const API_URL = `http://localhost:8000`;

const headers1 = {
    "Content-Type" : "multipart/form-data"
}

export const getSignedUrl = async() => {
  try{
    const response = await axios.get(`${API_URL}/image-url`);
    return response.data;
  }
  catch(error){
    console.log('Error while fetching Signed Url',error.message);
    return error.response.data;
  }
}

export const uploadFile = async(url,file) => {
  try{
    const response = await axios.put(url,file, {headers : headers1});
    return response.data;
  }
  catch(error){
    console.log('Error while uploading the file',error.message);
    return error.response.data;
  }
}
