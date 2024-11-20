import AudioPlayer from "./AudioPlayer";

function UserCard({ name, about, languages, gender, audioProfile }) {
  const userAudioSrc = audioProfile.sample

  // const userCards = talentProfiles
  //   .filter((profile) => profile.voice_sample) //only include profiles with voice_samples prop
  //   .map((profile, i) => {
  //       // Find the matching audio profile for the user's voice_sample
  //       const audioProfile = audioProfiles.find((audio) => profile.voice_sample && audio.id === profile.voice_sample);

  const talentLanguages = languages.map((language)=>{
    const talentLang = language.language
    const talentAccent = language.accent
      return (
        <>
          <p style={{color:'blue', fontStyle:'italic'}}>Laguage: {talentLang[0].toUpperCase() + talentLang.substring(1)}</p>
          <p style={{color:'blue', fontStyle:'italic'}}>Accent: {talentAccent[0].toUpperCase() + talentAccent.substring(1)}</p>
        </>        
      )
    });
  return (
    <div className="userCard">
      {/* <img alt={`${name}'s avatar`} /> */}
      <h3>{name}</h3>
      <p>{about}</p>
      {talentLanguages}
      <p style={{color:'blue', fontStyle:'italic'}}>Gender: {gender[0].toUpperCase() + gender.substring(1)}</p>

      {userAudioSrc ? <AudioPlayer url={userAudioSrc} /> : <p>No audio available</p>}
    </div>
  );
}

export default UserCard;