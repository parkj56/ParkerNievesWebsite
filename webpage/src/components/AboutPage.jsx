import React from "react"
import './About.css'
import me from './Images/me1.jpg'


function AboutPage() {
    return(
        <div>
            <h1 className='about'>About Me</h1>
            <p className='textImg'> <img src={me} alt='Parker'></img>
                Hello and welcome to my website. I am excited to tell you about myself and my coding journey. 
                I graduated Homestead High School, where I gained knowledge of code from an elective course. 
                I was introduced to Python and HTML in that course, but I had trouble 
                understanding coding concepts at the time. I thought I’d never want a career writing code after taking that class, but 
                thankfully, I didn’t hold myself to that. A passion for hardware, and fascination with software inspired me to try again. 
                I utilized every resource available to me to learn online and educate myself. First, I took two Udemy courses for coding 2D and 3D VideoGames.
                Then I read the Self-Taught Programmer by Cory Althoff and Coding Games by Robert C Matthews. 
                Although my main focus was to learn to make VideoGames, through my self-teaching journey, I found myself constantly wanting to learn more. 
                I wanted the ability to create anything, not just a video game. I enrolled in DevCodeCamp’s 12-week full-stack software development course. 
                There I learned the fundamentals of JavaScript, C#, Python, HTML, and CSS. I learned tools and frameworks such as React.js, Node.js, Django, MySQL, .Net, and Redux. 
                The course was fast paced and the work was difficult, but it was an incredible experience in the end. My knowledge, passion, and experience with code was increased greatly. 
                I worked with amazing developers and created functional full-stack applications during my time at DevCodeCamp. 
                Now I am working as a freelance developer while actively pursuing my A+ and .Net certifications. 
                I am proud of myself for not giving up because, for me creating software out of nothing is a beautiful, creative, and can be a life changing experience. 
                Thank you for taking the time to read and get to know me. 
            </p>
            {/* <div className='img2'>
                <img src={grad} alt='Parker'></img>
            </div> */}
        </div>
            
        
      )
}

 
export default AboutPage;