import React, { useEffect } from 'react'
import {gsap} from "gsap";

function  conver(element) {
  element.style.overflow = "hidden";
  element.innerHTML = element.innerText
      .split("")
      .map((char) => {
          if (char === " ") {
              return `<span>&nbsp;</span>`;
          }
          return `<span class="animatedis">${char}</span>`;
      })
      .join("");

  return element;
}

function Intro() {
  
  useEffect(()=>{
    console.log("entrando en linea")
    conver(document.querySelector(".hero-main-title"));
    conver(document.querySelector(".hero-main-title2"));
    conver(document.querySelector(".hero-main-description"));

    const timeline=new gsap.timeline();

    timeline.set(".animatedis", { y: 0, yPercent: 100 });
    timeline.to(
      ".hero-main-title .animatedis",
      {
          yPercent: 0,
          stagger: 0.15,
          ease: "back.out(1.7)",
      },
      "introtext"
  )
  .to(
      ".hero-main-title2 .animatedis",
      {
          yPercent: 0,
          stagger: 0.15,
          ease: "back.out(1.7)",
      },
      "introtext"
  )
  .to(
      ".hero-main-description .animatedis",
      {
          yPercent: 0,
          stagger: 0.07,
          ease: "back.out(1.7)",
      },
      "introtext"
  )

  })
  return (
    <div className="page-wrapper" id="plc">
        <section className="hero">
          <div className="hero-wrapper">
            <div className="hero-main">
              <h1 className="hero-main-title" >Hi, my </h1>
              <h1 className="hero-main-title2">name is Erwin </h1>
              <p className="hero-main-description">Systems engineering Student | Data analyst</p>
            </div>
          </div>
        </section>
      </div>
  )
}

export default Intro