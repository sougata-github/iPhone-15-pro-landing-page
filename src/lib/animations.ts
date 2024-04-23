import { RefObject } from "react";
import * as THREE from "three";

interface animationProps {
  timeline: GSAPTimeline;
  rotationRef: RefObject<THREE.Group>;
  rotationState: number;
  firstTarget: string;
  secondTarget: string;
  stylesObject: {
    transform: string;
    duration: number;
  };
}

export const animateWithGsapTimeline = ({
  timeline,
  rotationRef,
  rotationState,
  firstTarget,
  secondTarget,
  stylesObject,
}: animationProps) => {
  timeline.to(rotationRef.current?.rotation!, {
    y: rotationState,
    duration: 1,
    ease: "power2.inOut",
  });

  timeline.to(
    firstTarget,
    {
      ...stylesObject,
      ease: "power2.inOut",
    },
    "<"
  );

  timeline.to(
    secondTarget,
    {
      ...stylesObject,
      ease: "power2.inOut",
    },
    "<"
  );
};
