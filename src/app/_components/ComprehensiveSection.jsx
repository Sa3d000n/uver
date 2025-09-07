"use client";
import { useGSAP } from "@gsap/react";
import DevicesMockup from "./DevicesMockup";
import { MdOutlineMouse } from "react-icons/md";
import { useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
import ComprehensiveContentAndHeader from "./ComprehensiveContentAndHeader";

gsap.registerPlugin(
  useGSAP,
  Observer,
  ScrollSmoother,
  ScrollTrigger,
  SplitText
);

const NAV_ITEMS = [
  {
    id: 1,
    label: "College Search",
    header: "Coprehensive College Search",
    content:
      " Effortlessly explore a vast database of colleges and universities worldwide. Filter results based on your preferences, including location, majors, campus facilities, and more. Find the perfect fit for your educational journey.",
  },
  {
    id: 2,
    label: "Recommendations",
    header: "Personalized Advising",
    content:
      "Stay organized with an intuitive application tracker, Monitor the progress of your applications, track deadlines, and receive reminders to submit required documents. Never miss an important milestone on your path to higher education.",
  },
  {
    id: 3,
    label: "Tracker",
    header: "Application Tracker",
    content:
      "Receive tailored recommendations based on your interests, academic achievements, and career aspirations. Discover colleges and programs that align with your goals, ensuring you make informed decisions about your future.",
  },
  {
    id: 4,
    label: "Chat",
    header: "Engaging Experts Chat",
    content:
      "Feel free to inquire, seek counsel, and acquire valuable perspectives to assist you in making well-informed choices regarding your college applications. Receive tailored guidance and assistance every step of the way.",
  },
  {
    id: 5,
    label: "Application",
    header: "Seamless Application",
    content:
      "Submit applications directly through the app. Save time by completing and submitting forms electronically. Enjoy a hassle-free application process with streamlined document uploads and easy communication with admissions offices.",
  },
];

function ComprehensiveSection() {
  const container = useRef(null);
  const observerRef = useRef(null);
  const [activeSection, setActiveSection] = useState(1);
  const isScrolling = useRef(false);

  const changeSection = useCallback((direction) => {
    if (isScrolling.current) return;

    isScrolling.current = true;
    setActiveSection((prev) => {
      const newSection =
        direction === "down"
          ? Math.min(prev + 1, NAV_ITEMS.length)
          : Math.max(prev - 1, 1);

      if (prev === 2 || prev === 3 || prev === 4) {
        console.log("scrolled");
        gsap.to(window, { scrollTo: container.current, duration: 1 });
      }

      setTimeout(() => {
        isScrolling.current = false;
      }, 600);

      return newSection;
    });
  }, []);

  useGSAP(
    () => {
      if (observerRef.current) {
        observerRef.current.kill();
      }

      observerRef.current = Observer.create({
        type: "wheel,scroll,touch",
        target: container.current,
        tolerance: 10,
        onUp: () => changeSection("up"),
        onDown: () => changeSection("down"),
      });

      gsap.to(".mouse-indicator", {
        y: -15,
        repeat: -1,
        yoyo: true,
        duration: 1,
        ease: "power1.inOut",
      });

      gsap.from("nav p", {
        x: -20,
        opacity: 0,
        scrollTrigger: {
          trigger: ".comprehensive",
        },
      });

      return () => {
        if (observerRef.current) {
          observerRef.current.kill();
        }
      };
    },
    {
      scope: container,
      dependencies: [activeSection],
      revertOnUpdate: true,
    }
  );

  return (
    <section
      ref={container}
      className="comprehensive flex items-center justify-center min-h-screen bg-zinc-900"
    >
      <div className="w-full max-w-7xl mx-auto p-4 lg:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col space-y-12">
            <nav className="flex flex-col space-y-3">
              {NAV_ITEMS.map((item) => (
                <p
                  key={item.id}
                  className={`pl-4 border-l-2 transition-colors duration-300 ${
                    activeSection === item.id
                      ? "text-white font-semibold border-blue-500"
                      : "text-gray-400 hover:text-white border-transparent"
                  }`}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveSection(item.id);
                  }}
                >
                  {item.label}
                </p>
              ))}
            </nav>

            <ComprehensiveContentAndHeader
              content={NAV_ITEMS[activeSection - 1].content}
              header={NAV_ITEMS[activeSection - 1].header}
            />

            <div className="flex items-center text-neutral-500">
              <MdOutlineMouse className="mouse-indicator mr-2" size={24} />
            </div>
          </div>

          <div className="relative">
            <DevicesMockup activeSection={activeSection} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComprehensiveSection;
