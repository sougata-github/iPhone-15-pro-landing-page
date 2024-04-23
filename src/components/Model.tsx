import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import ModelView from "./ModelView";

import { useEffect, useRef, useState } from "react";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";

import { models, sizes } from "@/constants";
import { animateWithGsapTimeline } from "@/lib/animations";

const yelloImg = "/assets/images/yellow.jpg";

export type modelType = {
  id?: number;
  title: string;
  color: string[];
  img: string;
};

const Model = () => {
  const [size, setSize] = useState<string>("small");
  const [model, setModel] = useState<modelType>({
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#FFE7B9", "#6F6C64"],
    img: yelloImg,
  });

  //camera control for the model view
  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  //new group of three.js elements i.e models
  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  //rotation values for each model
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  const timeline = gsap.timeline();

  const stylesObject1 = {
    transform: "translateX(-100%)",
    duration: 2,
  };

  const stylesObject2 = {
    transform: "translateX(0)",
    duration: 2,
  };

  useEffect(() => {
    if (size === "large") {
      animateWithGsapTimeline({
        timeline,
        rotationRef: small,
        rotationState: smallRotation,
        firstTarget: "#view1",
        secondTarget: "#view2",
        stylesObject: stylesObject1,
      });
    }

    if (size === "small") {
      animateWithGsapTimeline({
        timeline,
        rotationRef: large,
        rotationState: largeRotation,
        firstTarget: "#view2",
        secondTarget: "#view1",
        stylesObject: stylesObject2,
      });
    }
  }, [size]);

  useGSAP(() => {
    gsap.to("#heading", {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: "#heading",
        toggleActions: "restart none none none",
      },
      duration: 1,
    });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading text-center">
          Take a closer look
        </h1>

        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
            <ModelView
              index={1}
              groupRef={small}
              gsapType="view1"
              controlRef={cameraControlSmall}
              setRotationState={setSmallRotation}
              item={model}
              size={size}
            />
            <ModelView
              index={2}
              groupRef={large}
              gsapType="view2"
              controlRef={cameraControlLarge}
              setRotationState={setLargeRotation}
              item={model}
              size={size}
            />
            <Canvas
              className="w-full h-full"
              style={{
                position: "fixed",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                overflow: "hidden",
              }}
              eventSource={document.getElementById("root")!}
            >
              <View.Port />
            </Canvas>
          </div>

          <div className="mx-auto w-full">
            <p className="text-sm font-light text-center mb-5">{model.title}</p>

            <div className="flex-center">
              <ul className="color-container">
                {models.map((item, i) => (
                  <li
                    key={i}
                    className="w-6 h-6 rounded-full mx-2 cursor-pointer"
                    style={{
                      backgroundColor: item.color[0],
                    }}
                    onClick={() => setModel(item)}
                  ></li>
                ))}
              </ul>

              <button className="size-btn-container">
                {sizes.map(({ label, value }) => (
                  <span
                    key={label}
                    className="size-btn"
                    style={{
                      backgroundColor: size === value ? "white" : "transparent",
                      color: size === value ? "black" : "white",
                    }}
                    onClick={() => setSize(value)}
                  >
                    {label}
                  </span>
                ))}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
