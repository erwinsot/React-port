import React, { useEffect } from 'react'
import {gsap} from "gsap";

function Skills() {

    useEffect(()=>{
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
          color: "#046e8f"
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
       })

  return (
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
  )
}

export default Skills