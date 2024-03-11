"use client";
import { IArrowUp } from "@/assets/icons";
import { BodyOverlay, Gallery, Header, Modal } from "@/components";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

type PageProps = { params: { slug: string } };

const Page = ({ params }: PageProps) => {
  return (
    <>
      <Header extraClass="fixed top-0 left-0 right-0 z-10" />
      <BodyOverlay />

      <section className="hero min-h-screen ">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold dark:text-teal-300">
              Canvase Events Dashboar
            </h1>
            <p className="py-6 dark:text-slate-50 ">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <a href="#gallery" className="btn btn-outline dark:text-teal-300  ">
              Have a Look
              <span className="rotate-180">
                <IArrowUp width={16} height={16} />
              </span>
            </a>
          </div>
        </div>
      </section>
      <section id="gallery" className="pb-56">
        <div className="max-w-[1280px] mx-auto px-10 md:px- ">
          <h3 className="dark:text-teal-300 text-2xl font-bold  mb-16">
            Gallery
          </h3>
          <Gallery slug={params.slug} />
        </div>
      </section>
    </>
  );
};

export default Page;
