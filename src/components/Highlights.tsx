import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import VideoCarousel from "./VideoCarousel";

gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: "#title",
        toggleActions: "restart restart none none",
      },
      duration: 1,
    });
  }, []);

  return (
    <section
      id="highlights"
      className="w-screen h-full overflow-hidden common-padding bg-zinc"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <h1 id="title" className="section-heading text-center">
            Get the highlights
          </h1>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
