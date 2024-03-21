"use client";
import { IArrowUp } from "@/assets/icons";
import {
  HeadlineSection,
  SectionList,
  Experience,
  SocialLinks,
  BodyOverlay,
  Project,
  Header,
  SkillList,
} from "@/components";

import { summery, Experiences, Projects } from "@/data";
import { useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string | undefined>(
    "SUMMARY"
  );

  return (
    <main className="  md:px-10  lg:px-0 lg:py-0 dark:text-slate-400 ">
      <Header extraClass="fixed top-0 left-0 right-0 z-50" />
      <BodyOverlay onScrollChange={setActiveSection} />
      <div className=" container   ">
        <div className="flex items-start flex-col lg:flex-row pt-36 lg:pt-0 ">
          <div className="LEFT lg:h-screen lg:max-w-[528px] w-full flex flex-col lg:sticky top-0 py-0 lg:py-24">
            <div className=" mb-12 lg:mb-8">
              <HeadlineSection />
              <SectionList activeSection={activeSection} />
            </div>
            <SkillList />
            <SocialLinks />
          </div>
          <div className="RIGHT lg:max-w-[575px] w-full pt-24  lg:py-24 ">
            <section
              id="SUMMARY"
              data-id="SUMMARY"
              className="  mb-16 lg:mb-24"
            >
              <div className="sticky top-0 z-20 -mx-6  w-screen  px-6 py-5 bg-white dark:bg-transparent dark:backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest dark:text-slate-200 lg:sr-only">
                  About
                </h2>
              </div>
              {summery.jsx}
            </section>

            <section id="EXPERIENCE" data-id="EXPERIENCE">
              <div className="sticky top-0 z-20 -mx-6  w-screen  px-6 py-5 bg-white dark:bg-transparent dark:backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 ">
                <h2 className="text-sm font-bold uppercase tracking-widest dark:text-slate-200 lg:sr-only">
                  Experience
                </h2>
              </div>
              {Experiences.map((el) => (
                <Experience key={el.id} data={el} />
              ))}

              <a
                href="#"
                className="group hover:text-teal-300 transition-all flex items-center  w-fit py-2 mb-5  "
              >
                View Résumé in PDF
                <span className="rotate-45 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px">
                  <IArrowUp width={16} height={16} />
                </span>
              </a>
            </section>
            <section id="PROJECTS" data-id="PROJECTS">
              <div className="sticky top-0 z-20 -mx-6   w-screen  px-6 py-5 bg-white dark:bg-transparent dark:backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest dark:text-slate-200 lg:sr-only">
                  Projects
                </h2>
              </div>
              {Projects.map((el) => (
                <Project key={el.id} data={el} />
              ))}
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
