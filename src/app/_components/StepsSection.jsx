"use client";
import Image from "next/image";
import FolderCard from "./FolderCard/FolderCard";
import { IoMdSearch } from "react-icons/io";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { PiEyesDuotone } from "react-icons/pi";
import { LuNotebookPen } from "react-icons/lu";
import { FaBuildingColumns, FaSchool } from "react-icons/fa6";
import successPhoto from "../../../public/steps.webp";
import { IoMdSchool } from "react-icons/io";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger, SplitText } from "gsap/all";
import { IoArrowForward } from "react-icons/io5";
const STEPS = [
  {
    title: "Search for Your Ideal College",
    description:
      "Browse through an extensive database of colleges and universities. Refine your search based on location, majors, campus facilities, and more.",
    icon: <IoMdSearch />,
  },
  {
    title: "Chat with Admissions Experts",
    description:
      "Ask questions, seek advice, and gain valuable insights to make informed decisions about your college applications.",
    icon: <IoChatbubbleEllipsesOutline />,
  },
  {
    title: "Track Deadlines and Requirements",
    description:
      "Receive notifications for upcoming deadlines, document requirements, and submission dates. Keep track of the progress of your applications.",
    icon: <PiEyesDuotone />,
  },
  {
    title: "Apply with Confidence",
    description:
      "Utilize convenient form filling features, upload required documents seamlessly, and submit applications electronically.",
    icon: <LuNotebookPen />,
  },
  {
    title: "Plan Your College Future",
    description:
      "Once you receive acceptance letters, utilize UVER's tools to compare offers, evaluate financial aid packages, and make informed decisions.",
    icon: <FaBuildingColumns />,
  },
];
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);
function StepsSection() {
  const container = useRef(null);
  const icon = useRef(null);

  useGSAP(
    () => {
      ScrollTrigger.refresh();
      const masterTL = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none restart",
        },
      });
      masterTL.from(
        icon.current,
        {
          opacity: 0,
          y: -50,
        },
        "first"
      );
      masterTL.from(
        ".howWork",
        {
          opacity: 0,
          y: -50,
        },
        "first"
      );
      let splittedH1 = SplitText.create("h1", { type: "lines" });
      masterTL.from(
        splittedH1.lines,
        {
          x: gsap.utils.wrap([-100, 100]),
          opacity: 0,
          mask: true,
        },
        "first+=0.5"
      );
      masterTL.from(
        ".folder",
        {
          y: gsap.utils.wrap([-100, 100]),
          opacity: 0,
          mask: true,
          stagger: 0.1,
        },
        "first+=0.5"
      );
    },
    { scope: container }
  );
  return (
    <section ref={container} className="container mx-auto px-4 py-16">
      <header className="flex justify-between items-center mb-12">
        <div className="howWork flex items-center space-x-2">
          <div className="w-1 h-6 bg-gray-400"></div>
          <span className="text-sm font-semibold text-gray-600">
            How It Works
          </span>
        </div>
        <span ref={icon} className="icon text-gray-800 text-3xl">
          <IoMdSchool />
        </span>
      </header>
      <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16 space-y-4">
        Simple Steps to <br /> College Success
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 justify-items-center">
        {STEPS.map((step) => (
          <FolderCard
            description={step.description}
            icon={step.icon}
            title={step.title}
            key={step.title}
          />
        ))}
        <div className=" relative rounded-3xl shadow-lg overflow-hidden group  ">
          <Image
            alt="Students celebrating graduation"
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            src={successPhoto}
            height={512}
            width={512}
          />
          <div className="absolute inset-0 bg-black/35  flex flex-col justify-end p-8 text-white">
            <h2 className="text-2xl font-bold mb-2">
              Discover, apply, succeed - UVER app makes college search
              effortless.
            </h2>
            <a
              className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-full self-start flex items-center space-x-2 hover:bg-gray-200 transition-colors"
              href="#"
            >
              <span>Get Early Access</span>
              <span className="material-icons">
                <IoArrowForward />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StepsSection;
