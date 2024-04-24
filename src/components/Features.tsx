import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const exploreVideo = "/assets/videos/explore.mp4";
const explore1Img = "/assets/images/explore1.jpg";
const explore2Img = "/assets/images/explore2.jpg";

const Features = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    gsap.to("#features_title", {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: "#features_title",
        toggleActions: "restart reverse restart reverse",
        start: "top 85%",
      },
    });

    gsap.to("#exploreVideo", {
      scrollTrigger: {
        trigger: "#exploreVideo",
        toggleActions: "play pause reverse restart",
        start: "-10% bottom",
      },

      onComplete: () => {
        videoRef.current?.play();
      },
    });

    gsap.to(".g_grow", {
      scale: 1,
      opacity: 1,
      ease: "power1",
      scrollTrigger: {
        trigger: ".g_grow",
        toggleActions: "restart reverse restart reverse",
        start: "top 85%",
        scrub: 5.5,
      },
    });

    gsap.to(".g_text", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1,
      scrollTrigger: {
        trigger: ".g_text",
        toggleActions: "restart reverse restart reverse",
        start: "top 85%",
      },
    });
  }, []);

  return (
    <section className="h-full common-padding bg-zinc relative overflow-hidden">
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <h1 id="features_title" className="section-heading text-center">
            Forged in Titanium
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="flex-center flex-col sm:px-10">
            <div className="relative h-[50vh] w-full flex items-center rounded-3xl">
              <video
                playsInline
                id="exploreVideo"
                preload="none"
                muted
                autoPlay
                ref={videoRef}
                className="w-full h-full object-cover object-center rounded-3xl"
              >
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>

            <div className="flex flex-col w-full relative">
              <div className="feature-video-container mt-2">
                <div className="overflow-hidden flex-1 h-[50vh] rounded-3xl">
                  <img
                    src={explore1Img}
                    alt="titanium-1"
                    className="feature-video g_grow rounded-3xl"
                  />
                </div>
                <div className="overflow-hidden flex-1 h-[50vh] rounded-3xl">
                  <img
                    src={explore2Img}
                    alt="titanium-2"
                    className="feature-video g_grow rounded-3xl"
                  />
                </div>
              </div>
              <div className="feature-text-container">
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    iPhone 15 Pro is{" "}
                    <span className="text-white">
                      the first iPhone to feature an aerospace-grade titanium
                      design
                    </span>
                    , using the same alloy that spacecrafts use for missions to
                    Mars.
                  </p>
                </div>

                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    Titanium has one of the best strength-to-weight ratios of
                    any metal, making these are our{" "}
                    <span className="text-white">
                      lightest Pro models ever.
                    </span>{" "}
                    You'll notice the difference the moment you pick one.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
