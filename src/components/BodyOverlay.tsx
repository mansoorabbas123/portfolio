"use client";
import { useTheme } from "@/context/themeContext";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

type Props = {
  onScrollChange?: Dispatch<SetStateAction<string | undefined>>;
};

export const BodyOverlay = ({ onScrollChange }: Props) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { isDarkTheme } = useTheme();
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.x, y: e.y });
    };

    document.body.addEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (onScrollChange) {
      const experience = document.querySelector("#EXPERIENCE");
      const summary = document.querySelector("#SUMMARY");
      const project = document.querySelector("#PROJECTS");

      const intersectionHandler = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            onScrollChange((entry.target as HTMLElement).dataset.id);
          }
        });
      };

      const options = {
        threshold: 0.9,
      };

      const observer = new IntersectionObserver(intersectionHandler, {
        rootMargin: "100px",
        threshold: 0.4,
      });
      summary && observer.observe(summary);
      experience && observer.observe(experience);
      project && observer.observe(project);
    }
  }, [onScrollChange]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        background: isDarkTheme
          ? `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
          : "",
      }}
    />
  );
};
