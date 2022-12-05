import '../AboutMe/AboutMe.css';

function AboutMe(){
    return (
        <div id='about-me-background'>
            <div className='about-me'>
                <img src={require('../Images/AnthonysPortrait.jpg')} />
                <p>Introduction Cover letter about my past, present and future!</p>
            </div>
        </div>
    )
}

export default AboutMe;