"use client"
import Preloader from "@/components/Preloader";
import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import { useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { IoCalendarClearOutline } from "react-icons/io5";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  }) 

  useEffect(() => {
    const lenis = new Lenis();

    // start the requestAnimationFrame loop for Lenis
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // set a 2-second timeout to mimic a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = 'default';
      window.scrollTo(0, 0);
    }, 3000);

    // cleanup function to remove the animation loop and loading class
    return () => {
      lenis.destroy();
      clearTimeout(timer);
      document.body.classList.remove("loading");
    };
  }, []);

  return (
    <main ref={container} className="h-[200vh]">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Section1 scrollYProgress={scrollYProgress}/>
      <Section2 />
    </main>
  );
}

const Section1 = ({scrollYProgress}) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.7])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5])
  return (
    <motion.div style={{scale, rotate}} className="sticky top-0 overflow-none relative h-screen text-[3.5vw] flex flex-col items-center justify-center">
      <img 
        src="/images/buildings.png"
        alt="background"
        className="absolute brightness-90 overflow-hidden min-w-[1440px] min-h-[888px] lg:w-screen lg:h-[110vh] z-0"
      />
      <img
        src="/images/car.png"
        alt="car"
        className="brightness-90 absolute overflow-hidden min-w-[1440px] min-h-[888px] lg:w-screen lg:h-[110vh] z-10"
      />
      <div className="absolute px-5 lg:px-60 flex flex-col justify-between h-screen pb-20 pt-36">
        <p className="z-5 text-8xl lg:text-[235px] font-bold leading-[90px] lg:leading-[200px]">Monaco Grand Prix</p>
        <div className="z-20 hidden lg:flex lg:flex-col gap-10">
          <div className="flex flex-row font-bold text-4xl gap-6">
            <IoCalendarClearOutline className="text-4xl"/>
            <p>24 - 27 NOV 2023</p>
          </div>
          <div className="flex flex-row gap-5 items-center font-bold text-4xl">
            <img
              src="/images/monaco.svg"
              alt="car"
              className="w-14 h-14"
            />
            <p>Monaco</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const Section2 = () => {

  return (
    <div className="overflow-none relative h-screen w-full text-[3.5vw] flex flex-col">
      <img 
        src="/images/image2.png"
        alt="background"
        className="absolute brightness-90 overflow-hidden min-w-[1440px] min-h-[888px] lg:w-screen lg:h-[110vh] z-0"
      />
      <div className="flex flex-col justify-between z-10 w-full h-screen">
        <div className="px-2 pt-5 lg:pt-28 lg:px-20 flex flex-col justify-between w-full h-screen">
          <p className="font-bold text-5xl lg:text-7xl">Oracle In Practice</p>
          <div className="flex gap-4 w-full lg:w-4/5 overflow-x-scroll snap-x snap-mandatory md:overflow-hidden">
            <a href="https://example.com/monza-lap" target="_blank" rel="noopener noreferrer" className="w-1/4 min-w-[250px] h-[500px] bg-[url('/images/media-preview.png')] bg-no-repeat bg-cover rounded-xl snap-center">
              <div className="flex flex-col justify-between p-5 h-full">
                <p className="text-2xl text-white flex justify-end"><FaPlay /></p>
                <div className="flex flex-col gap-3">
                  <p className="text-[24px] text-white">Oracle Virtual Lap In Monza</p>
                  <div className="flex flex-row justify-between">
                    <p className="text-lg bg-slate-500 rounded-lg px-2 py-1">Virtual Lap</p>
                    <p className="text-lg">6 min read</p>
                  </div>
                </div>
              </div>
            </a>
            
            <a href="https://example.com/oracle-strategy" target="_blank" rel="noopener noreferrer" className="w-1/4 min-w-[250px] h-[500px] bg-[url('/images/media-preview2.png')] bg-no-repeat bg-cover rounded-xl snap-center">
              <div className="flex flex-col justify-between p-5 h-full">
                <p className="text-2xl text-white flex justify-end"><FaPlay /></p>
                <div className="flex flex-col gap-3">
                  <p className="text-[24px] text-white">Oracle Strategy Guide</p>
                  <div className="flex flex-row justify-between">
                    <p className="text-lg bg-slate-500 rounded-lg px-2 py-1">Oracle Strategy</p>
                    <p className="text-lg">4 min</p>
                  </div>
                </div>
              </div>
            </a>
            
            <a href="https://example.com/oracle-data" target="_blank" rel="noopener noreferrer" className="w-1/4 min-w-[250px] h-[500px] bg-[url('/images/media-preview3.png')] bg-no-repeat bg-cover rounded-xl snap-center">
              <div className="flex flex-col justify-between p-5 h-full">
                <p className="text-2xl text-white flex justify-end"><FaPlay /></p>
                <div className="flex flex-col gap-3">
                  <p className="text-[24px] text-white">Oracle Cloud Telemetry Data Checo</p>
                  <div className="flex flex-row justify-between">
                    <p className="text-lg bg-slate-500 rounded-lg px-2 py-1">Data</p>
                    <p className="text-lg">3 min read</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          </div>
        </div>
        </div>
        
  )
}
