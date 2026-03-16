import React, { useEffect, useState, useRef } from "react";
import CardSection from "./CardSection";
import Bio from "./Bio";

const About = () => {
  const parentRef = useRef(null);
  const childRef = useRef(null);

  const [cardSectionHeight, setCardSectionHeight] = useState(0);
  const [bioSectionHeight, setBioSectionHeight] = useState(0);
  const [parentSectionHeight, setParentSectionHeight] = useState(0);
  const [scaleFactor, setScaleFactor] = useState(1);

  useEffect(() => {
    const updateParentSectionHeight = () => {
      const parentHeight = parentRef.current.offsetHeight;
      setParentSectionHeight(parentHeight);
    };

    // Call the update function initially
    updateParentSectionHeight();

    // Call the update function whenever the window is resized
    window.addEventListener("resize", updateParentSectionHeight);

    return () => {
      // Clean up the event listener when the component is unmounted
      window.removeEventListener("resize", updateParentSectionHeight);
    };
  }, []);

  useEffect(() => {
    // Check if any child component has a greater height than the parent
    if (cardSectionHeight > parentSectionHeight || bioSectionHeight > parentSectionHeight) {
      // Calculate the scale factor to fit the child components within the parent
      const newScaleFactor = parentSectionHeight / Math.max(cardSectionHeight, bioSectionHeight);
      setScaleFactor(newScaleFactor * 0.95);
    } else {
      // Reset the scale factor if the child components fit within the parent
      setScaleFactor(1);
    }
  }, [cardSectionHeight, bioSectionHeight, parentSectionHeight]);

  const transformStyle = scaleFactor !== 1 ? `scale(${scaleFactor})` : "";

  return (
    <div className="flex-col sm:mt-0 md:flex-1 w-screen sm:overflow-y-scroll md:flex-row md:flex scrollbar-hide">
      <div className="absolute hidden md:flex md:bg-secondary md:w-[40%] lg:w-[42%] md:h-[100vh]"></div>
      <div
        ref={parentRef}
        className="z-10 flex flex-col py-4 md:py-0 md:flex-row md:justify-center items-center"
        style={{ transform: transformStyle }}
      >
        <CardSection setCardSectionHeight={setCardSectionHeight} scaleFactor={scaleFactor} />
        <Bio setBioSectionHeight={setBioSectionHeight} scaleFactor={scaleFactor} />
      </div>
    </div>
  );
};

export default About;
