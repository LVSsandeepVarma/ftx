import React, { useEffect, useRef } from "react";

export default function Video() {
  const videoRef = useRef(null);
  useEffect(() => {
    const videoref = videoRef?.current;
    const video = document.getElementById("vid");
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          // If the video is in the viewport, start loading it
          if (entry.isIntersecting) {
            // videoref.src = src;
            // Delay in milliseconds (e.g., 1000ms = 1 second)
            const delay = 4000; // 2 seconds

            // Pause the video initially
            video.pause();

            // Wait for the delay duration
            setTimeout(function () {
              // Play the video after the delay
              video.play();
            }, delay);
            observer.unobserve(videoref);
          }
        });
      });

      observer.observe(videoref);
    } else {
      // Fallback for browsers that don't support Intersection Observer
    //   videoref.src = src;
      videoref.load();
    }
  });
  return (
    <>
      <video
        //   _ngcontent-vth-c7=""
        ref={videoRef}
        autoplay
        controls
        height="auto"
        loop
        muted
        width="100%"
        id="vid"
        preload="none"
      >
        <source
          // _ngcontent-vth-c7=""
          src="assets/video/Live-Result.mp4"
          type="video/mp4"
        />{" "}
        Your browser does not support the video tag.{" "}
      </video>
    </>
  );
}
