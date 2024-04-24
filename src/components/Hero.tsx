import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { useEffect, useState } from "react";

const smallHeroVideo = "/assets/videos/smallHero.mp4";
const heroVideo = "/assets/videos/hero.mp4";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 640 ? smallHeroVideo : heroVideo
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 640) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);
    return () => window.removeEventListener("resize", handleVideoSrcSet);
  }, []);

  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 2,
    });

    gsap.fromTo(
      "#vid",
      {
        y: 60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        delay: 1,
        duration: 1,
        ease: "power1.inOut",
      }
    );

    gsap.to("#cta", {
      opacity: 1,
      delay: 2,
    });
  }, []);

  return (
    <section className="nav-height relative w-full pb-12 bg-black">
      <div className="h-5/6 pt-6 sm:pt-2 flex flex-center flex-col">
        <h1 id="hero" className="hero-title text-xl">
          iPhone 15 Pro
        </h1>
        <div className="md:w-10/12 w-9/12 flex justify-center">
          <video
            id="vid"
            className="max-h-[500px] sm:h-fit pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="flex flex-col items-center opacity-0 mt-4 sm:mt-0"
      >
        <a href="#highlights" className="btn">
          Buy
        </a>
        <p className="font-normal text-sm">From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
