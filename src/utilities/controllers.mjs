import axios from "axios";

async function getAudio(){
  //Get audio profiles from PlayHT using backend as a proxy.
  let url = 'http://localhost:3000/api/audioProfiles' 
  try {
      let res = await axios.get(url)
      return res;
  } catch (error) {
      console.error(error)
  }
}

//Get talent list from DB
async function getAllTalents(){
    try {
      let url = 'http://localhost:3000/api/talents';
      let res = await axios.get(url)
      return res.data;
    
  } catch (error) {
      console.error(error)
  }
}
export {getAudio, getAllTalents}
