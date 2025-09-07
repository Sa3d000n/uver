"use client";

import DevicesMockup from "./DevicesMockup";
import { FaHourglassEnd } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { BiTask } from "react-icons/bi";
import { PiEyesDuotone } from "react-icons/pi";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { ScrollToPlugin } from "gsap/all";
gsap.registerPlugin(
  useGSAP,
  ScrollSmoother,
  ScrollTrigger,
  SplitText,
  ScrollToPlugin
);

function HeadSection() {
  const smoothRef = useRef(null);
  const container = useRef(null);
  const qx = useRef(null);
  const qy = useRef(null);
  useGSAP(
    () => {
      // if (!smoothRef.current) {
      //   smoothRef.current = ScrollSmoother.create({
      //     wrapper: "#smooth-wrapper",
      //     content: "#smooth-content",
      //     smooth: 2,
      //     effects: true,
      //   });
      // }
      const masterTL = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none restart reverse",
        
        },
      });
      const splith2 = SplitText.create("h2", {
        type: "words",
      });

      masterTL.from(splith2.words, {
        opacity: 0,
        y: 50,
        stagger: 0.1,
        onComplete: () => splith2.revert(),
        scrollTrigger: {
          trigger: container.current,
        },
      });

      masterTL.from(".timerDev", {
        opacity: 0,
        y: 50,
        delay: 0.5,
      });
      masterTL.from(".properties", {
        opacity: 0,
        x: 50,
        stagger: 0.3,
      });

      gsap.set("#device", {
        rotationX: 0,
        rotationY: 0,
        transformStyle: "preserve-3d",
        transformPerspective: 1000,
        transformOrigin: "center center",
      });

      qx.current = gsap.quickTo("#device", "rotationX", {
        duration: 0.4,
        ease: "power3.out",
      });
      qy.current = gsap.quickTo("#device", "rotationY", {
        duration: 0.4,
        ease: "power3.out",
      });

      const handleMouseMove = (e) => {
        const xRatio = (e.clientX / window.innerWidth - 0.55) * 55; // range -15 to 15
        const yRatio = (e.clientY / window.innerHeight - 0.55) * 55;

        qx.current(-yRatio);
        qy.current(xRatio);
      };

      container.current.addEventListener("mousemove", handleMouseMove);
    },
    { scope: container }
  );
  const { contextSafe } = useGSAP();

  const handleScroll = contextSafe(() => {
    gsap.to(window, { scrollTo: ".comprehensive", duration: 1 });
  });
  return (
    <section
      ref={container}
      className="overflow-hidden container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 items-center py-12 md:py-24 relative "
    >
      <div className="md:col-span-1 lg:col-span-1 space-y-8 mt-20 lg:mt-0">
        <h2 className="text-lg font-light leading-tight">
          Discover, apply, succeed – UVER makes college search effortless. Your
          future starts right here.
        </h2>
        <div className="timerDev space-y-4">
          <p className="text-sm font-medium text-gray-600 flex items-center">
            <span className="material-icons text-lg mr-2">
              <FaHourglassEnd />
            </span>{" "}
            Launching starts in
          </p>
          <div className="flex space-x-4 text-center">
            <div>
              <span className="text-5xl font-bold" id="days">
                23
              </span>
              <p className="text-sm text-gray-500">days</p>
            </div>
            <span className="text-5xl font-bold text-gray-300">:</span>
            <div>
              <span className="text-5xl font-bold" id="hours">
                22
              </span>
              <p className="text-sm text-gray-500">hours</p>
            </div>
            <span className="text-5xl font-bold text-gray-300">:</span>
            <div>
              <span className="text-5xl font-bold" id="minutes">
                43
              </span>
              <p className="text-sm text-gray-500">minutes</p>
            </div>
          </div>
        </div>
      </div>
      <div onClick={handleScroll}>
        <DevicesMockup />
      </div>

      <div className="md:col-span-2 lg:col-span-1 space-y-6 text-gray-600">
        <div className="properties flex items-center space-x-4">
          <span className="material-icons text-3xl">
            <FaSearch />
          </span>
          <p className="text-lg font-semibold">SEARCH</p>
        </div>
        <div className="properties flex items-center space-x-4">
          <span className="material-icons text-3xl">
            <IoChatbubbleEllipsesOutline />
          </span>
          <p className="text-lg font-semibold">CHAT</p>
        </div>
        <div className="properties flex items-center space-x-4">
          <span className="material-icons text-3xl">
            <BiTask />
          </span>
          <p className="text-lg font-semibold">APPLY</p>
        </div>
        <div className="properties flex items-center space-x-4">
          <span className="material-icons text-3xl">
            <PiEyesDuotone />
          </span>
          <p className="text-lg font-semibold">TRACK</p>
        </div>
      </div>
      <div className="absolute -bottom-32  left-1/2 tracking-[15rem] -translate-x-1/2 text-gray-200 text-[300px] font-extrabold -z-10 select-none">
        UVER
      </div>
    </section>
  );
}

export default HeadSection;
