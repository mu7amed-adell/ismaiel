import React, { useRef } from 'react'
import { prevProjects } from '../constants'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';


gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
const [project1, project2, project3] = prevProjects

const sectionRef = useRef(null);
const project1Ref = useRef(null);
const project2Ref = useRef(null);
const project3Ref = useRef(null);




useGSAP(() => {
    const projects = [project1Ref.current, project2Ref.current, project3Ref.current];
    
    projects.forEach((card, index)=> {
    gsap.fromTo(
        card,
        {
            y:50, opacity:0
        },{
            y:0, 
            opacity:1, 
            duration: 1, 
            delay: 0.3 * (index+1), 
            scrollTrigger: {
                trigger: card,
                start:'top bottom-=100',
            }
        }
    )
})
    gsap.fromTo(
        sectionRef.current, 
        {opacity:0}, 
        {opacity:1, duration: 1.5}
    ) 
},[]);

  return (
    <section id='work' ref={sectionRef} className='app-showcase'>
      <div className='w-full'>
        <div className='showcaselayout'>

        {/*left side*/}
          <div className='first-project-wrapper' ref={project1Ref}>
            <div className='image-wrapper'>
              <img src={project1.imgPath} alt='First Project' />
            </div>
            <div className='text-content'>
              <h2>{project1.text}</h2>
              <p className='text-white-50 md:text-xl'>
                {project1.parag}
              </p>
            </div>
          </div>
        {/*right side*/}
            <div className='project-list-wrapper overflow-hidden'>
                <div className='project' ref={project2Ref}>
                    <div className='image-wrapper bg-[#ffefdb]'>
                        <img src={project2.imgPath} alt='Second Project'/>
                    </div>
                    <h2>{project2.text}</h2>
                </div>
                <div className='poject' ref={project3Ref}>
                    <div className='image-wrapper bg-[#ffe7eb]'>
                        <img src={project3.imgPath} alt='third Project'/>
                    </div>
                    <h2>{project3.text}</h2>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default ShowcaseSection
