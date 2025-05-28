import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button"
import HeroExperience from "../components/HeroModels/HeroExperience"
import { words } from "../constants"
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
    useGSAP(() => {
        gsap.fromTo(
        ".hero-text h1",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, stagger:0.2, duration: 1, ease: "power2.inOut" }
        );
    });


  return (
    <section id='hero' className='relative overflow-hidden'>
        <div className='absolute top-0 left-0 z-10'>
            <img src='/images/bg.png' alt='Background'/>
        </div>
        <div className='hero-layout'>
            {/*Left: hero content*/}
            <header className='flex flex-col justify-center md:full w-screen md:px20 px-5 ml-8'>
                <div className='flex flex-col gap-7'>
                    <div className='hero-text'>
                        <h1>Shaping 
                            <span className="slide">
                                <span className="wrapper">
                                    {words.map((word) => (
                                        <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">
                                            <img src={word.imgPath}
                                            alt={word.text}
                                            className="xl:size-12 md:size10 size-7 md:p-2 p-1 rounded-full bg-white-50"/>
                                            <span>{word.text}</span>

                                        </span>
                                    ))}

                                </span>
                            </span>
                        </h1>
                        <h1>Into Real Projects</h1>
                        <h1>that Deliver Results</h1>
                    </div>
                    <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">Hello, this is Mohamed a passonate AI Engineer.<br/>  Ready to take your business to the next level?</p>
                    <Button className="block mx-auto md:mx-0 md:w-80 md:h-16 w-60 h-12" id='button' text="See My Work"/>

                </div>
            </header>
            <figure>
                <div className="hero-3d-layout">
                    <HeroExperience />                                  
                </div>
            </figure>
        </div>
        <AnimatedCounter/>

    </section>
  )
}

export default Hero