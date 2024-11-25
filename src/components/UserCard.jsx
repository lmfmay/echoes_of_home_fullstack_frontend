import AudioPlayer from "./AudioPlayer";

function UserCard({ name, about, languages, gender, audioProfile }) {
  const userAudioSrc = audioProfile.sample


  const talentLanguages = languages.map((language, i)=>{
    const talentLang = language.language
    const talentAccent = language.accent
      return (
        <div key ={i}>
          <p style={{color:'white', fontStyle:'italic'}}>Laguage: {talentLang[0].toUpperCase() + talentLang.substring(1)}</p>
          <p style={{color:'white', fontStyle:'italic'}}>Accent: {talentAccent[0].toUpperCase() + talentAccent.substring(1)}</p>
        </div>        
      )
    });
  return (
    <div className="userCard">
      {/* <img alt={`${name}'s avatar`} /> */}
      <h3>{name}</h3>
      <p style={{color:'white'}}>{about}</p>
      <div className="additionalInfo">
        {talentLanguages}
        <p style={{color:'white', fontStyle:'italic'}}>Gender: {gender[0].toUpperCase() + gender.substring(1)}</p>
      </div>
      

      {userAudioSrc ? <AudioPlayer url={userAudioSrc} /> : <p>No audio available</p>}
    </div>
  );
}

export default UserCard;