import React from "react"
import './About.css'
import me from './Images/me1.jpg'


function AboutPage() {
    return(
        <div>
            <h1 className='about'>About Me</h1>
            <p className='textImg'> <img src={me} alt='Parker'></img>
                Hello and welcome to my website. I am more than happy to tell you about myself and my coding journey. 
                I graduated from Homestead High school June 2020, and had some prior knowledge of code from an elective course. 
                I was introduced to Python and HTML in that course, and had many hardships 
                understanding concepts that seemed inconceivable at the time. I told myself I’d never want a career writing code after taking the class. 
                Thankfully, I didn’t hold myself to that promise . A passion for hardware, and fascination with software assumed my will to try again. 
                I began using every resource available to me to learn online and teach myself. I took two Udemy courses for coding 2D and 3D VideoGames to start.
                I moved onto reading the self-taught programmer by Cory Althoff, and Coding Games by Robert C Matthews. 
                Although my main focus was to learn to make VideoGames through my journey of self-teaching I found myself constantly wanting to learn more. 
                I wanted the ability to create anything, not just a video game. I enrolled in DevCodeCamp’s 12 week full-stack software development course. 
                There I learned the fundamentals of JavaScript, C#, Python, HTML, and CSS. We learned tools and frameworks such as React.js, Node.js, Django, MySQL, .Net, and Redux. 
                The learning was fast paced and the work was difficult, but was an incredible experience in the end. My knowledge, passion, and experience with code was greatly increased. 
                I worked with some amazing developers and created functional full stack applications during my time at DevCodeCamp. 
                Now I am working as a freelance developer while actively perusing my A+ and .Net certifications. 
                I am grateful to myself most of all for not giving up because of the complexity. For me, creating software out of nothing is a beautiful, creative, and can be a life changing experience. 
                Thank you for taking the time to read and get to know me! 
            </p>
            {/* <div className='img2'>
                <img src={grad} alt='Parker'></img>
            </div> */}
        </div>
            
        
      )
}

 
export default AboutPage;