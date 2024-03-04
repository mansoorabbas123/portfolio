"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

export const BodyOverlay = ({
  onScrollChange,
}: {
  onScrollChange: Dispatch<SetStateAction<string | undefined>>;
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.x, y: e.y });
    };

    document.body.addEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const summary = document.querySelector("#SUMMARY");
    const experience = document.querySelector("#EXPERIENCE");
    const project = document.querySelector("#PROJECTS");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onScrollChange((entry.target as HTMLElement).dataset.id);
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    summary && observer.observe(summary);
    experience && observer.observe(experience);
    project && observer.observe(project);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
    />
  );
};
