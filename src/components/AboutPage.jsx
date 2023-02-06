import React, { useEffect, useState } from 'react'
import '/src/index.css'
import '/src/App.css'
import {gsap} from "gsap";
import Skills from './Skills';


function AboutPage() {
  const [page, setPage]=useState(false)

  useEffect(()=>{

    if(page){
    gsap.to("#Programming",{
      scale:2,
      xPercent:-30,
      yPercent: 200,
      color: "#022f40"
    })
    gsap.to("#Algorithm",{
      rotate: 90,
      color: "#ffad52",
      scale:1,
      xPercent:80,
      yPercent: 350
      
    })
    gsap.to("#Software",{
      rotate: -90,
      color: "#ffad52",
      scale:2,
      xPercent:-40,
      yPercent:600
      
    })
    gsap.to("#Documentation",{
      scale:0.7,
      rotate: -90,
      xPercent:65,
      yPercent:550,
      color: "#38aecc"
  
    })
    gsap.to("#Coding",{
      scale:1.5,
      yPercent:1300,
      xPercent: 50,
      color: "#0090c1"
      
    })
    gsap.to("#Information",{
      scale:0.7,
      yPercent:1200,
      rotate: 90,
      color: "#183446"
    })
    gsap.to("#Testing",{
      scale:1.6,
      xPercent: 20
    })
    gsap.to("#Computer",{
      scale:1.2,
      xPercent: -90,
      color: "#046e8f",
      duration:0.5
      
    })
    gsap.to("#Debugging",{
      scale:1.2,
      yPercent: 430,
      xPercent: 80
    })
    gsap.to("#Design",{
      scale:1.2,
      yPercent: 300,
      xPercent: -80
    })
    gsap.to("#Readability",{
      scale:1.2,
      yPercent: 400,
    })
    gsap.to("#Learning",{
      scale:1.2,
     yPercent:-90,
     xPercent:10 
     
     
    })
  }
   })

 
  
  return (
   
    <div className='Aboutles' id='Aboutles' >
       <div className="head-skills nav">
            <ul className='buttons'>
              <button className="about-text-about" onClick={()=>{
              document.getElementById("cl-about").style.opacity = "1";
              document.getElementById("cl2-about").style.opacity = "0";
              document.getElementById("cl3-about").style.opacity = "0";
              setPage(false)
              console.log(page)

              }}> About</button>
              <button className="about-text" onClick={()=>{
              document.getElementById("cl2-about").style.opacity = "1";
              document.getElementById("cl-about").style.opacity = "0";
              document.getElementById("cl3-about").style.opacity = "0";
              setPage(true)
              }}> Skills</button>
              <button className="about-text" onClick={()=>{
              document.getElementById("cl2-about").style.opacity = "0";
              document.getElementById("cl-about").style.opacity = "0";
              document.getElementById("cl3-about").style.opacity = "1";
              setPage(true)
              }} > Experience</button>
             </ul>
          </div>
        <div className="firts-view" id="cl-about">
        <div className="gg">
              <div className="gg-symbol gg-symbol--rect gg-symbol--5 gg-symbol--gradient" ></div>
              <div className="gg-symbol gg-symbol--rect gg-symbol--3" ></div>
              <div className="gg-symbol gg-symbol--disc" ></div>
            </div>
            <div className="gg">
              <div className="gg-symbol gg-symbol--rect gg-symbol--8 gg-symbol--gradient" ></div>
            </div>
            <div className="gg">
              <div className="gg-symbol gg-symbol--rect gg-symbol--31 gg-symbol--gradient" ></div>
              <div className="gg-symbol gg-symbol--square" ></div>
              <div className="gg-symbol gg-symbol--rect gg-symbol--2" ></div>
              <div className="gg-symbol gg-symbol--rect gg-symbol--5 gg-symbol--gradient" ></div>
            </div>
          <div className="gg">
          <div className="gg-symbol gg-symbol--rect gg-symbol--5 gg-symbol--gradient" ></div>
          <div className="gg-symbol gg-symbol--rect gg-symbol--3" ></div>
          <div className="gg-symbol gg-symbol--disc" ></div>
          <div className="gg-symbol gg-symbol--rect gg-symbol--8 gg-symbol--gradient" ></div>
          </div>
          <div className="Title">
              <h1 className='sal'>HI, I'm Erwin </h1>
            </div>
            <div className="gg">
              <div className="gg-symbol gg-symbol--rect gg-symbol--5 gg-symbol--gradient" ></div>
              <div className="gg-symbol gg-symbol--disc" ></div>
            </div>
            <div className="gg">
              <div className="gg-symbol gg-symbol--rect gg-symbol--4 gg-symbol--gradient" ></div>
              <div className="gg-symbol gg-symbol--rect gg-symbol--2 gg-symbol--gradient" ></div>
              <div className="gg-symbol gg-symbol--rect gg-symbol--9 gg-symbol--gradient" ></div>
            </div>
            
            <div className="text_about">
            <p className="text-main">Responsive animations and ScrollTriggers, here you come! 🥳 gsap.matchMedia() lets you tuck setup code into a function that only executes when a particular media query matches and then when it no longer matches, all the GSAP animations and ScrollTriggers created during that function's execution get reverted automatically! Customizing for mobile/desktop or prefers-reduced-motion accessibility is remarkably simple.
  
              Each media query string is exactly what you'd pass into the browser's native window.matchMedia()</p>
          </div>
            <div className="gg">
              <div className="gg-symbol gg-symbol--rect gg-symbol--5 gg-symbol--gradient"></div>
              <div className="gg-symbol gg-symbol--rect gg-symbol--2 gg-symbol--gradient" ></div>
            </div>
            <div className="gg">
              <div className="gg-symbol gg-symbol--rect gg-symbol--4 gg-symbol--gradient" ></div>
              <div className="gg-symbol gg-symbol--rect gg-symbol--2 gg-symbol--gradient" ></div>
              <div className="gg-symbol gg-symbol--rect gg-symbol--9 gg-symbol--gradient" ></div>
            </div>
        </div>

        <div className="second-view" id="cl2-about">
        <div className="gg">
              <div className="gg-symbol gg-symbol--rect gg-symbol--3" ></div>
              <div className="gg-symbol gg-symbol--disc" ></div>
              <div className="gg-symbol gg-symbol--rect gg-symbol--5 gg-symbol--gradient" ></div>
            </div>
            
            <div className="gg">
              <div className="gg-symbol gg-symbol--rect gg-symbol--8 gg-symbol--gradient" ></div>
            </div>
          <div className="gg">
          <div className="gg-symbol gg-symbol--rect gg-symbol--5 gg-symbol--gradient" ></div>
          <div className="gg-symbol gg-symbol--rect gg-symbol--3" ></div>
          <div className="gg-symbol gg-symbol--disc" ></div>
          <div className="gg-symbol gg-symbol--rect gg-symbol--8 gg-symbol--gradient" ></div>
          </div>
          <div className="gg">
              <div className="gg-symbol gg-symbol--rect gg-symbol--31 gg-symbol--gradient" ></div>
              <div className="gg-symbol gg-symbol--square" ></div>
              <div className="gg-symbol gg-symbol--rect gg-symbol--2" ></div>
              <div className="gg-symbol gg-symbol--rect gg-symbol--5 gg-symbol--gradient" ></div>
            </div>
          <div className="Title">
              <h1 className='sal'>Skills </h1>
            </div>
            
            <div className="gg">
              <div className="gg-symbol gg-symbol--rect gg-symbol--4 gg-symbol--gradient" ></div>
              <div className="gg-symbol gg-symbol--rect gg-symbol--2 gg-symbol--gradient" ></div>
              <div className="gg-symbol gg-symbol--rect gg-symbol--9 gg-symbol--gradient" ></div>
            </div>
            <div className="gg">
              <div className="gg-symbol gg-symbol--rect gg-symbol--5 gg-symbol--gradient" ></div>
              <div className="gg-symbol gg-symbol--disc" ></div>
            </div>
            
            <div className="text_about">
            <p className="text-main2">Responsive animations and ScrollTriggers,Responsive animations and ScrollTriggersResponsive animations Responsive animations and ScrollTriggers and ScrollTriggers Responsive animations and ScrollTriggers .
  
              </p>
          </div>
            <div className="gg">
              <div className="gg-symbol gg-symbol--rect gg-symbol--2 gg-symbol--gradient" ></div>
              <div className="gg-symbol gg-symbol--rect gg-symbol--5 gg-symbol--gradient"></div>
            </div>
            <div className="gg">
              <div className="gg-symbol gg-symbol--rect gg-symbol--4 gg-symbol--gradient" ></div>
              <div className="gg-symbol gg-symbol--rect gg-symbol--2 gg-symbol--gradient" ></div>
              <div className="gg-symbol gg-symbol--rect gg-symbol--9 gg-symbol--gradient" ></div>
            </div>
            <div className='cloud'>
            <div id="Programming"> Programming</div>
            <div id="Algorithm"> Algorithm</div>
            <div id="Software"> Software</div>
            <div id="Documentation"> Documentation</div>
            <div id="Coding"> Coding</div>
            <div id="Information"> Information</div>
            <div id="Testing"> Testing</div>
            <div id="Computer"> Computer</div>
            <div id="Debugging"> Debugging</div>
            <div id="Design"> Design</div>
            <div id="Readability"> Readability</div>
            <div id="Learning"> Learning</div>
            </div>
            
        </div>


        <div className="three-view" id="cl3-about">
        
            
            <div className="gg">
              <div className="gg-symbol gg-symbol--rect gg-symbol--8 gg-symbol--gradient" ></div>
            </div>
          <div className="gg">
          <div className="gg-symbol gg-symbol--rect gg-symbol--5 gg-symbol--gradient" ></div>
          <div className="gg-symbol gg-symbol--rect gg-symbol--3" ></div>
          <div className="gg-symbol gg-symbol--disc" ></div>
          <div className="gg-symbol gg-symbol--rect gg-symbol--8 gg-symbol--gradient" ></div>
          </div>
          <div className="gg">
              <div className="gg-symbol gg-symbol--rect gg-symbol--3" ></div>
              <div className="gg-symbol gg-symbol--disc" ></div>
              <div className="gg-symbol gg-symbol--rect gg-symbol--5 gg-symbol--gradient" ></div>
            </div>
          <div className="gg">
              <div className="gg-symbol gg-symbol--rect gg-symbol--31 gg-symbol--gradient" ></div>
              <div className="gg-symbol gg-symbol--square" ></div>
              <div className="gg-symbol gg-symbol--rect gg-symbol--2" ></div>
              <div className="gg-symbol gg-symbol--rect gg-symbol--5 gg-symbol--gradient" ></div>
            </div>
          <div className="Title">
              <h1 className='sal'>Experience </h1>
            </div>
            
            <div className="gg">
              <div className="gg-symbol gg-symbol--rect gg-symbol--4 gg-symbol--gradient" ></div>
              <div className="gg-symbol gg-symbol--rect gg-symbol--2 gg-symbol--gradient" ></div>
              <div className="gg-symbol gg-symbol--rect gg-symbol--9 gg-symbol--gradient" ></div>
            </div>
            <div className="gg">
              <div className="gg-symbol gg-symbol--rect gg-symbol--5 gg-symbol--gradient" ></div>
              <div className="gg-symbol gg-symbol--disc" ></div>
            </div>
            
            <div className="text_about">
            <p className="text-main2">Responsive animations and ScrollTriggers,Responsive animations and ScrollTriggersResponsive animations Responsive animations and ScrollTriggers and ScrollTriggers Responsive animations and ScrollTriggers .
  
              </p>
          </div>
            
            <div className="gg">
              <div className="gg-symbol gg-symbol--rect gg-symbol--4 gg-symbol--gradient" ></div>
              <div className="gg-symbol gg-symbol--rect gg-symbol--2 gg-symbol--gradient" ></div>
              <div className="gg-symbol gg-symbol--rect gg-symbol--9 gg-symbol--gradient" ></div>
            </div>
            <div className="gg">
              <div className="gg-symbol gg-symbol--rect gg-symbol--2 gg-symbol--gradient" ></div>
              <div className="gg-symbol gg-symbol--rect gg-symbol--5 gg-symbol--gradient"></div>
            </div>
            
            
        </div>
        
        <div className="skills-list">
         <a href="#" className="fa fa-instagram"></a>
         <a href="#" className="fa fa-twitter"></a>
         <a href="https://co.linkedin.com/" className="fa fa-linkedin"></a>
         <a href="#" className="fa fa-google"></a>
         <a href='#' className="fa fa-github"></a>
        </div>
        

    </div>
  
  )
}

export default AboutPage