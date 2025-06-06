import meinChair from '../assets/IMG_0902.jpeg';
function Intro() {
    return  (
        <div> 
            {/* Right */}
            <div> 
                <p> Im <span className='underline'> Kaley Vuong </span></p>
                <p> This is my website </p>
            </div>
            {/* Left */}
            <img src={meinChair} className='max-w-10'/>
        </div>

    )
}
export default Intro;