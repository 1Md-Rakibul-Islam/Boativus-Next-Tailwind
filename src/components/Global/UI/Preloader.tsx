"use client";

import { useEffect, useState } from "react";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading process
    setTimeout(() => {
      setIsLoading(false);
    }, 800); // Set a timeout to simulate loading time
  }, []);

  return (
    <>
      {isLoading && (
        <div className="preloader">
          <span className="loader"></span>
        </div>
      )}
    </>
  );
};

export default Preloader;
