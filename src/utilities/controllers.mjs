import axios from "axios";

async function getAudio(){
  //Get audio profiles from PlayHT using backend as a proxy.
  let url = 'http://localhost:3000/api/audioProfiles' 
  try {
      let res = await axios.get(url)
      return res.data;
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

//create talent in DB
async function createOneTalent(formData) {
  try {
    let url = 'http://localhost:3000/api/talents';
    let res = await axios.post(url, formData);
    return res.data;
  } catch (error) {
    console.error(error)
  }
}

//get one talent from DB
async function getOneTalent(id) {
  try {
    let url = `http://localhost:3000/api/talents/${id}`;
    let res = await axios.get(url);
    return res.data;
  } catch (error) {
    console.error(error)
  }
}

export {getAudio, getAllTalents, createOneTalent, getOneTalent}
