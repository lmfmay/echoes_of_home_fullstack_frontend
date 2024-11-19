import { getAudio, getAllTalents } from "../utilities/controllers.mjs";
//import { userProfiles } from '../utilities/data.mjs';
import {useState, useEffect} from 'react';
import UserCard from "./UserCard";


function UserCardCollection() {
    const [talentProfiles, setTalentProfiles] = useState([]);
    const [talentloading, setTalentLoading] = useState(true);
    const [talenterror, setTalentError] = useState(null);

    const [audioProfiles, setAudioProfiles] = useState([]);
    const [audioloading, setAudioLoading] = useState(true);
    const [audioerror, setAudioError] = useState(null);
   
    // Fetch audio profiles once when the component mounts
    useEffect(() => {
      async function fetchTalentProfiles() {
        try {
          let res = await getAllTalents(); //get talent profiles from controller
          setTalentProfiles(res.data);
          setTalentLoading(false);
        } catch (error) {
          console.error("Error fetching talent profiles:", err);
          setTalentError("Failed to load talent profiles");
          setTalentLoading(false);
        }
      }

      async function fetchAudioProfiles() {
        try {
          let res = await getAudio(); // get audio profiles from controller
          setAudioProfiles(res.data);
          setAudioLoading(false);
        } catch (err) {
          console.error("Error fetching audio profiles:", err);
          setAudioError("Failed to load audio profiles");
          setAudioLoading(false);
        }
      }
  
      fetchTalentProfiles();
      fetchAudioProfiles();
    }, []);
  
    if (audioloading) {
      return <p>Loading audio profiles...</p>;
    }
  
    if (audioerror) {
      return <p>{error}</p>;
    }
  
    // Map user profiles to user cards and pass the relevant audio profile
    const userCards = userProfiles.map((profile, i) => {
        // Find the matching audio profile for the user's voice_sample
        const audioProfile = audioProfiles.find((audio) => audio.id === profile.voice_sample);

        return (
        <UserCard
            key={i}
            {...profile}
            audioProfile={audioProfile} // Pass down the audio profile as prop
        />
        );
    });
  
    return (
        <section className="userCardContain">
            {userCards}
        </section>
    );
  }

export default UserCardCollection