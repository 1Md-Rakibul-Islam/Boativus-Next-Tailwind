"use client";

import { useEffect, useRef, useState } from "react";

type progressTypes = {
  title: string;
  bg: string;
  percent: string;
  width: string;
  color: string;
};

const ProgressBar = ({ progressData }: { progressData: progressTypes }) => {
  const [isInView, setIsInView] = useState(false);
  const [progressCounter, setProgressCounter] = useState(0); // Initialize progress counter

  const progress = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const progressBars = Array.from(
      document.getElementsByClassName("bar") as HTMLCollectionOf<HTMLElement>
    );

    const observer = new IntersectionObserver(function (items) {
      items.forEach(function (item) {
        if (item.isIntersecting) {
          setIsInView(true);
        }
      });
    });

    for (const progressBar of progressBars) {
      observer.observe(progressBar);
    }

    // Clean up the observer when the component unmounts
    return () => {
      for (const progressBar of progressBars) {
        observer.unobserve(progressBar);
      }
    };
  }, []);

  // Update progress counter when progress is in view
  useEffect(() => {
    if (isInView) {
      const targetProgress = parseInt(progressData.percent);
      const duration = 1500; // 1.5 second duration
      const intervalDuration = duration / targetProgress;

      const interval = setInterval(() => {
        setProgressCounter((prevCounter) => {
          if (prevCounter < targetProgress) {
            return prevCounter + 1;
          }
          return prevCounter;
        });
      }, intervalDuration);

      // Clear interval when progress is complete
      return () => clearInterval(interval);
    }
  }, [isInView, progressData.percent]);

  return (
    <div ref={progress}>
      <div className="text-18 text-blue-B900 font-medium flex-centerY justify-between mb-2">
        <span>{progressData?.title}</span>
        <span>{progressCounter}%</span>
      </div>
      <div className="bar w-full rounded-full h-2 bg-brown-B75">
        <div
          style={{ width: progressData?.width }}
          className={`${
            isInView && "progress-grow"
          } bg-brown-B300 h-2 rounded-full flex justify-end items-center`}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
