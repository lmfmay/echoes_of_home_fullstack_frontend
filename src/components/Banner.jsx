import mic from '../assets/mic.jpg';
function Banner(){
    return (
    <div className='heroContain'>
        <img className='heroImg' src={mic} alt="Image of a microphone" />
        <div className='textOver'>
            <h3>“When a language dies, so much more than words are lost. Language is the dwelling place of ideas that do not exist anywhere else. It is a prism through which to see the world.”</h3>
            <p>-Robin Wall Kimmerer</p>
        </div>

        
    </div>)
}

export default Banner