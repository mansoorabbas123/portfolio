"use client";
import {
  HeadlineSection,
  SectionList,
  Experience,
  SocialLinks,
  BodyOverlay,
} from "@/components";

import { summery } from "@/data";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string | undefined>(
    "SUMMARY"
  );

  return (
    <main>
      <BodyOverlay onScrollChange={setActiveSection} />
      <div className=" container ">
        <div className="flex items-start">
          <div className="LEFT h-screen max-w-[528px] w-full flex flex-col sticky top-0 py-24">
            <div className="mb-auto">
              <HeadlineSection />
              <SectionList activeSection={activeSection} />
            </div>
            <SocialLinks />
          </div>
          <div className="RIGHT max-w-[575px] w-full py-24 ">
            <section
              id="SUMMARY"
              data-id="SUMMARY"
              className="text-gull-gray mb-24"
            >
              {summery.jsx}
            </section>
            <section id="EXPERIENCE" data-id="EXPERIENCE">
              <Experience />
              <Experience />
              <Experience />
              <Experience />
              <Experience />
            </section>
            <section id="PROJECTS" data-id="PROJECTS">
              <Experience />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
