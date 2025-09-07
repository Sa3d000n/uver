import Image from "next/image";
import HeadSection from "./_components/HeadSection";
import Header from "./_components/Header";
import ComprehensiveSection from "./_components/ComprehensiveSection";
import SmoothScrollWrapper from "./_components/SmoothScroll";
import ScrollTabs from "./_components/ScrollDemo";
import StepsSection from "./_components/StepsSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <SmoothScrollWrapper>
          <HeadSection />
          <ComprehensiveSection />
          <StepsSection />
        </SmoothScrollWrapper>
      </main>
    </>
  );
}
